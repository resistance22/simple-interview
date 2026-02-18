import { spawn } from 'node:child_process'
import { existsSync, readFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const countsPath = resolve('.vitest-test-counts.txt')

if (existsSync(countsPath)) {
  rmSync(countsPath)
}

const vitestBin = resolve('node_modules/.bin/vitest')
const child = spawn(vitestBin, ['run'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    VITEST_COUNTS_PATH: countsPath,
  },
})

child.on('exit', (code) => {
  let passed = 0
  let notImplemented = 0
  const questionTotals = new Map()

  if (existsSync(countsPath)) {
    const lines = readFileSync(countsPath, 'utf8')
      .split('\n')
      .filter(Boolean)
    for (const line of lines) {
      const [question, status] = line.split('|')
      if (status === 'pass') passed += 1
      if (status === 'not-implemented') notImplemented += 1

      const entry = questionTotals.get(question) ?? {
        pass: 0,
        notImplemented: 0,
      }
      if (status === 'pass') entry.pass += 1
      if (status === 'not-implemented') entry.notImplemented += 1
      questionTotals.set(question, entry)
    }
    rmSync(countsPath)
  }

  console.log(
    `[tests] truly passed: ${passed}, not implemented: ${notImplemented}`
  )
  if (questionTotals.size > 0) {
    console.log('[tests] question results:')
    const questions = [...questionTotals.keys()].sort()
    for (const question of questions) {
      const { pass, notImplemented: ni } = questionTotals.get(question)
      const status =
        pass > 0 && ni === 0
          ? 'passed'
          : pass === 0 && ni > 0
            ? 'not implemented'
            : 'partial'
      console.log(`- ${question}: ${status} (pass: ${pass}, not implemented: ${ni})`)
    }
  }

  process.exit(code ?? 1)
})

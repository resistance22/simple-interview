import { appendFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'vitest'
import { NotImplementedError } from '../questions/NotImplementedError'

type TestMeta = {
  question: string
  name: string
}

export function testImplemented(
  meta: TestMeta,
  fn: () => void | Promise<void>
) {
  const countsPath = resolve(
    process.env.VITEST_COUNTS_PATH ?? '.vitest-test-counts.txt'
  )

  test(meta.name, async () => {
    try {
      await fn()
      appendFileSync(countsPath, `${meta.question}|pass\n`)
    } catch (err) {
      if (err instanceof NotImplementedError) {
        appendFileSync(countsPath, `${meta.question}|not-implemented\n`)
        return
      }
      throw err
    }
  })
}

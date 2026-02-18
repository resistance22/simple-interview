export class NotImplementedError extends Error {
  constructor(message = 'Not Implemented') {
    super(message)
    this.name = 'NotImplementedError'
  }
}

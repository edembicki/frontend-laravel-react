export const ignoreError = () => {
  return console.error = (error, ...args) => {
    if (typeof error === 'string' && error.startsWith('Warning')) {
      return
    }
    console.error(error, ...args)
  }
}

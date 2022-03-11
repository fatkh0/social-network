const required = (value) => {
  if (value && value.length) return null
  return "Input is empty"
}

export {required}
import formatStylish from './stylish.js'
import formatPlain from './plain.js'

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
}

const getFormatter = (name) => {
  if (!formatters[name]) {
    throw new Error(`Unknown format: ${name}`)
  }
  return formatters[name]
}

export default getFormatter

import _ from 'lodash'

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return String(value)
}

const formatPlain = (diffTree, parentPath = '') => {
  const lines = diffTree.flatMap((node) => {
    const propertyPath = parentPath ? `${parentPath}.${node.key}` : node.key

    switch (node.type) {
      case 'added':
        return `Property '${propertyPath}' was added with value: ${stringify(
          node.value,
        )}`
      case 'removed':
        return `Property '${propertyPath}' was removed`
      case 'changed':
        return `Property '${propertyPath}' was updated. From ${stringify(
          node.value1,
        )} to ${stringify(node.value2)}`
      case 'nested':
        return formatPlain(node.children, propertyPath)
      case 'unchanged':
        return []
      default:
        throw new Error(`Unknown type: ${node.type}`)
    }
  })

  return lines.join('\n')
}

export default formatPlain

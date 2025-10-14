const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2)
const bracketIndent = (depth, spacesCount = 4) =>
  ' '.repeat((depth - 1) * spacesCount)

const stringify = (data, depth) => {
  if (typeof data !== 'object' || data === null) {
    return String(data)
  }

  const entries = Object.entries(data).map(
    ([key, value]) => `${indent(depth)}  ${key}: ${stringify(value, depth + 1)}`,
  )

  return `{\n${entries.join('\n')}\n${bracketIndent(depth)}}`
}

const formatStylish = (diffTree, depth = 1) => {
  const lines = diffTree.map((node) => {
    const { key, type } = node

    switch (type) {
      case 'added':
        return `${indent(depth)}+ ${key}: ${stringify(node.value, depth + 1)}`
      case 'removed':
        return `${indent(depth)}- ${key}: ${stringify(node.value, depth + 1)}`
      case 'unchanged':
        return `${indent(depth)}  ${key}: ${stringify(node.value, depth + 1)}`
      case 'changed':
        return [
          `${indent(depth)}- ${key}: ${stringify(node.value1, depth + 1)}`,
          `${indent(depth)}+ ${key}: ${stringify(node.value2, depth + 1)}`,
        ].join('\n')
      case 'nested':
        return `${indent(depth)}  ${key}: {\n${formatStylish(
          node.children,
          depth + 1,
        )}\n${bracketIndent(depth + 1)}}`
      default:
        throw new Error(`Unknown type: ${type}`)
    }
  })

  return lines.join('\n')
}

export default tree => `{\n${formatStylish(tree)}\n}`

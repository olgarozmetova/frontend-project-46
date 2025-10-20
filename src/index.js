import path from 'path'
import getParsedData from './parsers.js'
import buildDiffTree from './genDiff.js'
import getFormatter from './formatters/index.js'

const gendiff = (file1, file2, format = 'stylish') => {
  const filepath1 = path.resolve(process.cwd(), '__fixtures__', file1)
  const filepath2 = path.resolve(process.cwd(), '__fixtures__', file2)

  const data1 = getParsedData(filepath1)
  const data2 = getParsedData(filepath2)

  const diffTree = buildDiffTree(data1, data2)
  const formatter = getFormatter(format)

  return formatter(diffTree)
}

export default gendiff

import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const getParsedData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const fileContent = fs.readFileSync(absolutePath, 'utf-8')
  const extension = path.extname(filepath)

  switch (extension) {
    case '.json':
      return JSON.parse(fileContent)
    case '.yml':
    case '.yaml':
      return yaml.load(fileContent)
    default:
      throw new Error(`Unsupported file format: ${extension}`)
  }
}

export default getParsedData

import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const getParsedData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const fileContent = fs.readFileSync(absolutePath, 'utf-8')
  const extension = path.extname(filepath)

  if (extension === '.json') {
    return JSON.parse(fileContent)
  }
  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(fileContent)
  }

  throw new Error(`Unsupported file format: ${extension}`)
}

export default getParsedData

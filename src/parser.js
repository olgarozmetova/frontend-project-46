import fs from 'fs'
import path from 'path'

const getParsedData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)

  const fileContent = fs.readFileSync(absolutePath, 'utf-8')

  const extension = path.extname(filepath)

  if (extension === '.json') {
    return JSON.parse(fileContent)
  }

  throw new Error(`Unsupported file format: ${extension}`)
}

export default getParsedData

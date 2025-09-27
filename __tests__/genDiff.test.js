import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { readFileSync } from 'fs'
import genDiff from '../src/genDiff.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

const readFile = filename => readFileSync(getFixturePath(filename), 'utf-8')

test('gendiff flat json', () => {
  const file1 = JSON.parse(readFile('file1.json'))
  const file2 = JSON.parse(readFile('file2.json'))
  const expected = readFile('expected.txt').trim()

  expect(genDiff(file1, file2)).toBe(expected)
})

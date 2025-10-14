import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { readFileSync } from 'fs'
import { test, expect } from '@jest/globals'
import genDiff from '../src/genDiff.js'
import getParsedData from '../src/parsers.js'
import formatStylish from '../src/formatters/stylish.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

const readFile = filename => readFileSync(getFixturePath(filename), 'utf-8')

test('gendiff nested json stylish', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = readFile('expected-stylish.txt').trim()

  const data1 = getParsedData(file1)
  const data2 = getParsedData(file2)

  const diffTree = genDiff(data1, data2)
  const result = formatStylish(diffTree)

  expect(result).toBe(expected)
})

test('gendiff nested yaml stylish', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  const expected = readFile('expected-stylish.txt').trim()

  const data1 = getParsedData(file1)
  const data2 = getParsedData(file2)

  const diffTree = genDiff(data1, data2)
  const result = formatStylish(diffTree)

  expect(result).toBe(expected)
})

import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { readFileSync } from 'fs'
import { test, expect } from '@jest/globals'
import buildDiffTree from '../src/genDiff.js'
import getParsedData from '../src/parsers.js'
import formatStylish from '../src/formatters/stylish.js'
import formatPlain from '../src/formatters/plain.js'
import formatJson from '../src/formatters/json.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

const readFile = filename => readFileSync(getFixturePath(filename), 'utf-8')

test('gendiff nested json "stylish format"', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = readFile('expected-stylish.txt').trim()

  const data1 = getParsedData(file1)
  const data2 = getParsedData(file2)

  const diffTree = buildDiffTree(data1, data2)
  const result = formatStylish(diffTree)

  expect(result).toBe(expected)
})

test('gendiff nested yaml "stylish format"', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  const expected = readFile('expected-stylish.txt').trim()

  const data1 = getParsedData(file1)
  const data2 = getParsedData(file2)

  const diffTree = buildDiffTree(data1, data2)
  const result = formatStylish(diffTree)

  expect(result).toBe(expected)
})

test('gendiff nested json "plain format"', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = readFile('expected-plain.txt').trim()

  const data1 = getParsedData(file1)
  const data2 = getParsedData(file2)

  const diffTree = buildDiffTree(data1, data2)
  const result = formatPlain(diffTree)

  expect(result).toBe(expected)
})

test('gendiff nested yaml "plain format"', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  const expected = readFile('expected-plain.txt').trim()

  const data1 = getParsedData(file1)
  const data2 = getParsedData(file2)

  const diffTree = buildDiffTree(data1, data2)
  const result = formatPlain(diffTree)

  expect(result).toBe(expected)
})

test('gendiff nested json "json format"', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = JSON.parse(readFile('expected-json.txt'))

  const data1 = getParsedData(file1)
  const data2 = getParsedData(file2)

  const diffTree = buildDiffTree(data1, data2)
  const result = JSON.parse(formatJson(diffTree))

  expect(result).toEqual(expected)
})

test('gendiff nested yaml "json format"', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  const expected = JSON.parse(readFile('expected-json.txt'))

  const data1 = getParsedData(file1)
  const data2 = getParsedData(file2)

  const diffTree = buildDiffTree(data1, data2)
  const result = JSON.parse(formatJson(diffTree))

  expect(result).toEqual(expected)
})

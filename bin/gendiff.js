#!/usr/bin/env node

import { Command } from 'commander'
import path from 'path'
import getParsedData from '../src/parsers.js'
import genDiff from '../src/genDiff.js'
import getFormatter from '../src/formatters/index.js'

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<file1> <file2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((file1, file2, options) => {
    const filepath1 = path.resolve(process.cwd(), '__fixtures__', file1)
    const filepath2 = path.resolve(process.cwd(), '__fixtures__', file2)

    const data1 = getParsedData(filepath1)
    const data2 = getParsedData(filepath2)

    const diffTree = genDiff(data1, data2)

    const formatter = getFormatter(options.format)
    const output = formatter(diffTree)

    console.log(output)
  })

program.parse(process.argv)

export default program

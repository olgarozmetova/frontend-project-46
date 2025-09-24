#!/usr/bin/env node

import { program } from 'commander'
import getParsedData from '../src/parser.js'
import genDiff from '../src/genDiff.js'

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<file1> <file2>')
  .option('-f, --format [type]', 'output format')
  .action((file1, file2) => {
    const data1 = getParsedData(file1)
    const data2 = getParsedData(file2)
    const diff = genDiff(data1, data2)
    console.log(diff)
  })

program.parse()

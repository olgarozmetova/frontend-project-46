#!/usr/bin/env node

import { program } from 'commander'
import getParsedData from '../src/parser.js'
import genDiff from '../src/genDiff.js'

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const data1 = getParsedData(filepath1)
    const data2 = getParsedData(filepath2)
    const diff = genDiff(data1, data2)
    console.log(diff)
  })

program.parse()

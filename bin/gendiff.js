#!/usr/bin/env node

import { program } from 'commander'
import getParsedData from '../src/parser.js'

const genDiff = () => {
  program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
      const data1 = getParsedData(filepath1)
      const data2 = getParsedData(filepath2)
      console.log('File 1:', data1)
      console.log('File 2:', data2)
    })

  program.parse()
}

genDiff()

export default genDiff

#!/usr/bin/env node

import { Command } from 'commander'
import gendiff from '../src/index.js'

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<file1> <file2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((file1, file2, options) => {
    const output = gendiff(file1, file2, options.format)
    console.log(output)
  })

program.parse(process.argv)

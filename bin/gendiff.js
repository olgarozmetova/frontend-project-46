#!/usr/bin/env node

import { program } from 'commander'

const genDiff = () => {
  program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')

  program.parse(process.argv)
}

genDiff()

export default genDiff

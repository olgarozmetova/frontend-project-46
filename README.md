# Diff Generator

[![CI](https://github.com/olgarozmetova/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/olgarozmetova/frontend-project-46/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=olgarozmetova_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=olgarozmetova_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=olgarozmetova_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=olgarozmetova_frontend-project-46)

### Hexlet tests and linter status:

[![Actions Status](https://github.com/olgarozmetova/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/olgarozmetova/frontend-project-46/actions)

## Description

A diff generator is a console application that looks for the difference between two data structures. The utility supports various input formats: YAML, JSON; parses and processes data from them, and outputs the results in plain text, stylish, and JSON formats.

## Setup

```bash
make install

```

## Display help information

```bash
gendiff -h

```

## Run tests

```bash
make test
```

## Run tests with coverage

See [sonar-project.properties](https://github.com/olgarozmetova/frontend-project-46/blob/main/sonar-project.properties):

```bash
make test-coverage
# see ./coverage
```

## Preview

### Asciinema genDiff json files:

[![asciicast](https://asciinema.org/a/4R4o9jSf7DTgPkGpvDHNbPEcG.svg)](https://asciinema.org/a/4R4o9jSf7DTgPkGpvDHNbPEcG)

### Asciinema genDiff yaml files:

[![asciicast](https://asciinema.org/a/N7aTtRwp5460mSDXxFrawNQo5.svg)](https://asciinema.org/a/N7aTtRwp5460mSDXxFrawNQo5)

### Asciinema genDiff json and yaml files:

[![asciicast](https://asciinema.org/a/RMbYtyZUL1hS71LStu2j6YXGj.svg)](https://asciinema.org/a/RMbYtyZUL1hS71LStu2j6YXGj)

### Asciinema genDiff nested json and yaml files 'stylish format':

[![asciicast](https://asciinema.org/a/J4QXXAbvEIiicUxqy2dPIkxZm.svg)](https://asciinema.org/a/J4QXXAbvEIiicUxqy2dPIkxZm)

### Asciinema genDiff nested json and yaml files 'plain format':

[![asciicast](https://asciinema.org/a/DWPVjdmZLxgexyvHGyanNf6of.svg)](https://asciinema.org/a/DWPVjdmZLxgexyvHGyanNf6of)

### Asciinema genDiff nested json and yaml files 'json format':

[![asciicast](https://asciinema.org/a/pAnGqYW4Qy1pyOsB9zX3T0RzT.svg)](https://asciinema.org/a/pAnGqYW4Qy1pyOsB9zX3T0RzT)

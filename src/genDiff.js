import _ from 'lodash'

const genDiff = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)))

  const lines = keys.flatMap((key) => {
    if (!Object.hasOwn(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`
    }
    if (!Object.hasOwn(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`
    }
    if (obj1[key] === obj2[key]) {
      return `    ${key}: ${obj1[key]}`
    }
    return [`  - ${key}: ${obj1[key]}`, `  + ${key}: ${obj2[key]}`]
  })

  return `{\n${lines.join('\n')}\n}`
}

export default genDiff

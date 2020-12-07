---
id: average
title: Average
---

import Snippet from '../snippet'

<Snippet
  lang="javascript"
  options={{
    es6: {
      default: true,
      label: 'ES6'
    },
    argsAsArr: {
      default: true,
      label: 'Arguments as an array'
    }
  }}
  snippet={({ es6, argsAsArr }) => {
    return `${
      es6
        ? `const average = (${argsAsArr ? '' : '...'}arr) `
        : `function average(${argsAsArr ? 'arr' : ''}) `
    }${es6 ? '=>' : '{\n  return (\n   '} ${
      !es6 && !argsAsArr ? 'Array.prototype.reduce.call(arguments, ' : 'arr.reduce'
    }${es6 ? '(' : 'function '}(a, c) ${
      es6 ? '=>' : '{\n      return'
    } a + c${es6 ? '' : '\n    }'}, 0) / ${
      !es6 && !argsAsArr ? 'arguments' : 'arr'
    }.length${es6 ? '' : '\n  )\n}'}\n\n\n// Usage:\naverage(${
      argsAsArr ? '[' : ''
    }1, 2, 3${argsAsArr ? ']' : ''}) // 2\naverage(${
      argsAsArr ? '[' : ''
    }2${argsAsArr ? ']' : ''}) // 2\naverage(${
      argsAsArr ? '[' : ''
    }${argsAsArr ? ']' : ''}) // NaN`
  }}
/>

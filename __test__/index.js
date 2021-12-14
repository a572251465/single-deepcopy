const deepcopy = require('../dist/index')

const document = {}
const window = {}

const obj = {
  married: true,
  age: 10,
  name: 'zhufeng',
  girlfriend: null,
  boyfriend: undefined,
  flag: Symbol('man'),
  home: { name: '北京' },
  set: new Set(),
  map: new Map(),
  getName() {},
  hobbies: ['抽烟', '喝酒', '烫头'],
  error: new Error('error'),
  pattern: /^regexp$/gi,
  math: Math,
  json: JSON,
  document,
  window
}
obj.set.add(1)
obj.map.set('name', 'value')
obj.obj = obj
console.log(obj === obj)

const b = deepcopy(obj)
console.log(b)

const symbol = Symbol('aaa')
console.log(Object(Symbol.prototype.valueOf.call(symbol)))

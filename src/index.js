const { getTypes } = require('where-type')
// 这些对象值得深度克隆
const OBJECT_TYPES = [
  {},
  [],
  new Map(),
  new Set(),
  new Error(),
  new Date(),
  /^$/
].map((item) => getTypes(item))
const CONSTRUCT_TYPE = [new Error(), new Date()].map((item) => getTypes(item))
const SYMBOL_TYPE = getTypes(Symbol('1'))
const REGEXP_TYPE = getTypes(/^$/)
const MAP_TYPE = getTypes(new Map())
const SET_TYPE = getTypes(new Set())

/**
 * @author lihh
 * @description 进行深度克隆
 * @param target 克隆源
 */
function deepCopy(target, weakMap = new WeakMap()) {
  // 除了上述的类型 都是按基本数据类型计算
  const type = getTypes(target)
  if (!OBJECT_TYPES.includes(type)) return target

  // 避免嵌套迭代，使用缓存
  if (weakMap.has(target)) return weakMap.get(target)

  // 针对error，date做处理
  if (CONSTRUCT_TYPE.includes(type)) return new target.constructor(target)
  const copyTarget = new target.constructor()
  weakMap.set(target, copyTarget)

  // 针对symbol做处理
  if (SYMBOL_TYPE === type) return Object(Symbol.prototype.valueOf.call(target))

  // 针对正则表达式
  if (REGEXP_TYPE === type) {
    const flags = /\w*$/
    const result = new target.constructor(target.source, flags.exec(target))
    result.lastIndex = target.lastIndex
    return result
  }

  // 针对set处理
  if (SET_TYPE === type) {
    target.forEach((value) => {
      copyTarget.add(deepCopy(value, weakMap))
    })
    return copyTarget
  }

  // 针对map处理
  if (MAP_TYPE === type) {
    target.forEach((value, key) => {
      copyTarget.set(key, deepCopy(value, weakMap))
    })
    return copyTarget
  }
  for (const item in target) {
    // 判断是否是自身属性 因为in会迭代原型链
    if (target.hasOwnProperty(item)) {
      copyTarget[item] = deepCopy(target[item], weakMap)
    }
  }
  return copyTarget
}

module.exports = deepCopy

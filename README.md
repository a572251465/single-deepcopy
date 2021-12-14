## single-deepcoy
> a plugin for deep copy

### install
> * npm install single-deepcopy
> * yarn add single-deepcopy

### import mode
#### mode1
> import deepcopy from 'single-deepcopy'
#### mode2
> const deepcopy = require('single-deepcopy')

### use
```javascript
const deepcopy = require('single-deepcopy')

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

const b = deepcopy(obj)
console.log(b)
```

## Personal introduction
![个人logo](http://lihh-core.top/images/personal-logo.jpeg)
* [个人博客/Personal blog](http://lihh-core.top/share)
* [个人作品展示集/ Personal works](http://lihh-core.top)

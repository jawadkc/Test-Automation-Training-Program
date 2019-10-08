# Introduction

> Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.

> Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets.

## Fundamental Key Ideas

- Load and go Deliver
- Loose Typing (no specific data type)
- Objects as general containers (Can add/update anything to object)
- Prototypal Inheritance (can inherit from other object without use of class)
- Lambda

## A Survery of Langauage

Mostly taken form `A Survey of the Language: Part One` of `Javascript: The Good Parts Master Class with Douglas Crockford`

https://player.oreilly.com/videos/9780596809621

### Values

- Numbers
- Strings
- Booleans
- Objects
- null
- undefined

### Number
* Only just one number type for interger/float/double
* A point to consider that `0.1 + 0.2 !== 0.3`
* Special number = Not a Number ([NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN))
  - result of undefined or erroneous operations
  - `NaN` is not equal to anything even itself i.e. `(NaN === NaN)` will be false

- `Number (value)` Converts to value
- `parseInt (value, 10)`. Stops at first non digit character
  - `parseInt("08se")  === 08`
- Methods
  - abs,floor,log,max,pow,random,round,sin,sqrt

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

### String
- Sequence of 0 or more 16-bit
- Strings are immutable
- String single/double quote
- Have properties like `String.length`
- Can convert to string using `String(value)``
- Operations available: charAt, concat, indexOf, lastIndexOf, match, replace, search, slice, split, substring, toLowerCase, toUpperCase

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

### null
- a value that has nothing in it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

### undefined

- A value that isn't even that
- the default value for variables and parameters
- the value of missing members in Objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

### Booleans
- true/false
- To convert to boolean you can use `Boolean()` or `!!`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

### falsy values
- false
- null
- undefined
- ""
- 0
- NaN

All other are truthy
- "0", "false"

### Object

Everything else in an Object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

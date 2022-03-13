# is.js

A collection of user-defined type guards to handle some of Javascript's less-than-ideal behavior.

## Installing

```bash
$ npm install is-js
$ yarn add is-js
```

## Usage

- [array](README.md#array)
- [bigint](README.md#bigint)
- [bool](README.md#bool)
- [date](README.md#date)
- [error](README.md#error)
- [func](README.md#func)
- [nil](README.md#nil)
- [number](README.md#number)
- [object](README.md#object)
- [promise](README.md#promise)
- [promiseLike](README.md#promiselike)
- [regex](README.md#regex)
- [string](README.md#string)
- [symbol](README.md#symbol)
- [undef](README.md#undef)

### array

▸ **array**(`arg`): arg is any[]

Determines if the argument is an array.

**`remarks`**
Defaults to the native `Array.isArray` method, if present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

`true` if the given argument is an array

___

### bigint

▸ **bigint**(`value`): `boolean`

Determines if the argument is a BigInt

**`remarks`**
This method does not support polyfilled BigInt implementations; please defer
to the library in use to determine the type of an unknown argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

`boolean`

`true` if the given argument is a native BigInt

___

### bool

▸ **bool**(`value`): value is boolean

Determines if the argument is a boolean

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is boolean

`true` if the given argument is a boolean

___

### date

▸ **date**(`value`): value is Date

Determines if the argument is a date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is Date

`true` if the given argument is a date

___

### error

▸ **error**(`value`): value is Error

Determines if the argument is an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is Error

`true` if the given argument is an error

___

### func

▸ **func**(`value`): value is Function

Determines if the argument is a function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is Function

`true` if the given argument is a function

___

### nil

▸ **nil**(`value`): value is null

Determines if the argument is null

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is null

`true` if the given argument is null

___

### number

▸ **number**(`value`): value is number

Determines if the argument is a number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is number

`true` if the given argument is a number

___

### object

▸ **object**(`value`): value is Object

Determines if the argument is an object.

**`remarks`**
Nearly everything in Javascript is an object; this method discerns between
native primitives (e.g. `true`, `3`, `some text`) and their object-wrapped
variants (Boolean, Number, String)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is Object

`true` if the given argument is an object

___

### promise

▸ **promise**(`value`): value is Promise<unknown\>

Determines if the argument is a native promise.

**`remarks`**
Some libraries and frameworks still include their own polyfilled Promises,
in which case this method is unreliable. If you are using such a library,
please defer to the provided Promise implementation or use [promiseLike](README.md#promiselike)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is Promise<unknown\>

`true` if the given argument is a string

___

### promiseLike

▸ **promiseLike**(`value`): value is Object

Determines if the argument conforms to the minimal interface of a Promise;
that is, it has a method named `then`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is Object

`true` if the given argument conforms to the Promise interface

___

### regex

▸ **regex**(`value`): value is RegExp

Determines if the argument is a regular expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is RegExp

`true` if the given argument is a regular expression

___

### string

▸ **string**(`value`): value is string

Determines if the argument is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is string

`true` if the given argument is a string

___

### symbol

▸ **symbol**(`value`): value is Symbol

Determines if the argument is a symbol

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is Symbol

`true` if the given argument is a symbol

___

### undef

▸ **undef**(`value`): value is undefined

Determines if the argument is undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value in question |

#### Returns

value is undefined

`true` if the given argument is `undefined`

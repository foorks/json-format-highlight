# @crashmax/json-format-highlight

[![NPM version](https://img.shields.io/npm/v/@crashmax/json-format-highlight.svg?style=flat)](https://npmjs.com/package/@crashmax/json-format-highlight)
[![NPM downloads](https://img.shields.io/npm/dm/@crashmax/json-format-highlight.svg?style=flat)](https://npmjs.com/package/@crashmax/json-format-highlight)
[![GitHub Workflow](https://img.shields.io/github/workflow/status/foorks/json-format-highlight/github-pages)](https://github.com/foorks/@crashmax/json-format-highlight/actions)

> ✨ Format json and highlight it as well.

## Demo

You can play with `@crashmax/json-format-highlight` on [foorks.github.io/json-format-highlight](https://foorks.github.io/json-format-highlight/) or [codesandbox.io](https://codesandbox.io/s/crashmax-json-format-highlight-dr6ti)

[![Edit @crashmax/json-format-highlight](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/crashmax-json-format-highlight-dr6ti)

## Features

 - 🔥 Zero [dependencies](https://www.npmjs.com/package/@crashmax/json-format-highlight?activeTab=dependents)
 - 📦 Lightweight ([806B gzipped](https://bundlephobia.com/package/@crashmax/json-format-highlight))
 - ⚙️ Styling is self-contained, no need to setup CSS

Note:

 - May not be suitable for handling huge (such as 10MB) JSON.

## Installation

```sh
# with npm:
npm install @crashmax/json-format-highlight

# or yarn:
yarn add @crashmax/json-format-highlight
```

### CDN:
 - [UNPKG](https://unpkg.com/@crashmax/json-format-highlight@latest/dist/)
 - [jsDelivr](https://cdn.jsdelivr.net/npm/@crashmax/json-format-highlight@latest/dist/)

## Usage

```js
import formatHighlight from '@crashmax/json-format-highlight'

const json = {
  ok: true,
  status: 200,
  message: 'hello world'
}

formatHighlight(json, /** options */)
```

## Options

|Key|Type|Default|Description|
|---|---|---|---|
|keyColor       |string|```#9cdcfe```|Key color|
|numberColor    |string|```#569cd6```|Color of the value of the number type|
|stringColor    |string|```#ce9178```|Color of the value of the string type|
|trueColor      |string|```#569cd6```|Color of the value of the boolean type and equals to true|
|falseColor     |string|```#569cd6```|Color of the value of the string type and equals to false|
|nullColor      |string|```#569cd6```|Color of the value of the null type|
|bracketsColor  |string|```#d4d4d4```|Color of the brackets symbol|
|backgroundColor|string|```#1e1e1e```|Color of the background|

> If you don't pass in anything this argument, default colors would be used. If you do pass in an object for this argument,
the colors you specified would override the default color scheme.

## License

MIT &copy; [luyilin](https://github.com/luyilin)

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)

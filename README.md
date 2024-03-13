# expand-css-hex-color &middot; [![Test workflow status](https://github.com/ChrisCodesThings/expand-css-hex-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/expand-css-hex-color)](https://www.npmjs.com/package/@chriscodesthings/expand-css-hex-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Expands a CSS hex color to it's full length**

## Install

```sh
npm install --save @chriscodesthings/expand-css-hex-color
```

## Use

```js
import expandCSSColor from '@chriscodesthings/expand-css-hex-color';

console.log(expandCSSColor("#cafe"));
// => #ccaaffee
```

## Syntax

```js
expandCSSColor(color);
```

### Parameters

- *color*: a CSS hex color string

### Return Value

Returns the long form of the CSS color code.

## Description

Expands a CSS hex color code. If the string passed is already a long form color code, the color is returned unmodified. If a short form color code is passed, the long form of the color is returned.

The alpha value FF is appended if no alpha is present.

Example hex color codes:
```
#000      // black short form
#000000   // black long form
#663399   // rebeccapurple
#66449988 // ... with 53% transparency
#6498     // ... in short form
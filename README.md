# expand-css-hex-color &middot; [![Test workflow status](https://github.com/ChrisCodesThings/expand-css-hex-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/expand-css-hex-color)](https://www.npmjs.com/package/@chriscodesthings/expand-css-hex-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Expands a CSS hex color to it's longest form**

## Description

Expands a CSS hex colour code. If the string passed is already a long form colour code then it is unmodified. If a short form colour code is passed, the longest form of the colour is returned.

Alpha ff will be added if no alpha is present in the colour code. 

Example hex color codes:
```
#000      // black short form
#000000   // black long form
#663399   // rebeccapurple
#66339988 // ... with 53% transparency
#6498     // ... in short form
#FF0000FF // solid red with alpha
```

### See...
- [Install/Usage](#install "Install and Usage")
- [Types](#types "Types")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/expand-css-hex-color
```

## Use

```js
import expandCSSHexColor from '@chriscodesthings/expand-css-hex-color';

console.log(expandCSSHexColor("#cafe"));
// => #ccaaffee
```

## Types

This package uses types from:
- [**basic-color-types**: Defines named types for common color formats](https://github.com/ChrisCodesThings/basic-color-types "Defines named types for common color formats")

## Syntax

```js
expandCSSHexColor(color);
```

### Parameters

- *color*: a CSS hex color string

### Return Value

Returns the longest form of the CSS color code.

## Examples

```js
// convert from CSS to RGB
function cssToRGB(col) {

    // ensure correct input length
    col = expandCSSHexColor(col);

    // col will now definitely be formatted as #aabbccdd
    // convert to RGB
}
```

## See Also...

- [**compress-css-hex-color**: Convert a CSS hex color code to short form](https://github.com/ChrisCodesThings/compress-css-hex-color "Convert a CSS hex color code to short form")
- [**css-hex-color-to-rgba**: Converts a CSS hex color code to RGBA values](https://github.com/ChrisCodesThings/css-hex-color-to-rgba "Converts a CSS hex color code to RGBA values")
- [**is-css-hex-color**: Determine if a string is a CSS hex color code](https://github.com/ChrisCodesThings/is-css-hex-color "Determine if a string is a CSS hex color code")
- [**color-object**: Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")

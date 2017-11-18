# jeselvmo.js

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Downloads][downloads-image]][npm-url]

A library of string validators and sanitizers.

## Strings only

**This library validates and sanitizes strings only.**

If you're not sure if your input is a string, coerce it using `input + ''`.
Passing anything other than a string is an error.

## Installation and Usage

### Server-side usage

Install the library with `npm install jeselvmo`

#### No ES6

```javascript
var jeselvmo = require('jeselvmo');

jeselvmo.validator.isEmail('foo@bar.com'); //=> true
```

#### ES6

```javascript
import Jeselvmo from 'jeselvmo';
```

Or, import only a subset of the library:

```javascript
import validator from 'jeselvmo/lib/validator';
```

### Client-side usage

The library can be loaded either as a standalone script, or through an [AMD][amd]-compatible loader

```html
<script type="text/javascript" src="jeselvmo.min.js"></script>
<script type="text/javascript">
  jeselvmo.validator.isEmail('foo@bar.com'); //=> true
</script>
```

The library can also be installed through [bower][bower]

```bash
$ bower install jeselvmo
```

[downloads-image]: http://img.shields.io/npm/dm/jeselvmo.svg

[npm-url]: https://npmjs.org/package/jeselvmo
[npm-image]: http://img.shields.io/npm/v/jeselvmo.svg

[travis-url]: https://travis-ci.org/jeselvmo/jeselvmo.js
[travis-image]: http://img.shields.io/travis/chriso/jeselvmo.js.svg

[amd]: http://requirejs.org/docs/whyamd.html
[bower]: http://bower.io/

[mongoid]: http://docs.mongodb.org/manual/reference/object-id/
[ISIN]: https://en.wikipedia.org/wiki/International_Securities_Identification_Number

# jeselvmo.js

一个前端常用的JavaScript库。A JavaScript library commonly used in the front end.

## Installation and Usage

### Server-side usage

Install the library with `npm install jeselvmo`

#### CommonJS

```javascript
var jeselvmo = require('jeselvmo');

jeselvmo.isEmail('foo@bar.com'); //=> true
```

#### ES6

```javascript
import jeselvmo from 'jeselvmo';
```

Or, import only a subset of the library:

```javascript
import isEmail from 'jeselvmo/lib/isEmail';
```

### Client-side usage

The library can be loaded either as a standalone script, or through an [AMD][amd]-compatible loader

```html
<script type="text/javascript" src="jeselvmo.min.js"></script>
<script type="text/javascript">
  jeselvmo.isEmail('foo@bar.com'); //=> true
</script>
```

## Tests

Tests are using mocha, to run the tests use:

```sh
$ npm test
```

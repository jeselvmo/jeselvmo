# jeselvemo.js

A library of string validators and tools.

## Installation and Usage

### Server-side usage

Install the library with `npm install jeselvemo`

#### No ES6

```javascript
var jeselvemo = require('jeselvemo');

jeselvemo.isEmail('foo@bar.com'); //=> true
```

#### ES6

```javascript
import jeselvemo from 'jeselvemo';
```

Or, import only a subset of the library:

```javascript
import isEmail from 'jeselvemo/lib/isEmail';
```

### Client-side usage

The library can be loaded either as a standalone script, or through an [AMD][amd]-compatible loader

```html
<script type="text/javascript" src="jeselvemo.min.js"></script>
<script type="text/javascript">
  jeselvemo.isEmail('foo@bar.com'); //=> true
</script>
```

## Tests

Tests are using mocha, to run the tests use:

```sh
$ npm test
```

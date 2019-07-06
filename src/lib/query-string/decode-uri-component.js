/* eslint-disable prefer-template */
let token = '%[a-f0-9]{2}';
let singleMatcher = new RegExp(token, 'gi');
let multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
  try {
    // Try to decode the entire string first
    return decodeURIComponent(components.join(''));
  } catch (err) {
    // Do nothing
  }

  if (components.length === 1) {
    return components;
  }

  split = split || 1;

  // Split the array in 2 parts
  let left = components.slice(0, split);
  let right = components.slice(split);

  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    let tokens = input.match(singleMatcher);

    for (let i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join('');

      tokens = input.match(singleMatcher);
    }

    return input;
  }
}

function customDecodeURIComponent(input) {
  // Keep track of all the replacements and prefill the map with the `BOM`
  let replaceMap = {
    '%FE%FF': '\uFFFD\uFFFD',
    '%FF%FE': '\uFFFD\uFFFD'
  };

  let match = multiMatcher.exec(input);
  while (match) {
    try {
      // Decode as big chunks as possible
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      let result = decode(match[0]);

      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }

    match = multiMatcher.exec(input);
  }

  // Add `%C2` at the end of the map to make sure it does not replace
  // the combinator before everything else
  replaceMap['%C2'] = '\uFFFD';

  let entries = Object.keys(replaceMap);

  for (let i = 0; i < entries.length; i++) {
    // Replace all decoded components
    let key = entries[i];
    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
  }

  return input;
}

export default function (encodedURI) {
  if (typeof encodedURI !== 'string') {
    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
  }

  try {
    encodedURI = encodedURI.replace(/\+/g, ' ');

    // Try the built in decoder first
    return decodeURIComponent(encodedURI);
  } catch (err) {
    // Fallback to a more advanced decoder
    return customDecodeURIComponent(encodedURI);
  }
}
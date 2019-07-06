function arrayToHash(array) {
  let hash = {};

  array.forEach(val => {
    hash[val] = true;
  });

  return hash;
}

export default arrayToHash;

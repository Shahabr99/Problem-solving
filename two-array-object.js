function twoArrayObject(keys, vals) {
  return keys.reduce((obj, val, idx) => {
    obj[val] = idx < vals.length ? vals[idx] : null;
    
    return obj;
  }, {})
}

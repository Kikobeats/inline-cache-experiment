function inline () {
  function divideByNumber (lhs, rhs) {
    return lhs / rhs
  }
  function divideBy2 (lhs) {
    return lhs >> 1
  }
  function divideBy4 (lhs) {
    return lhs >> 2
  }

  function divideSomeNumbers (lhsArray, divisor, resultArray) {
    resultArray = Array(lhsArray.length)

    // Inline cache
    if (divisor === 2) {
      divideSomeNumbersBy2(lhsArray, resultArray)
    } else if (divisor === 4) {
      divideSomeNumbersBy4(lhsArray, resultArray)
    } else {
      // Cache miss! A JIT would likely record the miss here, and consider
      //  updating the cache. It'd notice eventually if most trips through
      //  the cache are misses, or if the cache has too many entries.
      // In these cases the IC might be removed entirely for performance.
      divideSomeNumbersByUnknown(lhsArray, divisor, resultArray)
    }

    return resultArray
  }

  function divideSomeNumbersBy2 (lhsArray, resultArray) {
    for (var i = 0, l = lhsArray.length; i < l; i++) {
      resultArray[i] = divideBy2(lhsArray[i])
    }
  }

  function divideSomeNumbersBy4 (lhsArray, resultArray) {
    for (var i = 0, l = lhsArray.length; i < l; i++) {
      resultArray[i] = divideBy4(lhsArray[i])
    }
  }

  function divideSomeNumbersByUnknown (lhsArray, divisor, resultArray) {
    for (var i = 0, l = lhsArray.length; i < l; i++) {
      resultArray[i] = divideByNumber(lhsArray[i], divisor)
    }
  }

  return divideSomeNumbers
}

module.exports = inline

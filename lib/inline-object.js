function inlineObject () {
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
    var inline = {
      2: function divideSomeNumbersBy2 () {
        for (var i = 0, l = lhsArray.length; i < l; i++) {
          resultArray[i] = divideBy2(lhsArray[i])
        }
      },
      4: function divideSomeNumbersBy4 () {
        for (var i = 0, l = lhsArray.length; i < l; i++) {
          resultArray[i] = divideBy4(lhsArray[i])
        }
      },
      undefined: function divideSomeNumbersByUnknown () {
        for (var i = 0, l = lhsArray.length; i < l; i++) {
          resultArray[i] = divideByNumber(lhsArray[i], divisor)
        }
      }
    }

    inline[divisor]()
    return resultArray
  }
  return divideSomeNumbers
}

module.exports = inlineObject

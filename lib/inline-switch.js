function inlineSwitch () {
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
    switch (divisor) {
      case 2:
        divideSomeNumbersBy2(lhsArray, resultArray)
        break
      case 4:
        divideSomeNumbersBy4(lhsArray, resultArray)
        break
      default:
        divideSomeNumbersByUnknown(lhsArray, divisor, resultArray)
        break
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

module.exports = inlineSwitch

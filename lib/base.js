function base () {
  function divide (lhs, rhs) {
    return lhs / rhs
  }

  function divideSomeNumbers (lhsArray, divisor) {
    var resultArray = Array(lhsArray.length)
    for (var i = 0, l = lhsArray.length; i < l; i++) {
      resultArray[i] = divide(lhsArray[i], divisor)
    }
    return resultArray
  }

  return divideSomeNumbers
}

module.exports = base

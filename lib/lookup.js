function lookup () {
  var dividers = {
    2: function divideBy2 (lhs) {
      return lhs >> 1
    },
    4: function divideBy4 (lhs) {
      return lhs >> 2
    },
    undefined: function divideByNumber (lhs, rhs) {
      return lhs / rhs
    }
  }

  function divideSomeNumbers (lhsArray, divisor) {
    var resultArray = Array(lhsArray.length)
    var divider = dividers[divisor]

    for (var i = 0, l = lhsArray.length; i < l; i++) {
      resultArray[i] = divider(lhsArray[i], divisor)
    }

    return resultArray
  }

  return divideSomeNumbers
}

module.exports = lookup

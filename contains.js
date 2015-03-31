/* ___________________________________________________________________________

  File: contains.js   Version: v0.1
  Repository: http://github.com/GuillermoPena/contains
  Author: Guillermo Peña (guillermo.pena.cardano@gmail.com)
  Last update: 31/03/2015

  Search different info in container in order to mode value

  Type of containers:
    Number
    String
    Array
    TODO: Object

  Type of 'items':
    Object: with 'key' and 'value' to find in array of objects or in object
    String: contained in array, key of object, substring of string...
    Number: contained in array, substring of string, digit of number...

  Mode values (default: 'index'):
    'exists': return true or false if item exists in container
    'index' : return index of item in container (default: -1)
    'object': return full item
    TODO:'subarray': return subarray with items in container
    TODO: 'repetitions': return how many times is item in container

__________________________________________________________________________*/

// Search item in array.
var searchInArray = function(array, item) {
  var found = { "index": -1
              , "exists": false
              , "object": null
              }
  var i = 0
  while (found.index == -1 && found.object == null && i < array.length) {
    if (item.key != undefined && item.value != undefined) {
      var itemObj = array[i]
      if (itemObj[item.key] === item.value) {
        found.index = i
        found.exists = true
        found.object = array[i]
      }
    }

    // Order in object properties are inportant!
    if ( found.object == null
      && JSON.stringify(array[i]) === JSON.stringify(item)) {
      found.index = i
      found.exists = true
      found.object = array[i]
    }
    i++
  }
  return found
}

// Search substring or char in string.
var searchInString = function(string, item) {

  var index  = string.indexOf(item)
  var exists = (index != -1)
  var object = (exists) ? item : null
  var found = { "index":  index
              , "exists": exists
              , "object": object
              }
  return found
}

// Search digit or subnumber in number.
var searchInNumber = function(number, item) {
  var strnumber = number.toString()
  return searchInString(strnumber, item)
}


module.exports = function contains (container, item, mode) {

  mode = (mode || 'index')
  if (mode != 'subarray' && mode != 'repetitions') {
    var found = null
    if (typeof container == "number")      found = searchInNumber(container, item)
    else if ( typeof container == "string"
           || container instanceof String) found = searchInString(container, item)
    else if (Array.isArray(container))     found = searchInArray(container, item)

    // TODO: Search into object's properties
    //else if (container instanceof Object)  found = searchInObject(container, item)

    if (mode == 'exists') return found.exists
    if (mode == 'object') return found.object
    if (mode == 'index')  return found.index
  }

  // TODO: obtain subarrays and repetitions
  //if (mode == 'subarray')    return getArray(container, item)
  //if (mode == 'repetitions') return getRepts(container, item)
  return null
}

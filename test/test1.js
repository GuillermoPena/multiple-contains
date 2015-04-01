var contains = require('../multiple-contains.js')
var util     = require('util')

var array1 = [ 'papa', 'pepe', 'pipi' ]
var array2 = [ { "sex":"H", "name":"paco" }
             , { "sex":"M", "name":"pepa" }
             , { "sex":"H", "name":"pepe" }
             ]


// --- Test 1 ------------------------------------------------------------------

console.log("\nTest 1: Searching item ('pepe') in array")
console.dir(array1)

var toFind = 'pepe'
console.log("Exists? " + contains(array1, toFind, 'exists'))
console.log("Index: "  + contains(array1, toFind))
console.log("Filter: " + util.inspect(contains(array1, toFind, 'filter')))
console.log("Repetitions: " + contains(array1, toFind, 'repetitions'))

console.log("\nTest 1b: Searching item ('xxx') in array")
toFind = 'xxx'
console.log("Exists? " + contains(array1, toFind, 'exists'))
console.log("Index: "  + contains(array1, toFind))
console.log("Filter: " + util.inspect(contains(array1, toFind, 'filter')))
console.log("Repetitions: " + contains(array1, toFind, 'repetitions'))

// --- Test 2 ------------------------------------------------------------------

console.log("\n\nTest 2: Searching object ({'sex':'M','name':'pepa'}) in array of objects")
console.dir(array2)
toFind = { "sex":"M", "name":"pepa" }
console.log("Exists? " + contains(array2, toFind, 'exists'))
console.log("Index: "  + contains(array2, toFind))
console.log("Filter: " + util.inspect(contains(array2, toFind, 'filter')))
console.log("Repetitions: " + contains(array2, toFind, 'repetitions'))

console.log("\nTest 2b: Searching object ({'sex':'M','name':'xxx'}) in array of objects")
toFind = { "sex":"M", "name":"xxx" }
console.log("Exists? " + contains(array2, toFind, 'exists'))
console.log("Index: "  + contains(array2, toFind))
console.log("Filter: " + util.inspect(contains(array2, toFind, 'filter')))
console.log("Repetitions: " + contains(array2, toFind, 'repetitions'))

// --- Test 3 ------------------------------------------------------------------

console.log("\n\nTest 3: Searching {key, value} ({'key':'sex','name':'H'}) matches in array of objects")
console.dir(array2)
var pattern = { "key":"sex", "value":"H" }
console.log("Exists? " + contains(array2, pattern, 'exists'))
console.log("Index: "  + contains(array2, pattern))
console.log("Filter: " + util.inspect(contains(array2, pattern, 'filter')))
console.log("Repetitions: " + contains(array2, pattern, 'repetitions'))

console.log("\nTest 3b: Searching {key, value} ({'key':'sex','name':'X'}) matches in array of objects")
console.dir(array2)
var pattern = { "key":"sex", "value":"X" }
console.log("Exists? " + contains(array2, pattern, 'exists'))
console.log("Index: "  + contains(array2, pattern))
console.log("Filter: " + util.inspect(contains(array2, pattern, 'filter')))
console.log("Repetitions: " + contains(array2, pattern, 'repetitions'))

// --- Test 4 ------------------------------------------------------------------

var word = "elefant"
var substring = 'ele'

console.log("\n\nTest 4: Searching substring")
console.dir("Word: " + word + " - Substring to find: " +  substring)
console.log("Exists? " + contains(word, substring, 'exists'))
console.log("Index: "  + contains(word, substring))
console.log("Filter: " + util.inspect(contains(word, substring, 'filter')))

substring = 'xxx'
console.log("\nTest 4b: Searching substring")
console.dir("Word: " + word + " - Substring to find: " +  substring)
console.log("Exists? " + contains(word, substring, 'exists'))
console.log("Index: "  + contains(word, substring))
console.log("Repetitions: " + contains(word, substring, 'filter'))

// --- Test 5 ------------------------------------------------------------------

var number = 1234
var subnumber = 23

console.log("\n\nTest 5: Searching digit or subnumber")
console.dir("Number: " + number + " - Digit or subnumber to find: " +  subnumber)
console.log("Exists? " + contains(number, subnumber, 'exists'))
console.log("Index: "  + contains(number, subnumber))
console.log("Repetitions: " + contains(number, subnumber, 'repetitions'))

console.log("\nTest 5b: Searching digit or subnumber")
subnumber = 00
console.dir("Number: " + number + " - Digit or subnumber to find: " +  subnumber)
console.log("Exists? " + contains(number, subnumber, 'exists'))
console.log("Index: "  + contains(number, subnumber))
console.log("Repetitions: " + contains(number, subnumber, 'repetitions'))

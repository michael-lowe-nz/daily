/**
 * ES2015 Syntax Exploration
 */

// First let's look at how the var keyword behaves

/** It looks like it can change **/
var myWhale = "Harry the Whale"
myWhale = "Rupert the Humpback"
console.log(myWhale) // "Rupert the Humpback"

var myNumber = 245
myNumber ++
console.log(myNumber) // 246

/** But if we do this **/
var myFavColour = "Periwinkle!"
var rupertsFavColour = myFavColour
myFavColour = "Mauve"
console.log(rupertsFavColour) // "Periwinkle"

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
console.log(rupertsFavColour) // "Periwinkle!"

/** We might have expected rupertsFavColour to now be Mauve aswell,
 * but it is not, because primitive values (String and Number),
 * are Immutable. They can not be changed, rather a new value is
 * created in memory and they now point to that. That is why rupertsFavColour
 * still points to the original "Periwinkle"
 **/

/** Let's try this with the es2015 keyword 'const' **/
const myBestSkill = "Riding Bike while Juggling"
myBestskill = "Eating and Sleeping"
console.log(myBestskill) // "Eating and Sleeping"

/** We might have expected myBestskill to still refer to the same string
 * though this is not the case. It has been reassigned, as the const keyword
 * does not work like this.
 */

 /** 'const' will stop you from redeclaring a variable though **/
var dinnerTime = "6:30 PM"
var dinnerTime = "8:30 PM" // *No Error*
console.log(dinnerTime) // "8:30 PM"

const showerTime = "9:40 PM"
var showerTime = "6:20 AM" // SyntaxError: Identifier 'showerTime' has already been declared

/** Currying **/

// A Function that returns a function until something is complete

/** Let's Add some numbers by Currying **/

const curryAdd = (score) => {
  return (n) => {
    return score + n
  }
}


const catShowSum = curryAdd(1)(8)
console.log(catShowSum) // 9

/** ES2015-ify **/
const es6CurryAdd = score => n => score + n

const es6CatShowSum = es6CurryAdd(1)(15)
console.log(es6CatShowSum) // 16

const Right = x => (
  {
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
  }
)

const Left = x => (
  {
    map: (f) => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`
  }
)

const Either = Right || Left

const result = Right(2)
  .map(x => x + 10)
  .map(x => x / 2)
  .fold(x => `${x} bottles`, e => 'error')

console.log('Result: ', result)

const result2 = Left(2)
  .map(x => x + 10)
  .map(x => x / 2)
  .fold(x => `${x} bottles`, e => 'error')
  
console.log('Result: ', result2)
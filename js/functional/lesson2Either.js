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

const findColor = color => {
  const colors = {
    red: '#ff9122',
    blue: '#5e5e5e',
    orange: '#ff9100'
  }
  const found = colors[color]
  return found ? Right(found) : Left(found)
}

const result3 = findColor('blahblah')
  .map(str => str.slice(1))
  .fold(
    e => 'No Color!',
    color => color.toUpperCase()
  )

console.log('Color:', result3)

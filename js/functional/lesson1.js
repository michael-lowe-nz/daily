const Box = x => {
  return {
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  }
}

const nextChar = char => {
  return Box(char)
    .map(s => s.trim())
    .map(r => parseInt(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase())
}

console.log('Next char:', nextChar('321  '))
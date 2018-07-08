const Left = x => (
    {
        map: (f) => Left(f(x)),
        fold: (f) => f(x),
        inspect: () => `Left(${x})`
    }
)

const Either = Left || Right

console.log(Left('hey').inspect())
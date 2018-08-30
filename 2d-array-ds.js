// Some little utils
const sumArr = arr => arr.reduce((a, b) => a + b, 0)
const lteLengthMinus = minus => (n, arr) => n <= arr.length - minus
const pipe = (...fns) => init => fns.reduce((acc, f) => f(acc), init)
const reduceIt = (f, init) => iterable => {
	let accumulator = init
	for (const x of iterable) accumulator = f(accumulator, x)
	return accumulator
}

// A big one util
const makeTraverser2D = (rowPredicate, colPredicate, yielder) =>
	function* traverser2DGen(arr) {
		let row = 0
		let col = 0

		while (rowPredicate(row, arr)) {
			while (colPredicate(col, arr)) yield yielder([row, col], arr), col++

			//Let's restart from another row
			col = 0
			row++
		}
	}

// Return an array with the value at the [row, col] and the next n items in the current row
const nextCols = n => ([row, col]) => arr =>
	Array.from({ length: n + 1 }, (_, i) => arr[row][col + i])

// Recursive hourglass position getter maker (starting at top left), the base must be odd, with 3:
// x x x <-- base
//   x
// x x x <-- oppposite base
const makeHourglassGetter = base => ([row, col], arr) =>
	base === 1
		? [arr[row][col]]
		: [
				...nextCols(base - 1)([row, col])(arr),
				...makeHourglassGetter(base - 2)([row + 1, col + 1], arr),
				// Here we calculate the oppposite base
				...nextCols(base - 1)([row + base - 1, col])(arr)
		  ]

const isInBoundaries = lteLengthMinus(3) // We don't want to go too far in the columns or rows !

const hourglassSum = pipe(
	makeTraverser2D(isInBoundaries, isInBoundaries, makeHourglassGetter(3)),
	reduceIt(
		(acc, hourglass) =>
			acc !== undefined ? Math.max(acc, sumArr(hourglass)) : sumArr(hourglass)
	)
)

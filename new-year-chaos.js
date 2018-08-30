const reduceBreakable = (f, breakPredicate, init) => arr => {
	let accumulator = init
	let i = 0
	for (const x of arr) {
		const shouldBreak = breakPredicate(accumulator, x, i)
		if (shouldBreak) {
			accumulator = shouldBreak
			break
		} else accumulator = f(accumulator, x, i)

		i++
	}
	return accumulator
}
// Return true if y is between -x and x
const inRange = x => y => y >= -x && y <= x
const minimumBribes = finalQueue => {
	const canBribe = inRange(2)
	const minBribes = reduceBreakable(
		(acc, x, i) => (canBribe(x - (i + 1)) ? acc + 1 : acc),
		(acc, x, i) => {
			const offset = x - (i + 1)
			// console.log({ x, offset, canBribe: canBribe(offset) })
			return !canBribe(offset) ? "Too chaotic" : false
		},
		0
	)(finalQueue)

	return minBribes
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))

const inRange = x => y => y >= -x && y <= x
var swapMutate = (fstIndex, sndIndex) => a =>
	a.length === 1
		? a
		: (a.splice(sndIndex, 1, a.splice(fstIndex, 1, a[sndIndex])[0]), a)

const minimumBribes = q => {
	const finalQueue = [...q]
	let bribes = 0,
		i = 0
	for (const personSticker of finalQueue) {
		const offset = i + 1 - personSticker // Diff between where the person should be and where she really is
		if (offset === 0) {
			i++
			continue
		} else if (offset === -1) {
			swapMutate(i, i + 1)(finalQueue)
			bribes++
		} else if (offset === -2) swapMutate(i)(finalQueue), bribes++, bribes++
		// console.log({ offset, finalQueue, personSticker, bribes })
		// // else if (offset === 1) finalQueue
		// // if (offset === 0) continue
		i++
	}
	return bribes
}

console.log(minimumBribes([1, 4, 4, 6]))

const count = xs =>
	xs.reduce(
		(acc, x) => (acc[x] !== undefined ? (acc[x] += 1) : (acc[x] = 1), acc),
		{}
	)

const checkMagazine = (mag, notes) => {
	const available = count(mag)
	for (const word of notes) if (!available[word]--) return console.log('No')
	return console.log('Yes')
}

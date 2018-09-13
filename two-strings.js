const byLength = (a, b) => (a.length > b.length ? [b, a] : [a, b])
const twoStrings = (a, b) => {
	const [shortest, longest] = byLength(a, b)
	for (const char of shortest) if (longest.includes(char)) return 'YES'
	return 'NO'
}

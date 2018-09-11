// Return the index of the element or false if not found
const has = (el, from = 0) => arr => {
	const i = arr.indexOf(el, from)
	return i !== -1 ? i : false
}

const last = a => a[a.length - 1]

const checkMagazine = (magazine, note) => {
	const marked = {}

	for (const word of note) {
		const i = has(word, marked[word] ? last(marked[word]) + 1 : 0)(magazine)

		if (i === false) return "No"
		else marked[word] ? marked[word].push(i) : (marked[word] = [i])
	}

	return "Yes"
}

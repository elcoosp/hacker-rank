// [1,2,3]
// d = 0 :: [1,2,3]
// d = 1 :: [2,3,1]
// d = 2 :: [3,1,2]
// d = 3 :: [1,2,3]
const leftRotation = (a, d) =>
	d == 0 || d == a.length ? a : a.slice(d).concat(a.slice(0, d))

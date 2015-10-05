function rand(size) { return Math.floor(Math.random()*size); }

function fit(val, min, max) {
	if (val <= min) return min;
	if (val >= max) return max;
	return val;
}

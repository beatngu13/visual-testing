var ALLOWED_PIXEL_DIFF = 25;

function contains(array, key) {
	for (var i = 0; i < array.length; i++) {
		if (key == array[i]) {
			return true;
		}
	}
	return false;
}

function shouldIgnoreAttributeDifference(element, diff) {
	if (diff.expected === null) {
		diff.expected = "";
	}
	if (diff.actual === null) {
		diff.actual = "";
	}
	if (ignorePixelDiff(element, diff)) {
		return true;
	}
	if (ignoreColorDiff(element, diff)) {
		return true;
	}
	return false;
}

function ignorePixelDiff(element, diff) {
	if (diff.key === "outline") {
		return (Math.abs(diff.expected.x - diff.actual.x) <= ALLOWED_PIXEL_DIFF)
				&& (Math.abs(diff.expected.y - diff.actual.y) <= ALLOWED_PIXEL_DIFF)
				&& (Math.abs(diff.expected.width - diff.actual.width) <= ALLOWED_PIXEL_DIFF)
				&& (Math.abs(diff.expected.height - diff.actual.height) <= ALLOWED_PIXEL_DIFF);
	}
	if (contains([ "absolute-x", "absolute-y", "absolute-width", "absolute-height",
				   "x", "y", "width", "height" ],
				   diff.key)) {
		return (Math.abs(diff.expected.replace("px", "")
				- diff.actual.replace("px", "")) <= ALLOWED_PIXEL_DIFF);
	}
}

function ignoreColorDiff(element, diff) {
	if (diff.key.indexOf("border-") !== -1) {
		return true;
	}
}

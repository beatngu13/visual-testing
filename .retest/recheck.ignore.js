var MAX_PIXEL_DIFF = 10

function shouldIgnoreAttributeDifference(element, diff) {
	if (diff.key == "outline") {
		var ignoreXDiff = Math.abs(diff.expected.x - diff.actual.x) <= MAX_PIXEL_DIFF;
		var ignoreYDiff = Math.abs(diff.expected.y - diff.actual.y) <= MAX_PIXEL_DIFF;
		var ignoreWidthDiff = Math.abs(diff.expected.width - diff.actual.width) <= MAX_PIXEL_DIFF;
		var ignoreHeightDiff = Math.abs(diff.expected.height - diff.actual.height) <= MAX_PIXEL_DIFF;
		return ignoreXDiff && ignoreYDiff && ignoreWidthDiff && ignoreHeightDiff;
	}
	return false;
}

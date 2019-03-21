var MAX_PIXEL_DIFF = 10

function shouldIgnoreAttributeDifference(element, diff) {
	var expected = diff.expected;
	if (expected == null) {
		expected = "";
	}

	var actual = diff.actual;
	if (actual == null) {
		actual = "";
	}

	if (expected.indexOf("px") !== -1) {
		expected = expected.replace("px", "");
		actual = actual.replace("px", "");
		return Math.abs(expected - actual) <= MAX_PIXEL_DIFF;
	}

	return false;
}

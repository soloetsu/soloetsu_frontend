const mergeStyles = (...source) => {
	const merged = {};
	source.forEach((style) => {
		if (style) {
			Object.keys(style).forEach((key) => {
				merged[key] = style[key];
			});
		}
	});
	return merged;
};

export default mergeStyles;

const dict = [...Array(26).keys()].map((key) => String.fromCharCode(97 + key));

function calculateWeights(sourceText: string) {
	const weights = new Set<number>();
	let i = 0;
	while (i < sourceText.length) {
		const char = sourceText[i];
		let weight = dict.indexOf(sourceText[i]) + 1;
		weights.add(weight);
		let count = 1;
		while (i + 1 < sourceText.length && sourceText[i + 1] === char) {
			count += 1;
			weight += dict.indexOf(sourceText[i]) + 1;
			weights.add(weight);
			i += 1;
		}
		i += 1;
	}
	return weights;
}

function weightString(stringText: string, queryArr: number[]) {
	const currentWeight = calculateWeights(stringText);
	const result: string[] = [];

	for (const query of queryArr) {
		if (currentWeight.has(query)) {
			result.push("Yes");
		} else {
			result.push("No");
		}
	}

	return result;
}

console.log(weightString("abbcccd", [1, 3, 9, 8])); // Output: ['Yes', 'Yes', 'Yes', 'No']
console.log(weightString("", [1, 2, 3])); // Output: ['No', 'No', 'No']
console.log(weightString("abc", [1, 2, 3, 4])); // Output: ['Yes', 'Yes', 'Yes', 'No']

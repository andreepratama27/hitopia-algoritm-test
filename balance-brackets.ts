function checkBalanceBracket(str: string) {
	const stringWithoutSpace = str.replace(/\s/g, "");
	const stack: string[] = [];
	const openBracket = {
		"{": "}",
		"(": ")",
		"[": "]",
	};
	const closeBracket = Object.values(openBracket);

	for (const char of stringWithoutSpace) {
		if (openBracket[char]) {
			stack.push(char);
		} else {
			const currentClose = stack.pop();
			if (
				closeBracket.includes(char) &&
				char !== openBracket[currentClose as string]
			) {
				return false;
			}
		}
	}

	return !stack.length;
}

console.log(checkBalanceBracket("(())")); // Output: True
console.log(checkBalanceBracket("(){}[]")); // Output: True
console.log(checkBalanceBracket("((())")); // Output: False
console.log(checkBalanceBracket("( ) [ ] { }")); // Output: True, include space

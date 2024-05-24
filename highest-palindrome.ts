function highestPalindrome(str: string, maxChanges: number): string | number {
	const length: number = str.length;
	const chars: string[] = str.split("");
	const changes: boolean[] = new Array(length).fill(false);

	function createPalindromeText(
		chars: string[],
		left: number,
		right: number,
		remainingChanges: number,
	): number {
		if (left >= right) return remainingChanges;

		if (chars[left] !== chars[right]) {
			if (remainingChanges <= 0) return -1;

			if (chars[left] > chars[right]) {
				chars[right] = chars[left];
			} else {
				chars[left] = chars[right];
			}
			changes[left] = changes[right] = true;
			remainingChanges--;
		}
		return createPalindromeText(chars, left + 1, right - 1, remainingChanges);
	}

	let remainingChanges = createPalindromeText(chars, 0, length - 1, maxChanges);
	if (remainingChanges < 0) return -1;

	for (let i = 0; i < Math.floor(length / 2) && remainingChanges > 0; i++) {
		if (chars[i] !== "9") {
			if (changes[i] || changes[length - 1 - i]) {
				chars[i] = chars[length - 1 - i] = "9";
				remainingChanges--;
			} else if (remainingChanges >= 2) {
				chars[i] = chars[length - 1 - i] = "9";
				remainingChanges -= 2;
			}
		}
	}

	if (length % 2 === 1 && remainingChanges > 0) {
		chars[Math.floor(length / 2)] = "9";
	}

	return chars.join("");
}

console.log(highestPalindrome("3943", 1)); // Output: 3993
console.log(highestPalindrome("932239", 2)); // Output: 992299
console.log(highestPalindrome("12321", 0)); // Output: 12321

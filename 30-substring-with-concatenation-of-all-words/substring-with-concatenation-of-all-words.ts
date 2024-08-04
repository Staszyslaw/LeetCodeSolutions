function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    const wordLength = words[0].length; // All words have the same length
    const concatenatedLength = wordLength * words.length;

    const wordCount: { [word: string]: number } = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    for (let i = 0; i <= s.length - concatenatedLength; i++) {
        if (isConcatenated(s.substring(i, i + concatenatedLength), wordCount, wordLength)) {
            result.push(i);
        }
    }
    return result;
}

function isConcatenated(substring: string, wordCount: { [word: string]: number }, wordLength: number): boolean {
    const seenWords: { [word: string]: number } = {};

    for (let j = 0; j < substring.length; j += wordLength) {
        const word = substring.substring(j, j + wordLength);

        if (!wordCount[word] || seenWords[word] === wordCount[word]) {
            return false;
        }

        seenWords[word] = (seenWords[word] || 0) + 1;
    }

    return true;
}
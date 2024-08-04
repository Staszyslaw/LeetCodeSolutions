function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
  
    const result: string[] = [];
    const digitToLetters: { [key: string]: string[] } = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
    };
  
    function backtrack(current: string, nextDigits: string) {
      if (nextDigits.length === 0) {
        result.push(current);
        return;
      }
  
      const digit = nextDigits[0];
      for (const letter of digitToLetters[digit]) {
        backtrack(current + letter, nextDigits.slice(1));
      }
    }
  
    backtrack("", digits);
    return result;
}
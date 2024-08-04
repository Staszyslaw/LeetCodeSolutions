function lengthOfLongestSubstring(s: string): number {
    const hashMap = new Map<string, number>();
    let max: string = "";
    for (const char of s) {
        for (let i = 0; i < max.length; i++) {
            if (max[i] === char) {
                max = max.slice(i + 1);
                break;
            }
        }
        max += char;
        hashMap.set(max, max.length);
    }

    let maxLen = 0;
    for (const value of hashMap.values()) {
        if (value > maxLen) {
            maxLen = value;
        }
    }

    return maxLen;
};
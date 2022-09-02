function lengthOfLastWord(s: string): number {
    let words = s.split(' ');
    let lastWord = words.pop();
    while(lastWord?.length === 0) lastWord = words.pop();
    return lastWord?.length ?? 0;
};
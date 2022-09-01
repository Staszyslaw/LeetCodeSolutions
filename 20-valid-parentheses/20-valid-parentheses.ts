function isValid(s: string): boolean {
    let stack: string[] = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (current in map) {
            stack.push(current);
        } else {
            if (stack.length === 0) return false;
            let last = stack.pop();
            last = last ? last : '';
            if (map[last] !== current) return false;
        }
    }
    return stack.length === 0;
};
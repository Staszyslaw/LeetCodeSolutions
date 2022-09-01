function isPalindrome(x: number): boolean {
    return x < 0 ? false : x < 10 ? true :
    isPalUtil(x) === x ? true : false;
};

function isPalUtil(x: number): number {
    let num = 0;
    while(x > 0) {
        let remainder = Math.floor(x % 10);
        num = num * 10 + remainder;
        x = Math.floor(x / 10);
    }
    return num;
}
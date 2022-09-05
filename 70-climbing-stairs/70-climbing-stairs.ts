function climbStairs(n: number): number {
    if(n === 1) {
        return 1;
    }
    let a = 1;
    let b = 2;
    for(let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};
function numberOfSteps(num: number): number {
    let steps = 0;

    while (num > 0) {
        if (!(num % 2)) {
            num = num >> 1;
        } else {
            num--;
        }
        steps++;
    }

    return steps;
};
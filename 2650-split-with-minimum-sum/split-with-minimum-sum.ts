function splitNum(num: number): number {
    const numAsString = num.toString();
    const segments = numAsString.split('').sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    const numberA = [];
    const numberB = [];

    segments.forEach((num, index) => index % 2 === 0 ? numberA.push(num) : numberB.push(num));

    return parseInt(numberA.join(''), 10) + parseInt(numberB.join(''), 10);
};
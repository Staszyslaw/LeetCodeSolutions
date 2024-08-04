function intToRoman(num: number): string {
    const IntToRomanMap: { [key: number]: string } = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };

    let romanNumeric = "";

    while (num > 0) {
        for (const [val, symbol] of Object.entries(IntToRomanMap).reverse()) {
            const _val = parseInt(val);
            if (num >= _val) {
                romanNumeric += symbol;
                num -= _val;
                break;
            }
        }
    }

    return romanNumeric;
}
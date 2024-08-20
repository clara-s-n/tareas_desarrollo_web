function veryfingDigit(id) {
    // Transform the ID number into an integer
    const y = parseInt(id);

    if (y >= 100000 && y <= 9999999) {
        // Convert each element of the string into an integer
        const x = Array.from(id, Number).reverse();

        let s = 0;

        // Predefined values
        const values = [4, 3, 6, 7, 8, 9, 2];

        // Number of elements
        const length = x.length;

        for (let i = 0; i < length; i++) {
            // Multiply each value at position i of the ID list with
            // the corresponding value at the same position in the predefined value list
            const c1 = x[i] * values[i];
            s += c1;
        }

        // Calculation of the verification digit
        const rest = s % 10;
        let dv = rest === 0 ? 0 : 10 - rest;
        return dv;
    } else {
        dv = -1;
        return dv;
    }
}

function isValid(veryfingDigit) {
    return veryfingDigit > -1;
}
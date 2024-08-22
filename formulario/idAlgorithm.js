function calculateVerifyingDigit(id) {
    // Convert string to array of numbers
    const x = Array.from(id, Number);
    // Calculate verifying digit
    let s = 0;
    const values = [2, 9, 8, 7, 6, 3, 4]; // Weights
    for (let i = 0; i < 7; i++) {
        s += x[i] * values[i];
    }
    const rest = s % 10;
    return rest === 0 ? 0 : 10 - rest;
}

function isValid(digit) {
    return digit >= 0 && digit <= 9;
}

function isValidFormatId(id) {
    return /^\d{1}\.\d{3}\.\d{3}-\d{1}$/.test(id);
}

function isValidId(id) {
    if (isValidFormat(id)) {
        const idWithoutFormatting = id.replace(/\.|-/g, "");
        const idWithoutVerifier = idWithoutFormatting.slice(0, -1);
        const verifyingDigit = calculateVerifyingDigit(idWithoutVerifier);
        const actualVerifier = parseInt(idWithoutFormatting.charAt(7));
        return verifyingDigit === actualVerifier;
    }
    return false;
}

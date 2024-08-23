function calculateVerifyingDigit(id) {
    // Convert string to array of numbers
    const x = Array.from(id, Number);
    let s = 0;
    const values = [2, 9, 8, 7, 6, 3, 4]; // Weights

    // Ensure we only use the first 7 digits
    for (let i = 0; i < 7; i++) {
        s += x[i] * values[i];
    }

    const rest = s % 10;
    return rest === 0 ? 0 : 10 - rest;
}

function isValidFormatId(id) {
    return /^\d{1}\.\d{3}\.\d{3}-\d{1}$/.test(id);
}

function isValidId(id) {
    if (isValidFormatId(id)) {
        // Remove formatting characters
        const idWithoutFormatting = id.replace(/\.|-/g, "");
        const idWithoutVerifier = idWithoutFormatting.slice(0, 7); // First 7 digits
        const verifyingDigit = calculateVerifyingDigit(idWithoutVerifier);
        const actualVerifier = parseInt(idWithoutFormatting.charAt(7)); // The 8th digit
        return verifyingDigit === actualVerifier;
    }
    return false;
}
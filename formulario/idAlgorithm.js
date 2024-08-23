function calculateVerifyingDigit(id) {
    // Asegúrate de que id sea una cadena
    id = String(id);

    // Convierte la cadena a un array de números
    const x = id.split('').map(Number);
    let s = 0;
    const values = [2, 9, 8, 7, 6, 3, 4]; // Ajustado a 7 valores

    for (let i = 0; i < 7; i++) {
        s += x[i] * values[i];
    }

    const rest = s % 11;
    return rest === 0 ? 0 : 11 - rest;
}

function isValidFormatId(id) {
    return /^\d{1}\.\d{3}\.\d{3}-\d{1}$/.test(id);
}

function isValidId(id) {
    console.log("Cédula ingresada:", id);
    if (isValidFormatId(id)) {
        console.log("Formato válido");
        const idWithoutFormatting = id.replace(/\.|-/g, "");
        const idWithoutVerifier = idWithoutFormatting.slice(0, 7);
        const verifyingDigit = calculateVerifyingDigit(idWithoutVerifier);
        const actualVerifier = parseInt(idWithoutFormatting.charAt(7));
        console.log("Dígito calculado:", verifyingDigit);
        console.log("Dígito actual:", actualVerifier);
        return verifyingDigit === actualVerifier;
    }
    console.log("Formato inválido");
    return false;
}
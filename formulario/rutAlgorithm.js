// Algoritmo para verificar el RUT es:

// 1 - Se toma el número de RUT hasta la penúltima posición, o sea, los 11 primeros dígitos.
// 2 - Se multiplica cada dígito por los siguientes factores: 4,3,2,9,8,7,6,5,4,3,2.
// 3 - Se suman los productos obtenidos.
// 4 - El probable dígito verificador es lo que falta para llegar a la suma obtenida. Para eso, se divide el resultado de la suma entre 11. Le resto 11 menos el resto obtenido.
// 5 - Si el dígito es menor que 10, es el verdadero dígito verificador.
// Si es 11, el dígito calculado es 0.
// Si es 10, no es válido el RUT

function veryfingDigit(rut) {
    // Transform the ID number into an integer
    const y = parseInt(rut);

    if (y >= 10000000 && y <= 99999999) {
        // Convert each element of the string into an integer
        const x = Array.from(rut, Number).reverse();

        let s = 0;

        // Predefined values
        const values = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        // Number of elements
        const length = x.length;

        for (let i = 0; i < length; i++) {
            // Multiply each value at position i of the ID list with
            // the corresponding value at the same position in the predefined value list
            const c1 = x[i] * values[i];
            s += c1;
        }

        // Calculation of the verification digit
        const rest = s % 11;
        let dv = 11 - rest;
        return dv;
    } else {
        dv = -1;
        return dv;
    }
}
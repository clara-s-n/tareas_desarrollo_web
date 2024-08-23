class Persona {
    constructor(nombre, apellido, email, cedula, rut) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.cedula = cedula;
        this.rut = rut;
    }
}

const form = document.getElementById('registroForm');
const inputs = form.querySelectorAll('input');
const registrarBtn = document.getElementById('registrarBtn');

const validations = {
    nombre: (value) => {
        if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
        if (value.length > 50) return 'El nombre no puede tener más de 50 caracteres';
        return '';
    },
    apellido: (value) => {
        if (value.length < 2) return 'El apellido debe tener al menos 2 caracteres';
        if (value.length > 50) return 'El apellido no puede tener más de 50 caracteres';
        return '';
    },
    email: (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(value) ? '' : 'El correo electrónico no es válido';
    },
    password: (value) => {
        if (value.length < 8) return 'La contraseña debe tener al menos 8 caracteres';
        if (value.length > 20) return 'La contraseña no puede tener más de 20 caracteres';
        if (!/[A-Z]/.test(value)) return 'La contraseña debe contener al menos una mayúscula';
        if (!/[a-z]/.test(value)) return 'La contraseña debe contener al menos una minúscula';
        if (!/[0-9]/.test(value)) return 'La contraseña debe contener al menos un número';
        if (!/[!@#$%^&*_-]/.test(value)) return 'La contraseña debe contener al menos un carácter especial (!@#$%^&*_-)';
        return '';
    },
    repeatPassword: (value, password) => {
        return value === password ? '' : 'Las contraseñas no coinciden';
    },
    cedula: (value) => {
        return isValidId(value) ? '' : 'La cédula no es válida';
    },
    rut: (value) => {
        return isValidRut(value) ? '' : 'El RUT no es válido';
    }
};

inputs.forEach(input => {
    input.addEventListener('input', function () {
        validateField(this);
    });
});

function validateField(field) {
    const errorElement = document.getElementById(`${field.id}Error`);
    let error = validations[field.id](field.value, form.password.value);
    errorElement.textContent = error;
    field.classList.toggle('valid', !error);
    field.classList.toggle('invalid', !!error);
    return !error;
}

function showPasswordRequirements() {
    const password = form.password.value;

    const lengthRequirement = document.getElementById('length');
    lengthRequirement.classList.toggle('valid', password.length >= 8);
    lengthRequirement.classList.toggle('requirement', password.length < 8);

    const uppercaseRequirement = document.getElementById('uppercase');
    uppercaseRequirement.classList.toggle('valid', /[A-Z]/.test(password));
    uppercaseRequirement.classList.toggle('requirement', !/[A-Z]/.test(password));

    const lowercaseRequirement = document.getElementById('lowercase');
    lowercaseRequirement.classList.toggle('valid', /[a-z]/.test(password));
    lowercaseRequirement.classList.toggle('requirement', !/[a-z]/.test(password));

    const numberRequirement = document.getElementById('number');
    numberRequirement.classList.toggle('valid', /[0-9]/.test(password));
    numberRequirement.classList.toggle('requirement', !/[0-9]/.test(password));

    const specialRequirement = document.getElementById('special');
    specialRequirement.classList.toggle('valid', /[!@#$%^&*_-]/.test(password));
    specialRequirement.classList.toggle('requirement', !/[!@#$%^&*_-]/.test(password));
}

// Evento para validar la contraseña y mostrar requisitos mientras se escribe
form.password.addEventListener('input', showPasswordRequirements);

registrarBtn.addEventListener('click', function () {
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        const persona = new Persona(
            form.nombre.value,
            form.apellido.value,
            form.email.value,
            form.cedula.value,
            form.rut.value
        );
        console.log('Persona registrada:', persona);
        alert('Registro exitoso. Revisa la consola para ver los detalles.');
    }
});

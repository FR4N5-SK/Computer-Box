export function validateInput(texto, campo) {
    if (texto.trim().length == 0){
        alert(`Estas dejando el campo de ${campo} vacio`)
        return "Invalido" 
    } 
}

export function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,128}$/;
    if (passwordRegex.test(password)) {
        return !passwordRegex.test(password)
    } else {
        alert(`La contraseña debe tener como minimo 1 Mayuscula, 1 Minuscula, 1 Numero, 1 Caracter especial y que sea de minimo 8 digitos`)
        return !passwordRegex.test(password)
    }
}

export function validateConfirmPassword(password, confirmPassword) {
    if(password === confirmPassword) {
        return false
    } else {
        alert(`Las contraseñas no coinciden`)
        return true
    }
}
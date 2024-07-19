const getAgePlugin = require('get-age');

// Si el dia de maniana cambia el paquete solo cambio este archivo
const getAge = (birthdate) => {
    if (!birthdate) return new Error('Birthdate is required');

    return getAgePlugin(birthdate);
}

module.exports = {
    getAge,
}
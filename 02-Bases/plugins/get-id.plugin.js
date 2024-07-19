const { v4: uuidv4Plugin } = require('uuid');

// Si el dia de maniana cambia el paquete solo cambio este archivo
const getUuid = () => {
    return uuidv4Plugin();
}

module.exports = {
    getUuid,
}
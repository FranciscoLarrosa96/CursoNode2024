"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
// Si el dia de maniana cambia el paquete solo cambio este archivo
const getAge = (birthdate) => {
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;

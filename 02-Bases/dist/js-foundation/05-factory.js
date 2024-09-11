"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
// Esto es una factory function es una funcion que retorna otra
const buildMakePerson = ({ getUuid, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUuid(),
            name,
            birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;

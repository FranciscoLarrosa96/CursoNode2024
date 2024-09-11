"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUuid = void 0;
const uuid_1 = require("uuid");
// Si el dia de maniana cambia el paquete solo cambio este archivo
const getUuid = () => {
    return (0, uuid_1.v4)();
};
exports.getUuid = getUuid;

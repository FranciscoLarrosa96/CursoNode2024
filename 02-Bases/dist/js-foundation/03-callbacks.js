"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
const users = [
    {
        id: 1,
        name: 'Francisco'
    },
    {
        id: 2,
        name: 'Nahuel'
    }
];
//El callback lo ejecuto cuando ya se realizo una tarea en este caso obtener el user
function getUserById(id, callback) {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`);
    }
    //Si encontro el user lo mando y paso null al error
    return callback(undefined, user);
}

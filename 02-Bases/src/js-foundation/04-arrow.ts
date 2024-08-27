
interface User {
    id: number;
    name: string;
}

const users:User[] = [
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
export function getUserById(id: number, callback: (err?: string, user?: User) => void) {
    const user = users.find(function (user) {
        return user.id === id;
    });

    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`);
    }

    //Si encontro el user lo mando y paso null al error
    return callback(undefined, user);
}

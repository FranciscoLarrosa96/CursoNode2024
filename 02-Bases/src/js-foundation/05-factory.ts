
interface BuildMakerPersonOptions {
    getUuid: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}
// Esto es una factory function es una funcion que retorna otra
const buildMakePerson = ({ getUuid, getAge }: BuildMakerPersonOptions) => {
    return ({ name, birthdate }: PersonOptions) => {

        return {
            id: getUuid(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}



// Esto es una factory function es una funcion que retorna otra
const buildMakePerson = ({ getUuid, getAge }) => {
    return ({ name, birthdate }) => {

        return {
            id: getUuid(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}



// const obj = { name: 'Francisco', birthdate: '1996-05-10' }

// const fran = buildPerson(obj);
// console.log("🚀 ~ fran:", fran)

module.exports = {
    buildMakePerson,
}
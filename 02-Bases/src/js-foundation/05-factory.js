const { getAge, getUuid } = require('../../plugins');

const buildPerson = ({ name, birthdate }) => {

    return {
        id: getUuid(),
        name,
        birthdate,
        age: getAge(birthdate)
    }
}

const obj = { name: 'Francisco', birthdate: '1996-05-10' }

const fran = buildPerson(obj);
console.log("🚀 ~ fran:", fran)

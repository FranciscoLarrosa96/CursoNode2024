// const {emailTemplate} =  require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
const { getAge, getUuid } = require('../plugins');
const { buildMakePerson } = require('./js-foundation/05-factory');
//Desestructuro la cosntante
// console.log(emailTemplate);

// getUserById(1, (err, user) => {
//     if (err) {
//         throw new Error(err)
//     }

//     console.log("🚀 ~ user:", user);
// });

const makePerson = buildMakePerson({ getUuid, getAge });

const obj = { name: 'Francisco', birthdate: '1996-05-10' };


const fran = makePerson(obj);

console.log("🚀 ~ obj:", { fran })
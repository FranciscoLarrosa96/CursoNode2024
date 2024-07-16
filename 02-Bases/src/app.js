// const {emailTemplate} =  require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
const { getUserById } = require('./js-foundation/04-arrow');
//Desestructuro la cosntante
// console.log(emailTemplate);

getUserById(1, (err, user) => {
    if (err) {
        throw new Error(err)
    }

    console.log("🚀 ~ user:", user);
});
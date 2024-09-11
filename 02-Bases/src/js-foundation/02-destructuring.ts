// console.log(process.env);

// desestructuro
const {USERDOMAIN,PUBLIC} = process.env;


// console.table({USERDOMAIN,PUBLIC});

export const characters = ['Flash', 'Superman', 'Batman', 'Hulk']
const {2: bat} = characters;
const [, , ,  hulk] = characters;
// console.table(bat)
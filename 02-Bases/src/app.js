// const {getPokemonById} = require('./js-foundation/06-promises');
const {buildLogger} = require('../plugins');

const logger = buildLogger('app.js');

logger.log('Hola! ')
// getPokemonById(10)
// .then((pokemon) => {
//     console.log("🚀 ~ getPokemonById ~ pokemon:", pokemon)
// })
// .catch((err) => console.log('ERROR'))

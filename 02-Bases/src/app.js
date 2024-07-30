const {getPokemonById} = require('./js-foundation/06-promises');


getPokemonById(10)
.then((pokemon) => {
    console.log("🚀 ~ .then ~ pokemon:", pokemon)
})
.catch((err) => console.log('ERROR'))

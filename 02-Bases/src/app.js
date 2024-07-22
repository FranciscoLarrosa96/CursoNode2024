const {getPokemonById} = require('./js-foundation/06-promises');


getPokemonById(1)
.then((pokemon) => {
    console.log("🚀 ~ .then ~ pokemon:", pokemon)
})

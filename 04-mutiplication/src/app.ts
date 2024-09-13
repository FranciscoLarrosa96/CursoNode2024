import { yarg } from "./config/plugins/yargs.plugin";

//Esto es una funcion anonima autoinvocada
(async () => {
    await main();
})();

async function main() {
    console.log(yarg);
}


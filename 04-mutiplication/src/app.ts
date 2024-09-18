import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

//Esto es una funcion anonima autoinvocada
(async () => {
    await main();
})();

async function main() {
    const { b: base, l: limit, s: showTable, n:nameFile, d:destinationFile } = yarg;
    ServerApp.run({base,limit,showTable,nameFile,destinationFile});
}


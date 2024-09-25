import { envs } from "./config/plugins/envs.plugins";
import { LogModel, MongoDataBase } from "./data/mongodb";
import { Server } from "./presentation/server";

(async() => {
    main();
})();

async function main(){

    await MongoDataBase.connect(
        {
            mongoUrl: envs.MONGO_URL,
            dbName : envs.MONGO_DB_NAME
        }
    );

    //Crear una coleccion = tables, doc = registro
    // const newLog = await LogModel.create({
    //     message: 'Test message desde mongo',
    //     origin: 'App.ts',
    //     level:"low",
    // });

    // await newLog.save();
    const logs = await LogModel.find();
    console.log("🚀 ~ main ~ logs:", logs)
    Server.start();
    // console.log("🚀 ~ envs:", envs)
    // console.log("🚀 ~ main ~ newLog:", newLog)
}


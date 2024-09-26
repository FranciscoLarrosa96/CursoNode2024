import { PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/envs.plugins";
import { LogModel, MongoDataBase } from "./data/mongodb";
import { Server } from "./presentation/server";

(async () => {
    main();
})();

async function main() {

    await MongoDataBase.connect(
        {
            mongoUrl: envs.MONGO_URL,
            dbName: envs.MONGO_DB_NAME
        }
    );

    const prisma = new PrismaClient();

    // Crear un registro en prisma
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: "HIGH",
    //         message: "Test message desde prisma",
    //         origin: "App.ts"
    //     }
    // });
    // console.log("🚀 ~ main ~ newLog:", newLog)
    /**
     * ----------------------------------------------
     */
    // Buscar registro en prisma
    // const logs = await prisma.logModel.findMany(
    //     {
    //         where: {
    //             level: "HIGH"
    //         }
    //     }
    // );
    // console.log("🚀 ~ main ~ logs:", logs)


    /**
    * ----------------------------------------------
    */

    //Crear una coleccion = tables, doc = registro
    // const newLog = await LogModel.create({
    //     message: 'Test message desde mongo',
    //     origin: 'App.ts',
    //     level:"low",
    // });
    // await newLog.save();
    /**
        * ----------------------------------------------
        */
    // Busca registros en mongo
    // const logs = await LogModel.find();
    // console.log("🚀 ~ main ~ logs:", logs);
    /**
        * ----------------------------------------------
        */


    // Server.start();

}


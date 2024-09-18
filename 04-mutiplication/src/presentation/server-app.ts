import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    nameFile?: string,
    destinationFile?:string
}

export class ServerApp {

    static run({ base, limit, showTable,nameFile,destinationFile }: RunOptions) {
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({ 
            fileContent: table, 
            destination: `${destinationFile}/table-${base}`,
            fileName: nameFile
         });
    }
}
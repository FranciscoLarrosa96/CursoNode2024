import { CreateTable } from "../domain/use-cases/create-table.use-case"

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean
}

export class ServerApp {

    static run({ base, limit, showTable }: RunOptions) {
        const table = new CreateTable().execute({ base, limit });
        console.log("🚀 ~ ServerApp ~ run ~ table:", table)
    }
}
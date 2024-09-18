interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean
}

export class ServerApp {

    static run(options:RunOptions) {
        console.log('Server Run!');
        console.log("🚀 ~ ServerApp ~ run ~ options:", options)
    }
}
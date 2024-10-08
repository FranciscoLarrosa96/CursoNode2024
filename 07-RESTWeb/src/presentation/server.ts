import express from 'express';
import path from 'path';


interface Options {
    port: number;
    public_path?: string;
}

export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;

    constructor(private options: Options) {
        const { port, public_path = 'public' } = options;
        this.port = port;
        this.publicPath = public_path;
    }

    async start() {

        //Middlewares

        //Public  Folder
        this.app.use(express.static(this.publicPath));

        // Routes
        this.app.get('/api/todos', (req, res) => {
            res.json(
                [
                    {
                        id: 1,
                        name: 'Buy Milk',
                        createAt: new Date()
                    },
                    {
                        id: 2,
                        name: 'Buy Bread',
                        createAt: new Date()
                    },
                    {
                        id: 3,
                        name: 'Buy Eggs',
                        createAt: new Date()
                    }
                ]
            );
        });


        //* SPA
        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname, `../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        });

        this.app.listen(this.port, () => {
            console.log('Server running on port 3000');
        });
    }
}
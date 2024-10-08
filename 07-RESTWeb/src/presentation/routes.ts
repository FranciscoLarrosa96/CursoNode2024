import { Router } from "express";



export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        router.get('/api/todos', (req, res) => {
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


        return router;

    }



}
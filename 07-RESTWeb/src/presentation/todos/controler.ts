import { Request, Response } from 'express';

export class TodosController {

    constructor() { }


    public getTodos = (req: Request, res: Response) => {
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
    }
}
import { Request, Response } from 'express';

const todos = [
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

export class TodosController {

    constructor() { }


    public getTodos = (req: Request, res: Response) => {
        res.json(todos);
    }

    public getTodoById = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) {
            res.status(400).json(
                { error: 'Invalid ID' }
            );
            return;
        }
        const todo = todos.find(todo => todo.id == id);
        (todo) ? res.json(todo) : res.status(404).json(
            { error: 'Todo not found' }
        );
    }

    public createTodo = (req: Request, res: Response) => {
        const { name } = req.body;
        if (!name) {
            res.status(400).json(
                { error: 'Name is required' }
            );
            return;
        }
        const todo = {
            id: todos.length + 1,
            name,
            createAt: new Date()
        }
        todos.push(todo);
        res.status(201).json(todo);
    }
}
import { Request, Response } from 'express';

const todos = [
    {
        id: 1,
        text: 'Buy Milk',
        createAt: new Date()
    },
    {
        id: 2,
        text: 'Buy Bread',
        createAt: null
    },
    {
        id: 3,
        text: 'Buy Eggs',
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
        const { text } = req.body;
        if (!text) {
            res.status(400).json(
                { error: 'text is required' }
            );
            return;
        }
        const todo = {
            id: todos.length + 1,
            text,
            createAt: new Date()
        }
        todos.push(todo);
        res.status(201).json(todo);
    }

    public updateTodo = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) {
            res.status(400).json(
                { error: 'Invalid ID' }
            );
            return;
        }
        const todo = todos.find(todo => todo.id == id);
        if (!todo) {
            res.status(404).json(
                { error: 'Todo not found' }
            );
            return;
        }
        const { text, createAt } = req.body;

        todo.text = text || todo.text;
        (createAt === 'null')
            ? todo.createAt = null
            : todo.createAt = new Date(createAt || todo.createAt);

        res.json(todo);
    }

    public deleteTodo = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) {
            res.status(400).json(
                { error: 'Invalid ID' }
            );
            return;
        }
        const index = todos.findIndex(todo => todo.id == id);
        if (index === -1) {
            res.status(404).json(
                { error: 'Todo not found' }
            );
            return;
        }
        todos.splice(index, 1);
        res.status(200).send('Todo deleted');
    }
}
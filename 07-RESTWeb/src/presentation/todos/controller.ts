import { Request, Response } from 'express';
import { prisma } from '../../data/postgresData';
import { CreateTodoDto } from '../../domain/dtos';



export class TodosController {

    constructor() { }


    public getTodos = async (req: Request, res: Response) => {
        const allTodos = await prisma.todo.findMany();
        res.json(allTodos);
    }

    public getTodoById = async (req: Request, res: Response) => {

        const id = +req.params.id;
        if (isNaN(id)) {
            res.status(400).json(
                { error: 'Invalid ID' }
            );
            return;
        }

        const todo = await prisma.todo.findFirst({
            where: {
                id
            }
        });

        if (!todo) {
            res.status(404).json(
                { error: 'Todo not found' }
            );
            return;
        }
        res.json(todo);
    }

    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if (error) {
            res.status(400).json(
                { error }
            );
        }

        const todo = await prisma.todo.create({
            data: createTodoDto!
        });
        res.json(todo);
    }

    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) {
            res.status(400).json(
                { error: 'Invalid ID' }
            );
            return;
        }

        const todo = await prisma.todo.findFirst({
            where: {
                id
            }
        });
        if (!todo) {
            res.status(404).json(
                { error: 'Todo not found' }
            );
            return;
        }
        const { text, createdAt } = req.body;
        const updatedTodo = await prisma.todo.update({
            where: {
                id
            },
            data: {
                text,
                createdAt: (createdAt) ? new Date(createdAt) : null
            }
        });

        res.json(updatedTodo);
    }

    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) {
            res.status(400).json(
                { error: 'Invalid ID' }
            );
            return;
        }
        const todo = await prisma.todo.findFirst({
            where: {
                id
            }
        });
        if (!todo) {
            res.status(404).json(
                { error: 'Todo not found' }
            );
            return;
        }
        const deleted = await prisma.todo.delete({
            where: {
                id
            }
        });

        (deleted) ? res.json(deleted) : res.status(404).json({ error: 'Todo not found' });
    }
}
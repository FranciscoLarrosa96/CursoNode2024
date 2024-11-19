import { Request, Response } from 'express';
import { prisma } from '../../data/postgresData';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { TodoDataRepository } from '../../domain';



export class TodosController {

    constructor(private readonly todoRepository: TodoDataRepository) { }


    public getTodos = async (req: Request, res: Response) => {
        const allTodos = await this.todoRepository.getTodos();
        res.json(allTodos);
    }

    public getTodoById = async (req: Request, res: Response) => {

        const id = +req.params.id;
        try {
            const todo = await this.todoRepository.findTodoById(id);
            res.json(todo);
        } catch (error) {
            res.status(404).json(
                { error: 'Todo not found' }
            );
        }
    }

    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);


        if (error) {
            res.status(400).json(
                { error }
            );
        }
        const todo = await this.todoRepository.createTodo(createTodoDto!);
        res.json(todo);
    }

    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, upDateTodoDto] = UpdateTodoDto.create(
            {
                ...req.body,
                id

            }
        );

        if (error) {
            res.status(400).json(
                { error }
            );
            return;
        }

        const updatedTodo = await this.todoRepository.updateTodoById(upDateTodoDto!);
        res.json(updatedTodo);
    }

    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const todo = await this.todoRepository.deleteTodoById(id);
        res.json(todo);
    }
}
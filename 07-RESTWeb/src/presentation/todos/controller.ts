import { Request, Response } from 'express';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { CreateTodo, DeleteTodo, GetTodo, GetTodos, TodoDataRepository, UpdateTodo } from '../../domain';



export class TodosController {

    constructor(private readonly todoRepository: TodoDataRepository) { }


    public getTodos = (req: Request, res: Response) => {
        new GetTodos(this.todoRepository).execute()
            .then((allTodos) => {
                res.json(allTodos);
            })
            .catch((error) => {
                res.status(400).json(
                    { error }
                );
            });
    }

    public getTodoById = (req: Request, res: Response) => {

        new GetTodo(this.todoRepository).execute(+req.params.id)
            .then((todo) => {
                res.json(todo);
            })
            .catch((error) => {
                res.status(404).json(
                    { error: 'Todo not found!' }
                );
            });

    }

    public createTodo = (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);


        if (error) {
            res.status(400).json(
                { error }
            );
        }

        new CreateTodo(this.todoRepository).execute(createTodoDto!)
            .then((todo) => {
                res.json(todo);
            })
            .catch((error) => {
                res.status(400).json(
                    { error }
                );
            });
    }

    public updateTodo = (req: Request, res: Response) => {
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

        new UpdateTodo(this.todoRepository).execute(upDateTodoDto!)
            .then((updatedTodo) => {
                res.json(updatedTodo);
            })
            .catch((error) => {
                res.status(400).json(
                    { error }
                );
            });
    }

    public deleteTodo = (req: Request, res: Response) => {
        const id = +req.params.id;

        new DeleteTodo(this.todoRepository).execute(id)
            .then((todo) => {
                res.json(todo);
            })
            .catch((error) => {
                res.status(400).json(
                    { error }
                );
            });
    }
}
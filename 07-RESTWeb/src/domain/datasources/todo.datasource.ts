import { CreateTodoDto, UpdateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";


export abstract class TodoDataSource {
    abstract getTodos(): Promise<TodoEntity[]>;
    abstract createTodo(createTodoDto: CreateTodoDto): Promise<TodoEntity>;
    abstract deleteTodoById(id: number): Promise<TodoEntity>;
    abstract findTodoById(id: number): Promise<TodoEntity | null>;
    abstract updateTodoById(UpdateTodoDto : UpdateTodoDto): Promise<TodoEntity | null>;
}
import { CreateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface CreateTodoUseCase {
    execute(dto: CreateTodoDto): Promise<TodoEntity>
}

export class CreateTodo implements CreateTodoUseCase {
    constructor(private readonly todoRepository: TodoDataRepository) { }

    async execute(dto: CreateTodoDto): Promise<TodoEntity> {
        const todo = await this.todoRepository.createTodo(dto);
        return todo;
    }
}
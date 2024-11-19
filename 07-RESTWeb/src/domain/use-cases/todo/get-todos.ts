
import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface GetTodosUseCase {
    execute(): Promise<TodoEntity[]>
}

export class GetTodo implements GetTodosUseCase {
    constructor(private readonly todoRepository: TodoDataRepository) { }

    execute(): Promise<TodoEntity[]> {
        return this.todoRepository.getTodos();
    }
}

import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface GetTodoUseCase {
    execute(id: number): Promise<TodoEntity | null>
}

export class GetTodo implements GetTodoUseCase {
    constructor(private readonly todoRepository: TodoDataRepository) { }

    execute(id: number): Promise<TodoEntity | null> {
        return this.todoRepository.findTodoById(id);
    }
}
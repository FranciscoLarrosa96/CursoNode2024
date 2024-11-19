import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface UpdateTodoDtoUseCase {
    execute(dto: UpdateTodoDto): Promise<TodoEntity | null>
}

export class UpdateTodo implements UpdateTodoDtoUseCase {
    constructor(private readonly todoRepository: TodoDataRepository) { }

    execute(dto: UpdateTodoDto): Promise<TodoEntity | null> {
        return this.todoRepository.updateTodoById(dto);
    }
}
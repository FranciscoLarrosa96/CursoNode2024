import { CreateTodoDto, TodoDataRepository, TodoDataSource, TodoEntity, UpdateTodoDto } from "../../domain";


export class TodoRepositoryImpl implements TodoDataRepository {

    constructor(private readonly datasource: TodoDataSource) { }

    getTodos(): Promise<TodoEntity[]> {
        return this.datasource.getTodos();
    }
    createTodo(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.createTodo(createTodoDto);
    }
    deleteTodoById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteTodoById(id);
    }
    findTodoById(id: number): Promise<TodoEntity | null> {
        return this.datasource.findTodoById(id);
    }
    updateTodoById(UpdateTodoDto: UpdateTodoDto): Promise<TodoEntity | null> {
        return this.datasource.updateTodoById(UpdateTodoDto);
    }

}
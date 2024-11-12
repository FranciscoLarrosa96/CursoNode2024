import { prisma } from "../../data/postgresData";
import { TodoDataSource, TodoEntity } from "../../domain";

export class TodoDatasourceImpl implements TodoDataSource {
    async getTodos(): Promise<TodoEntity[]> {
        const allTodos = await prisma.todo.findMany();
        return allTodos.map(todo => TodoEntity.fromObject(todo));
    }
    createTodo(): Promise<TodoEntity> {
        throw new Error("Method not implemented.");
    }
    deleteTodoById(id: number): Promise<TodoEntity> {
        throw new Error("Method not implemented.");
    }
    findTodoById(id: number): Promise<TodoEntity> {
        throw new Error("Method not implemented.");
    }
    updateTodoById(): Promise<TodoEntity> {
        throw new Error("Method not implemented.");
    }
}
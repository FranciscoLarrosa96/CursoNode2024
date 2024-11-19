import { prisma } from "../../data/postgresData";
import { CreateTodoDto, TodoDataSource, TodoEntity, UpdateTodoDto } from "../../domain";

export class TodoDatasourceImpl implements TodoDataSource {
    async getTodos(): Promise<TodoEntity[]> {
        const allTodos = await prisma.todo.findMany();
        return allTodos.map(todo => TodoEntity.fromObject(todo));
    }
    async createTodo(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        const createdTodo = await prisma.todo.create({
            data: createTodoDto
        });
        return TodoEntity.fromObject(createdTodo);
    }
    async deleteTodoById(id: number): Promise<TodoEntity> {
        await this.findTodoById(id);
        const deleted = await prisma.todo.delete({
            where: {
                id
            }
        });
        return TodoEntity.fromObject(deleted);
    }
    async findTodoById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.findFirst({
            where: {
                id
            }
        });

        if (!todo) {
            throw new Error('Todo not found');
        } else {
            return TodoEntity.fromObject(todo);
        }
    }
    async updateTodoById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        await this.findTodoById(updateTodoDto.id!);
        const updatedTodo = await prisma.todo.update({
            where: {
                id: updateTodoDto.id!
            },
            data: updateTodoDto.values
        });

        return TodoEntity.fromObject(updatedTodo);
    }
}
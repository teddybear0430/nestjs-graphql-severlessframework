import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from '../graphql';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [
    { id: '1', title: 'sample' },
    { id: '2', title: 'hoge', description: 'yahoo!' },
  ];

  create(createTodoInput: CreateTodoInput) {
    return 'This action adds a new todo';
  }

  findAll(): Todo[] {
    console.info(`INFO: START GET TODO`);
    return this.todos;
  }

  findOne(id: number): Todo {
    console.info(`INFO: START FIND TODO`);
    return this.todos.find((todo) => todo.id === String(id));
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}

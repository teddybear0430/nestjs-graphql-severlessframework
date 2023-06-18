
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTodoInput {
    exampleField?: Nullable<number>;
}

export interface UpdateTodoInput {
    id: number;
}

export interface IQuery {
    todos(): Nullable<Todo>[] | Promise<Nullable<Todo>[]>;
    todo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export interface IMutation {
    createTodo(createTodoInput: CreateTodoInput): Todo | Promise<Todo>;
    updateTodo(updateTodoInput: UpdateTodoInput): Todo | Promise<Todo>;
    removeTodo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export interface Todo {
    id: string;
    title: string;
    description?: Nullable<string>;
}

type Nullable<T> = T | null;

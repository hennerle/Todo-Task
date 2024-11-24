import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  removeTodo,
  editTodo
} from './todo.action';
import { Todo } from '../../todo/todo.model';
import { Dog } from '../../todo/dog.model';

export interface TodoState {
  todos: Todo[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending',
};



export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),

  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(editTodo, (state, { id, content }) => ({
    ...state,
    todos: state.todos.map((todo)=>
    todo.id === id ? { ...todo, content} : todo
    ),
  })),
);
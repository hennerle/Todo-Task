import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  removeTodo,
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
} from './todo.action';
import { Todo } from '../../todo/todo.model';

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
  // Supply the initial state
  initialState,
  // Add the new todo to the todos array
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),
  // Remove the todo from the todos array
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  // Trigger loading the todos
  on(loadTodos, (state) => ({...state, status: 'loading' as 'loading'})),

  on(loadTodosSuccess, (state, {todos}) => ({
      ...state,
      todos: todos,
      error:'',
      status:'success' as 'success'
  })),

  on (loadTodosFailure, (state, { error }) => ({
    ...state,
    error:error,
    status:'error' as 'error'
  }))
);
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { todoAdapter, TodoState } from './todo.reducer';

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
  selectTodos,
  todoAdapter.getSelectors().selectAll,
);

export const selectTodoIds = createSelector(
  selectTodos,
  (state) => todoAdapter.getSelectors().selectIds(state) as string[]
);

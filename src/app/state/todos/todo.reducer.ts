import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  removeTodo,
  editTodo,
  removeManyTodos
} from './todo.action';
import { Todo } from '../../todo/todo.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();


export interface TodoState extends EntityState<Todo>{
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = todoAdapter.getInitialState({
  error: '',
  status: 'pending',
});



export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { content }) => 
    todoAdapter.addOne(
      { id: Date.now().toString(), content },
      state
    )
  ),

  on(removeTodo, (state, { id }) => 
    todoAdapter.removeOne(id, state)
  ),

  on(editTodo, (state, { id, content }) => 
    todoAdapter.updateOne(
      { id, changes: { content } },
      state
    )
  ),

  on(removeManyTodos, (state, { ids }) => 
    todoAdapter.removeMany(ids, state)
  )
);
    
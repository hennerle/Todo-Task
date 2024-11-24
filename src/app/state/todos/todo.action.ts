import { createAction, props } from "@ngrx/store";

export const addTodo= createAction(
    '[Todo Page] Add Todo',
    props<{ content: string } >()
);

export const removeTodo= createAction(
    '[Todo Page] Remove Todo',
    props<{ id: string } >()
);

export const editTodo= createAction(
    '[Todo Page] Edit Todo',
    props<{ id: string, content: string } >()
);

export const removeManyTodos = createAction(
    '[Todo List] Remove Many Todos',
    props<{ ids: string[] }>()
  );



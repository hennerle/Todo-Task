import { createAction, props } from "@ngrx/store";
import { Todo } from "../../todo/todo.model";

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



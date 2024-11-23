import { DogState } from "./dogs/dog.reducer";
import { TodoState } from "./todos/todo.reducer";

export interface AppState{
    todos: TodoState;
    dogs: DogState;
}
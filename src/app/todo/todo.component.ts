import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, removeTodo, loadTodos } from '../state/todos/todo.action';
import { Todo } from './todo.model';
import { selectAllTodos } from '../state/todos/todo.selectors'
import { AppState } from '../state/app.state';


@Component({
  selector: 'app-todo',
  standalone:false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  public allTodos$: Observable<Todo[]>;
  public todo = '';
  constructor(private store: Store<AppState>){
    this.allTodos$ = this.store.select(selectAllTodos);
  }



  ngOnInit(){
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    this.store.dispatch(addTodo({ content: this.todo}));
    this.todo = '';
  }

  removeTodo(todo: Todo){
    this.store.dispatch(removeTodo({ id: todo.id}));
  }
}

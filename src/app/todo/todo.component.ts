import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, removeTodo } from '../state/todos/todo.action';
import { Todo } from './todo.model';
import { selectAllDogs } from '../state/dogs/dog.selectors'
import { selectAllTodos } from '../state/todos/todo.selectors'
import { AppState } from '../state/app.state';
import { loadDogs } from '../state/dogs/dog.action';
import { Dog } from './dog.model';
import { DogService } from './dog.service';


@Component({
  selector: 'app-todo',
  standalone:false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  public allDogs$: Observable<Dog[]>;
  public allTodos$: Observable<Todo[]>;
  public todo = '';
  constructor(private store: Store<{ }>){
    this.allDogs$ = this.store.select(selectAllDogs);
    console.log('SG'),
    console.log(this.allDogs$);
    this.allTodos$ = this.store.select(selectAllTodos);
  }



  ngOnInit(){
    this.store.dispatch(loadDogs());
    //console.log(this.allDogs$);
  }

  addTodo() {
    this.store.dispatch(addTodo({ content: this.todo}));
    console.log('SGsd'),
    console.log(this.allTodos$);
    this.todo = '';
  }

  removeTodo(todo: Todo){
    this.store.dispatch(removeTodo({ id: todo.id}));
  }
}

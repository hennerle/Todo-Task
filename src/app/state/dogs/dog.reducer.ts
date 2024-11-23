import { createReducer, on } from '@ngrx/store';
import {
  loadDogs,
  loadDogsSuccess,
  loadDogsFailure
} from './dog.action';
import { Todo } from '../../todo/todo.model';
import { Dog } from '../../todo/dog.model';

export interface DogState {
    dogs: {
      data: Dog[]; 
    };
  }
  
  export const initialState: DogState = {
    dogs: {
      data: [],
    }
  };

export const dogReducer = createReducer(
    // Supply the initial state
    initialState,
    on(loadDogs, (state) => ({...state})),

    on(loadDogsSuccess, (state, {dogs}) => ({
        ...state,
        dogs: dogs,

    })),

    on (loadDogsFailure, (state) => ({
        ...state,
    }))
);
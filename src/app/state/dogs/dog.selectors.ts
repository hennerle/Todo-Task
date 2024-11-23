import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DogState } from './dog.reducer';

export const selectDogs = (state: AppState) => state.dogs;
export const selectAllDogs = createSelector(
  selectDogs,
  (state: DogState) => state.dogs.data
);
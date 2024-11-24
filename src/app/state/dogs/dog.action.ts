import { createAction, props } from "@ngrx/store";

export const loadDogs = createAction('[Dog] Load Dogs');

export const loadDogsSuccess = createAction(
    '[Dog] Load Dogs Success',
    props<{ dogs }>()
);

export const loadDogsFailure = createAction(
    '[Dog] Load Dogs Failure',
    props<{ error: string }>()
);
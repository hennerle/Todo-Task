import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadDogsSuccess,
  loadDogsFailure,
  loadDogs,
} from './dog.action';
import { DogService } from '../../todo/dog.service';
import { of } from 'rxjs';
import { exhaustMap, map, catchError } from 'rxjs/operators';



@Injectable()
export class DogEffects {
    loadDogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDogs), 
      exhaustMap(() =>
        this.dogService.getDogs().pipe( 
          map((dogs) => loadDogsSuccess({ dogs })),
          catchError((error: any) => of(loadDogsFailure({ error }))) 
        )
      )
    )
  );


  constructor(private actions$: Actions, private dogService: DogService) {
  
  }
}
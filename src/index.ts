import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { counterReducer, countState } from './app/store/app.reducer';
import { isDevMode } from '@angular/core';
export interface AppState{
  counter: countState,
}

export const reducers : ActionReducerMap<AppState> = {
  counter: counterReducer
};

export const metaReducers: MetaReducer<AppState>[]= isDevMode()?[]:[]; 
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { counterReducer, countState } from './app/store/app.reducer';
import { isDevMode } from '@angular/core';
import { themeReducer, themeState } from './app/store/themeStore/theme.reducer';
export interface AppState{
  counter: countState,
  theme: themeState
}

export const reducers : ActionReducerMap<AppState> = {
  counter: counterReducer,
  theme: themeReducer
};

export const metaReducers: MetaReducer<AppState>[]= []; 
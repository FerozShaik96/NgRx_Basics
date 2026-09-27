import { createReducer, on, State } from "@ngrx/store";
import { themeActions } from "./theme.actions";

export interface themeState{
  theme: boolean
}
export const themeInsitialState: themeState = { theme: false };

export const themeReducer= createReducer(
  themeInsitialState,
  on(themeActions.themeToggle, (State) => ({ ...State, theme: !State.theme }))
);
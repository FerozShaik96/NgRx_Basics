import { createFeatureSelector, createSelector } from "@ngrx/store";
import { countState } from "./app.reducer";

const selectCounter= createFeatureSelector<countState>('counter');

export const selectCountValue = createSelector(
  selectCounter,
  ({count})=>count
)
export const selectPreviousCountValue= createSelector(
  selectCounter,
  ({previousCount})=>previousCount
);

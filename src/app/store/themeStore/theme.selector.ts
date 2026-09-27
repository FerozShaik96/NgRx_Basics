import { createFeatureSelector, createSelector } from "@ngrx/store";
import { themeState } from "./theme.reducer";

const selecttheme= createFeatureSelector<themeState>('theme');

export const selectThemeValue = createSelector(
  selecttheme,
  ({theme})=>theme
)
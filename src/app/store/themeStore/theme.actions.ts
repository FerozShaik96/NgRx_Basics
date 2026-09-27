import { createActionGroup, emptyProps } from "@ngrx/store";

export const themeActions = createActionGroup({
  source: 'Theme',
  events:{
    'themeToggle':emptyProps()
  }
})
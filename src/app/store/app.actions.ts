import { createActionGroup, emptyProps } from "@ngrx/store";

export const counterActions = createActionGroup({
  source: 'Counter',
  events:{
    'increment':emptyProps(),
    'decrement':emptyProps(),
    'resetCount':emptyProps(),
    'resetPreviousCount':emptyProps(),
    'resetAll':emptyProps()
  }
})
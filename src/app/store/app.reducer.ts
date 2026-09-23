import { createReducer, on } from "@ngrx/store";
import { counterActions } from "./app.actions";


export interface countState{
  count: number,
  previousCount: number
}
export const initialCounterState : countState={
  count:0,
  previousCount:0
};
export const counterReducer= createReducer(initialCounterState, 
  on(counterActions.increment, (state)=>({...state, previousCount:state.count, count: state.count+1, })),
  on(counterActions.decrement, (state)=>({...state, previousCount: state.count, count: state.count-1,})),
  on(counterActions.resetCount, (state)=>({...state, previousCount:state.count, count:0})),
  on(counterActions.resetPreviousCount, (state)=>({...state, previousCount:0})),
  on(counterActions.resetAll, (state)=>({...state, previousCount:0, count:0}))
)
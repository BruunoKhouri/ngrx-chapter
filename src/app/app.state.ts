import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
    counter: number;
}


export const AppinitialState: IAppState = {
    counter: 2
}

export const incrementaCont = createAction('[App] Aumenta contator');
export const decrementaCont = createAction('[App] Reduz contator');

export const appReducer = createReducer(
    AppinitialState,
    on(incrementaCont, (state) => {
        state = {
            ...state,
            counter: state.counter + 1
        };
        return state;
    }),
    on(decrementaCont, (state) => {
        state = {
            ...state,
            counter: state.counter - 1
        };
        return state;
    })
)
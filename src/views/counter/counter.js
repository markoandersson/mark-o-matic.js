//@flow
import { createReducer } from "@reduxjs/toolkit";
import { createPrefixedActionCreator } from "../../shared/action-creator";
import Get from "lodash/get";

const ACTION_PREFIX = 'mark-o-matic.js/counter';
const createAction = createPrefixedActionCreator(ACTION_PREFIX);

type CounterState = {
  count: number
};

type StateWithCounter = {
  counter: CounterState
};
const initialState: CounterState = {
  count: 0
};

export const actions = {
  increaseCounter: createAction('increase'),
  decreaseCounter: createAction('decrease'),
  resetCounter: createAction('reset')
};

export const selectors = {
  count: (state: StateWithCounter) => Get(state, 'counter.count', 0)  
  
};

export default createReducer(initialState, {
  [actions.increaseCounter](state: CounterState) {
    state.count = state.count + 1;
  },
  [actions.decreaseCounter](state: CounterState) {
    state.count = state.count > 0 ? state.count - 1 : 0;
  },
  [actions.resetCounter](state: CounterState) {
    state.count = 0;
  }
});

// @flow
import { createReducer } from '@reduxjs/toolkit';
import { createPrefixedActionCreator } from '../../shared/action-creator';
import { RSAA } from 'redux-api-middleware';
import Get from 'lodash/get';
import { message } from 'antd';

import type { Dispatch } from 'redux';

const createAction = createPrefixedActionCreator('mark-o-matic.js/backend-call');

const fetchDataFromBackendStart = createAction('fetchDataFromBackendStart');
const fetchDataFromBackendSuccess = createAction('fetchDataFromBackendSuccess');
const fetchDataFromBackendFailure = createAction('fetchDataFromBackendFailure');

type BackendCallState = {
  response: string,
  loading: boolean
};

type GlobalState = {
  backend: BackendCallState
};

type BackendRequest = {
  request: string
};

const initialState: BackendCallState = {
  response: '',
  loading: false
};

const fetchDataFromBackend = (request: BackendRequest) => (dispatch: Dispatch<RSAA>) => {
  const url = `http://localhost:5001/api/hello?request=${request.request}`;
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: 'GET',
      types: [fetchDataFromBackendStart.type, fetchDataFromBackendSuccess.type, fetchDataFromBackendFailure.type]
    }
  });
};

export const selectors = {
  isLoading: (state: GlobalState): boolean => Get(state, 'backend.loading', false),
  getResponse: (state: GlobalState) => state.backend.response
};

export const actions = {
  fetchDataFromBackend
};

export default createReducer(initialState, {
  [fetchDataFromBackendStart](state: BackendCallState) {
    state.loading = true;
    state.response = '';
  },
  [fetchDataFromBackendSuccess](state: BackendCallState, action) {
    state.loading = false;
    state.response = Get(action, 'payload.response', '');
    message.success('Fetch succeeded!');
  },
  [fetchDataFromBackendFailure](state: BackendCallState) {
    state.loading = false;
    message.error('Fetch failed');
  }
});

import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

export const renderWithRedux = ui => {
  return render(<Provider store={store}>{ui}</Provider>);
};

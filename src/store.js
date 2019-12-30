import { configureStore } from '@reduxjs/toolkit';
import Counter from './views/counter';

const store = configureStore({
  reducer: {
    counter: Counter
  }
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './logicDateSlice';
import formReducer from './formInputSlice';

const store = configureStore({
  reducer: {
    date: dateReducer,
    form: formReducer,
  },
});

export default store;

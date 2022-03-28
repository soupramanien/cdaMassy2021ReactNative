import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from './slices/questionsSlice';

export default configureStore({
  reducer: {
    questions: questionsReducer,
  },
})

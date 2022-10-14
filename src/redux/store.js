import { configureStore } from '@reduxjs/toolkit'
import foldReducer from '../redux/Reducer'

export const store = configureStore({
  reducer: {
    fold:foldReducer,
  },
})
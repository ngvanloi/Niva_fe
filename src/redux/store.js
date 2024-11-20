import { configureStore } from '@reduxjs/toolkit'
import counterSlide from './slides/counterSlide'

export const store = configureStore({
  reducer: counterSlide,
})
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { foodApi } from './foodApi'
import cartReducer from './slice/cartSlice'

export const store = configureStore({
  reducer: {
      cart:cartReducer,
      [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(foodApi.middleware),
})

// store.dispatch(foodApi())
setupListeners(store.dispatch)
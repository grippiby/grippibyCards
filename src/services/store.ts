import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/services/api.ts'
import { deckReducer } from '@/services/deck-service/deck-slice.ts'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { authReducer } from '@/services/auth-service/auth-slice.ts'
import { appSettingsReducer } from '@/services/app-service/app-slice.ts'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    decksFilter: deckReducer,
    authState: authReducer,
    appSettings: appSettingsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// @ts-ignore
window.store = store

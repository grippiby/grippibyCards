import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
  error: string | null
  success: string | null
}

const initialState: AuthState = {
  error: null,
  success: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setAuthSuccessMessage: (state, action: PayloadAction<string | null>) => {
      state.success = action.payload
    },
  },
})

export const authReducer = slice.reducer

export const { setAuthErrorMessage, setAuthSuccessMessage } = slice.actions

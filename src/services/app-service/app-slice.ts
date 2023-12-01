import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AppSettings = {
  language: string
  activeTab: string
}

const initialState: AppSettings = {
  language: 'en',
  activeTab: '1',
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    },
    setActiveLanguageTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload
    },
  },
})

export const appSettingsReducer = slice.reducer

export const { setAppLanguage, setActiveLanguageTab } = slice.actions

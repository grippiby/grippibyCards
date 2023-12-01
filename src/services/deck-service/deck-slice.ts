import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Sort } from '@/services/deck-service/index.ts'

export type DeckFilterState = {
  authorId: string | undefined
  currentPage: number
  itemsPerPage: number
  activeTab: string
  error: string | null
  deckName: string
  sliderValues: number[]
  sort: Sort | null
}

const initialState: DeckFilterState = {
  authorId: undefined,
  currentPage: 1,
  itemsPerPage: 10,
  activeTab: '2',
  error: null,
  deckName: '',
  sliderValues: [0, 100],
  sort: null,
}

const slice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setAuthorFilter: (state, action: PayloadAction<string | undefined>) => {
      state.authorId = action.payload
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload
    },
    setSliderValues: (state, action: PayloadAction<number[]>) => {
      state.sliderValues = action.payload
    },
    setSort: (state, action: PayloadAction<Sort | null>) => {
      state.sort = action.payload
    },
    setDeckName: (state, action: PayloadAction<string>) => {
      state.deckName = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const deckReducer = slice.reducer

export const {
  setCurrentPage,
  setError,
  setItemsPerPage,
  setAuthorFilter,
  setActiveTab,
  setDeckName,
  setSliderValues,
  setSort,
} = slice.actions

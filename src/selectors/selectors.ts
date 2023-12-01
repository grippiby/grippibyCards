import { RootState } from '@/services/store.ts'
import { DeckFilterState } from '@/services/deck-service/deck-slice.ts'

export const getDeckFilterData = (state: RootState): DeckFilterState => state.decksFilter
export const getErrorMessage = (state: RootState): string | null => state.authState.error
export const getSuccessMessage = (state: RootState): string | null => state.authState.success
export const getCurrentLanguage = (state: RootState): string => state.appSettings.language
export const getLanguageTab = (state: RootState): string => state.appSettings.activeTab

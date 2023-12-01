import { baseApi } from '../api.ts'
import {
  CreateDeckArgs,
  Deck,
  DeckResponseData,
  GetDeckQueryParams,
  UpdateDeckArgs,
  UpdateDeckResponseData,
} from '@/services/deck-service'

export const DecksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DeckResponseData, GetDeckQueryParams | void>({
        query: params => {
          return {
            url: `v1/decks`,
            params: params ?? {},
          }
        },
        providesTags: ['Decks'],
      }),
      getDeck: builder.query<Deck, { id: string | undefined }>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
            params: id ?? {},
          }
        },
        providesTags: ['Deck'],
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        query: data => {
          const formData = new FormData()

          formData.append('name', data.name)
          formData.append('isPrivate', data.isPrivate.toString())
          if (data.cover) {
            formData.append('cover', data.cover)
          }

          return {
            url: `v1/decks`,
            method: 'POST',
            formData: true,
            body: formData,
          }
        },
        invalidatesTags: ['Decks'],
      }),
      deleteDeck: builder.mutation<Deck, { id: string | undefined }>({
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Decks', 'Deck'],
      }),
      updateDeck: builder.mutation<UpdateDeckResponseData, UpdateDeckArgs>({
        query: ({ id, ...data }) => {
          const formData = new FormData()

          formData.append('name', data.name)
          formData.append('isPrivate', data.isPrivate.toString())
          if (data.cover) {
            formData.append('cover', data.cover)
          }

          return {
            url: `v1/decks/${id}`,
            method: 'PATCH',
            body: formData,
          }
        },
        invalidatesTags: ['Decks', 'Deck'],
      }),
    }
  },
})

export const {
  useGetDecksQuery,
  useGetDeckQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useUpdateDeckMutation,
} = DecksService

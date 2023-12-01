import { baseApi } from '@/services/api.ts'
import {
  CardsResponseData,
  CreateCardArgs,
  GetCardsQueryParams,
  UpdateCardArgs,
  UpdateCardResponseData,
} from '@/services/card-service'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponseData, GetCardsQueryParams>({
      query: ({ id, ...data }) => ({
        url: `v1/decks/${id}/cards`,
        params: data ?? {},
      }),
      providesTags: ['Cards'],
    }),
    createCard: builder.mutation<any, CreateCardArgs>({
      query: ({ id, ...data }) => {
        const formData = new FormData()

        formData.append('question', data.question)
        formData.append('answer', data.answer)
        if (data.questionImg) {
          formData.append('questionImg', data.questionImg)
        }
        if (data.answerImg) {
          formData.append('answerImg', data.answerImg)
        }

        return {
          url: `v1/decks/${id}/cards`,
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['Cards'],
    }),
    editCard: builder.mutation<UpdateCardResponseData, UpdateCardArgs>({
      query: ({ id, ...data }) => {
        const formData = new FormData()

        formData.append('question', data.question)
        formData.append('answer', data.answer)
        if (data.questionImg) {
          formData.append('questionImg', data.questionImg)
        }
        if (data.answerImg) {
          formData.append('answerImg', data.answerImg)
        }

        return {
          url: `v1/cards/${id}`,
          method: 'PATCH',
          body: formData,
        }
      },
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<void, { id: string | undefined }>({
      query: ({ id }) => ({
        url: `v1/cards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useEditCardMutation,
  useDeleteCardMutation,
  useCreateCardMutation,
} = cardsService

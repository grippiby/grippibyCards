import { baseApi } from '@/services/api.ts'
import { CardResponse, GetRandomCardArgs, UpdateGradeArgs } from '@/services/learn-service'

export const learnService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getRandomCard: builder.query<CardResponse, GetRandomCardArgs>({
      query: params => `v1/decks/${params.deckId}/learn`,
      providesTags: ['RandomCard'],
    }),
    saveCardGrade: builder.mutation<void, UpdateGradeArgs>({
      query: params => {
        return {
          url: `v1/decks/${params.deckId}/learn`,
          method: 'POST',
          body: { cardId: params.cardId, grade: params.grade },
        }
      },
      async onQueryStarted({ deckId }, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled

          dispatch(
            learnService.util.updateQueryData('getRandomCard', { deckId }, () => {
              return response.data
            })
          )
        } catch (e) {
          console.log(e)
        }
      },
    }),
  }),
})

export const { useGetRandomCardQuery, useSaveCardGradeMutation } = learnService

import { baseApi } from '@/services/api.ts'
import {
  ErrorData1,
  ErrorData2,
  ErrorState,
  GetMeQueryResponseData,
  LoginArgs,
  LogInResponseData,
  RecoverPasswordArgs,
  SignUpArgs,
  SignUpResponseData,
  UpdateProfileArgs,
  UpdateProfileResponseData,
} from '@/services/auth-service'
import { ResetPasswordArgs } from '@/services/deck-service'
import { setAuthErrorMessage } from '@/services/auth-service/auth-slice.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<GetMeQueryResponseData, void>({
        query: () => {
          return {
            url: `/v1/auth/me`,
          }
        },
        providesTags: ['Me'],
      }),
      logIn: builder.mutation<LogInResponseData, LoginArgs>({
        query: body => {
          return {
            url: `/v1/auth/login`,
            method: 'POST',
            body,
          }
        },
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled
          } catch (e) {
            const error = e as ErrorState<ErrorData1>
            const errorMessage = error.error.data.message

            if (errorMessage === 'Invalid credentials') {
              dispatch(setAuthErrorMessage('User is not found'))
            } else {
              dispatch(setAuthErrorMessage(errorMessage))
            }
          }
        },
        invalidatesTags: ['Me'],
      }),
      logOut: builder.mutation<void, void>({
        query: () => {
          return {
            url: `/v1/auth/logout`,
            method: 'POST',
          }
        },
        invalidatesTags: ['Me'],
      }),
      signUp: builder.mutation<SignUpResponseData, SignUpArgs>({
        query: body => {
          return {
            url: `/v1/auth/sign-up`,
            method: 'POST',
            body,
          }
        },
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled
          } catch (e) {
            const error = e as ErrorState<ErrorData2>

            dispatch(setAuthErrorMessage(error.error.data.errorMessages[0]))
          }
        },
      }),
      recoverPassword: builder.mutation<void, RecoverPasswordArgs>({
        query: body => {
          return {
            url: `/v1/auth/recover-password`,
            method: 'POST',
            body,
          }
        },
      }),
      resetPassword: builder.mutation<void, ResetPasswordArgs>({
        query: ({ token, ...args }) => {
          return {
            url: `/v1/auth/reset-password/${token}`,
            method: 'POST',
            body: { ...args },
          }
        },
      }),
      updateProfile: builder.mutation<UpdateProfileResponseData, UpdateProfileArgs>({
        query: data => {
          const formData = new FormData()

          formData.append('name', data.name)
          formData.append('email', data.email)
          if (data.avatar) {
            formData.append('avatar', data.avatar)
          }

          return {
            url: `/v1/auth/me`,
            method: 'PATCH',
            body: formData,
          }
        },
        invalidatesTags: ['Me'],
      }),
    }
  },
})

export const {
  useLogInMutation,
  useMeQuery,
  useLogOutMutation,
  useSignUpMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
} = authService

// onQueryStarted: async (_, { getState, dispatch, queryFulfilled }) => {
//   try {
//     await queryFulfilled
//     dispatch(authService.util.updateQueryData('me', undefined, () => null))
//   } catch (error) {}
// },

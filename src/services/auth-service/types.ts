export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type GetMeQueryResponseData = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type SignUpArgs = {
  html?: string
  name?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}

export type SignUpResponseData = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type RecoverPasswordArgs = {
  html?: string
  email: string
  subject?: string
}

export type LogInResponseData = {
  accessToken: string
}

export type UpdateProfileResponseData = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type ErrorData1 = {
  statusCode: number
  message: string
  timestamp: string
  path: string
}

export type ErrorData2 = {
  errorMessages: string[]
}

export type ErrorState<T> = {
  error: {
    data: T
    status: number
  }
  isUnhandledError: boolean
  meta: any
}

export type UpdateProfileArgs = { email: string; name: string; avatar?: File }

export type Card = {
  id: string
  question: string
  answer: string
  deckId: string
  questionImg?: any
  answerImg?: any
  questionVideo?: any
  answerVideo?: any
  created: string
  updated: string
  shots: number
  grade: number
  userId: string
}

export type CardsResponseData = {
  items: [Card]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
}

type Field = 'question' | 'answer' | 'updated' | 'grade'

type Direction = 'asc' | 'desc'

export type GetCardsQueryParams = {
  id: string
  question?: string
  answer?: string
  orderBy?: `${Field}-${Direction}` | null
  currentPage?: number
  itemsPerPage?: number
}

export type CreateCardArgs = {
  id: string
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  questionVideo?: string
  answerVideo?: string
}

export type UpdateCardArgs = Pick<GetCardsQueryParams, 'id'> & Omit<CreateCardArgs, 'deckId'>

export type UpdateCardResponseData = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  rating: number
  created: string
  updated: string
}

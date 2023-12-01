export type CardResponse = {
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

export type GetRandomCardArgs = {
  deckId: string | undefined
  previousCardId?: string
}

export type UpdateGradeArgs = {
  deckId: string | undefined
  cardId: string | undefined
  grade: number | undefined
}

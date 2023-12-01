import { Sort } from '@/services/deck-service'

export const sortFn = (sort: Sort | null) => {
  if (!sort) return null

  return `${sort.key}-${sort.direction}`
}

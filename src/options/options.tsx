import { SelectOptions } from '@/features/cards-pack/types'
import { TabType } from '@/components/ui/tabSwitcher'
import { Column } from '@/features/deck-pack/types'
import { RadioGroupOptions } from '@/features/card-learn/types'

export const paginationSelectOptions: SelectOptions = ['10', '20', '30', '50', '100']

export const cardSelectOptions: SelectOptions = ['text', 'picture']

export const languageTabs: TabType[] = [
  {
    id: '1',
    title: 'EN 🇺🇸',
  },
  {
    id: '2',
    title: 'RU 🇷🇺',
  },
]

export const decksTabsEN: TabType[] = [
  {
    id: '1',
    title: 'My Decks',
  },
  {
    id: '2',
    title: 'All Decks',
  },
]

export const decksTabsRU: TabType[] = [
  {
    id: '1',
    title: 'Мои',
  },
  {
    id: '2',
    title: 'Все',
  },
]

export const deckTableColumnsEN: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'created',
    title: 'Created by',
  },
]

export const deckTableColumnsRU: Column[] = [
  {
    key: 'name',
    title: 'Название',
  },
  {
    key: 'cardsCount',
    title: 'Карточки',
  },
  {
    key: 'updated',
    title: 'Было обновлено',
  },
  {
    key: 'created',
    title: 'Автор',
  },
]

export const cardTableColumnsEN: Column[] = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]

export const cardTableColumnsRU: Column[] = [
  {
    key: 'question',
    title: 'Вопрос',
  },
  {
    key: 'answer',
    title: 'Ответ',
  },
  {
    key: 'updated',
    title: 'Было обновлено',
  },
  {
    key: 'grade',
    title: 'Рейтинг',
  },
]

export const ratingEN: RadioGroupOptions[] = [
  {
    label: 'Did not know',
    value: '1',
  },
  {
    label: 'Forgot',
    value: '2',
  },
  {
    label: 'A lot of thoughts',
    value: '3',
  },
  {
    label: 'Confused',
    value: '4',
  },
  {
    label: 'Knew the answer',
    value: '5',
  },
]

export const ratingRU: RadioGroupOptions[] = [
  {
    label: 'Не знал(а)',
    value: '1',
  },
  {
    label: 'Забыл(а)',
    value: '2',
  },
  {
    label: 'Много мыслей',
    value: '3',
  },
  {
    label: 'Смущен(а)',
    value: '4',
  },
  {
    label: 'Знал(а) ответ',
    value: '5',
  },
]

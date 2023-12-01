import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'
import { AddNewCardModal } from '@/components/modals/add-new-card'
import { CardsModals, NewCardFields, SelectOptions } from '@/features/cards-pack/types'
import { PreviousPage } from '@/assets/icons/components/PreviousPage.tsx'
import s from './EmptyCardsPack.module.scss'
import s1 from '@/features/cards-pack/CardsPack.module.scss'

type Props = {
  openModal: CardsModals | null
  createDeck: (data: NewCardFields) => void
  deckId: string
  deckName: string
  setOpenModal: (value: CardsModals | null) => void
  className?: string
  currentUserId?: string
  currentDeckAuthor?: string
}

export const EmptyCardsPack = (props: Props) => {
  const {
    deckName,
    setOpenModal,
    className,
    openModal,
    createDeck,
    currentUserId,
    currentDeckAuthor,
  } = props

  const cardSelectOptions: SelectOptions = ['text', 'picture']

  const contentClassName = clsx(s.contentWrapper, className)

  const isMyDeck = currentUserId === currentDeckAuthor

  const descriptionText = isMyDeck
    ? 'Your deck is empty. Click add new card to fill this deck.'
    : 'This deck is empty. User has not added any card to this deck yet.'

  return (
    <div className={contentClassName}>
      <Button as={Link} to={'/'} variant={'link'} className={s1.previousPage}>
        <PreviousPage className={s1.arrow} />
        <Typography variant={'body2'}>Back to Deck List</Typography>
      </Button>
      <Typography className={s.deckName} variant={'large'}>
        {deckName}
      </Typography>
      <div className={s.buttonAndDescription}>
        <Typography variant={'body1'} className={s.description}>
          {descriptionText}
        </Typography>
        {isMyDeck && (
          <Button className={s.button} onClick={() => setOpenModal(CardsModals.CREATE)}>
            <Typography variant={'subtitle2'}>Add New Card</Typography>
          </Button>
        )}
      </div>
      <AddNewCardModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onSubmit={createDeck}
        selectOptions={cardSelectOptions}
      />
    </div>
  )
}

import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { useI18N } from '@/hooks'
import { DeckModals } from '@/features/deck-pack/types'
import s from './DeleteDeckModal.module.scss'

type Props = {
  deckName: string | undefined
  openModal: DeckModals | null
  setOpenModal: (value: DeckModals | null) => void
  deleteCallBack: () => void
}
export const DeleteDeckModal = ({ openModal, setOpenModal, deleteCallBack, deckName }: Props) => {
  const { t } = useI18N()

  const cancelModalHandler = () => {
    setOpenModal(null)
  }

  const onDelete = () => {
    deleteCallBack()
    setOpenModal(null)
  }

  return (
    <Modal
      className={s.modal}
      open={openModal === DeckModals.DELETE}
      closeCallBack={cancelModalHandler}
    >
      <Typography className={s.title} variant={'h2'}>
        {t('deleteDeck')}
      </Typography>
      <Typography variant={'body1'}>
        {t('wantRemove')} <Typography variant={'subtitle1'}>{deckName}</Typography>?
      </Typography>
      <Typography className={s.subtitle}>{t('allCardsWillDelete')}</Typography>
      <div className={s.buttonArea}>
        <Button onClick={cancelModalHandler} variant={'secondary'}>
          <Typography variant={'subtitle2'}>{t('cancel')}</Typography>
        </Button>
        <Button onClick={onDelete}>
          <Typography variant={'subtitle2'}>{t('deleteDeck')}</Typography>
        </Button>
      </div>
    </Modal>
  )
}

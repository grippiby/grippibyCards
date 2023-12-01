import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { useI18N } from '@/hooks'
import { CardsModals } from '@/features/cards-pack/types'
import s1 from '@/components/modals/delete-deck/DeleteDeckModal.module.scss'
import s from './DeleteCardModal.module.scss'

type Props = {
  cardName: string | undefined
  openModal: CardsModals | null
  setOpenModal: (value: CardsModals | null) => void
  deleteCallBack: () => void
  cardQuestion?: string
}
export const DeleteCardModal = ({ openModal, setOpenModal, deleteCallBack, cardName }: Props) => {
  const { t } = useI18N()

  const cancelModalHandler = () => {
    setOpenModal(null)
  }

  const deleteCardHandler = () => {
    deleteCallBack()
    setOpenModal(null)
  }

  return (
    <Modal
      className={s1.modal}
      open={openModal === CardsModals.DELETE}
      closeCallBack={cancelModalHandler}
    >
      <Typography className={s1.title} variant={'h2'}>
        {t('deleteCard')}
      </Typography>
      <Typography className={s.subtitle} variant={'body1'}>
        {t('wantRemove')} <Typography variant={'subtitle1'}>{cardName}</Typography>
      </Typography>
      <div className={s1.buttonArea}>
        <Button onClick={cancelModalHandler}>
          <Typography variant={'subtitle2'}>{t('cancel')}</Typography>
        </Button>
        <Button onClick={deleteCardHandler}>
          <Typography variant={'subtitle2'}>{t('deleteCard')}</Typography>
        </Button>
      </div>
    </Modal>
  )
}

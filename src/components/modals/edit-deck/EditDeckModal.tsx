import { ControlledInput } from '@/components/ui/controlled/controlledInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newDeckNameSchema } from '@/schemes'
import { ControlledCheckbox } from '@/components/ui/controlled/controlledCheckbox'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { Modal } from '@/components/ui/modal'
import { useEffect } from 'react'
import { ControlledFileInput } from '@/components/ui/controlled/controlledFileInput'
import { useI18N } from '@/hooks'
import { DeckModals, NewDeckFields } from '@/features/deck-pack/types'
import { Deck } from '@/services/deck-service'
import s from './EditDeckModal.module.scss'

type Props = {
  openModal: DeckModals | null
  setOpenModal: (value: DeckModals | null) => void
  onSubmit?: (values: NewDeckFields) => void
  activeItem?: Deck | undefined
}

export const EditDeckModal = ({ onSubmit, openModal, setOpenModal, activeItem }: Props) => {
  const { t } = useI18N()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewDeckFields>({
    resolver: zodResolver(newDeckNameSchema),
    mode: 'onSubmit',
    defaultValues: { name: '', isPrivate: false },
  })

  useEffect(() => {
    resetFormFields()
  }, [activeItem])

  const onSubmitHandler = handleSubmit(data => {
    onSubmit?.(data)
    setOpenModal(null)
  })

  const cancelModalHandler = () => {
    setOpenModal(null)
    resetFormFields()
  }

  const resetFormFields = () => {
    if (activeItem) {
      const { name, isPrivate } = activeItem

      reset({ name, isPrivate })
    }
  }

  return (
    <Modal
      className={s.modal}
      open={openModal === DeckModals.UPDATE}
      closeCallBack={cancelModalHandler}
    >
      <Typography className={s.title} variant={'h2'}>
        {t('editDeck')}
      </Typography>
      <form onSubmit={onSubmitHandler} className={s.form}>
        <ControlledFileInput
          className={s.fileInput}
          control={control}
          name={'cover'}
          id={'cover'}
          buttonText={t('deckCover')}
        />
        <ControlledInput
          aria-label={'enter new deck name'}
          control={control}
          name={'name'}
          label={t('nameDeck')}
          errorMessage={errors.name?.message}
          autoFocus
        />
        <ControlledCheckbox
          className={s.checkbox}
          label={t('privateDeck')}
          control={control}
          name={'isPrivate'}
        />
        <div className={s.buttonArea}>
          <Button onClick={cancelModalHandler} type={'button'} variant={'secondary'}>
            <Typography variant={'subtitle2'}>{t('cancel')}</Typography>
          </Button>
          <Button type={'submit'}>
            <Typography variant={'subtitle2'}>{t('saveChanges')}</Typography>
          </Button>
        </div>
      </form>
    </Modal>
  )
}

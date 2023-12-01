import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { ControlledInput } from '@/components/ui/controlled/controlledInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { addNewCardSchema } from '@/schemes'
import { useEffect, useState } from 'react'
import { Selector } from '@/components/ui/select'
import { ControlledFileInput } from '@/components/ui/controlled/controlledFileInput'
import { useI18N } from '@/hooks'
import { Card } from '@/services/card-service'
import { CardsModals, NewCardFields } from '@/features/cards-pack/types'
import s from './EditCardModal.module.scss'
import s1 from '@/components/modals/edit-deck/EditDeckModal.module.scss'

type Props = {
  openModal: CardsModals | null
  setOpenModal: (value: CardsModals | null) => void
  onSubmit?: (data: NewCardFields) => void
  activeCard: Card | undefined
  selectOptions?: string[]
}

export const EditCardModal = (props: Props) => {
  const { openModal, setOpenModal, onSubmit, activeCard, selectOptions } = props

  const [cardType, setCardType] = useState('text')
  const { t } = useI18N()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewCardFields>({
    resolver: zodResolver(addNewCardSchema),
    mode: 'onSubmit',

    defaultValues: {
      question: '',
      answer: '',
    },
  })

  useEffect(() => {
    resetFormFields()
  }, [activeCard])

  const onSubmitHandler = handleSubmit(data => {
    onSubmit?.(data)
    setOpenModal(null)
  })

  const resetFormFields = () => {
    if (activeCard) {
      const { question, answer } = activeCard

      reset({ question, answer })
    }
  }

  const closeModalHandler = () => {
    setOpenModal(null)
    resetFormFields()
    setCardType('text')
  }

  return (
    <Modal
      className={s1.modal}
      open={openModal === CardsModals.UPDATE}
      closeCallBack={closeModalHandler}
    >
      <Typography className={s1.title} variant={'h2'}>
        {t('editCard')}
      </Typography>
      <form className={s1.form} onSubmit={onSubmitHandler}>
        <Selector
          className={s.selector}
          value={cardType}
          setSelectedValue={setCardType}
          label={t('questionFormat')}
          selectData={selectOptions}
        />
        {cardType === 'picture' && (
          <ControlledFileInput
            className={s.fileInput}
            control={control}
            name={'questionImg'}
            id={'questionImg'}
            buttonText={t('questionCover')}
          />
        )}
        <ControlledInput
          className={s.questionInput}
          name={'question'}
          label={t('question')}
          control={control}
          errorMessage={errors.question?.message}
          autoFocus
        />
        {cardType === 'picture' && (
          <ControlledFileInput
            className={s.fileInput}
            control={control}
            name={'answerImg'}
            id={'answerImg'}
            buttonText={t('answerCover')}
          />
        )}
        <ControlledInput
          className={s.answerInput}
          name={'answer'}
          label={t('answer')}
          control={control}
          errorMessage={errors.answer?.message}
        />
        <div className={s1.buttonArea}>
          <Button variant={'secondary'} type={'button'} onClick={closeModalHandler}>
            <Typography variant={'subtitle2'}>{t('cancel')}</Typography>
          </Button>
          <Button type={'submit'} variant={'primary'}>
            <Typography variant={'subtitle2'}>{t('saveChanges')}</Typography>
          </Button>
        </div>
      </form>
    </Modal>
  )
}

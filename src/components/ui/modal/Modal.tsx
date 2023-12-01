import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import s from './Modal.module.scss'

type AdditionalModalType = {
  closeCallBack: (value: any) => void
}

export type ModalProps = ComponentPropsWithoutRef<typeof Dialog.Root> &
  ComponentPropsWithoutRef<typeof Dialog.Content> &
  AdditionalModalType

export const Modal = forwardRef<ElementRef<typeof Dialog.Content>, ModalProps>((props, ref) => {
  const { children, className, title, closeCallBack, ...rest } = props

  const contentClassName = clsx(s.content, className)

  const closeModalHandler = () => {
    closeCallBack(null)
  }

  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content
          onOpenAutoFocus={e => e.preventDefault()}
          ref={ref}
          className={contentClassName}
          {...rest}
        >
          {children}
          <Dialog.Close className={s.closeBtn} onClick={closeModalHandler} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
})

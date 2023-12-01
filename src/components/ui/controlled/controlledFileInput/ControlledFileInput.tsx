import { Label } from '@radix-ui/react-label'
import { Icon } from '@/components/ui/icon'
import coverIcon from '@/assets/icons/cover_icon.svg'
import { Typography } from '@/components/ui/typography'
import { Input, InputProps } from '@/components/ui/input'
import { ChangeEvent, ReactNode, useState } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { clsx } from 'clsx'
import s from './ControlledFileInput.module.scss'
import s1 from '@/components/ui/button/Button.module.scss'

type Props<T extends FieldValues> = {
  imagePreviewClassName?: string
  triggerClassName?: string
  buttonText?: string
  trigger?: ReactNode
} & UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledFileInput = <T extends FieldValues>(props: Props<T>) => {
  const {
    control,
    name,
    id,
    buttonText,
    className,
    imagePreviewClassName,
    trigger,
    triggerClassName,
    ...rest
  } = props

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const {
    field: { onChange },
  } = useController({
    name,
    control,
  })

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      const imageUrl = URL.createObjectURL(file)

      setSelectedImage(imageUrl)

      onChange(file)
    }
  }

  const coverButtonStyle = clsx(s1.button, s1.secondary, s1.fullWidth)
  const imageClassName = clsx(s.imageDefault, imagePreviewClassName)
  const fileInputClassName = clsx(s.fileInputWrapper, className)

  return (
    <div className={fileInputClassName}>
      {selectedImage && (
        <Icon className={imageClassName} srcIcon={selectedImage} alt={'image preview'} />
      )}
      <Input
        className={s.hiddenFileInput}
        hidden
        withoutError
        type={'file'}
        onChange={uploadHandler}
        name={name}
        id={id}
        {...rest}
      />
      {!trigger ? (
        <Label htmlFor={id} className={coverButtonStyle}>
          <Icon width={20} srcIcon={coverIcon} />
          <Typography variant={'subtitle2'}>{buttonText}</Typography>
        </Label>
      ) : (
        <Label htmlFor={id} className={triggerClassName}>
          {trigger}
        </Label>
      )}
    </div>
  )
}

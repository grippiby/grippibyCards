import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'onCheckedChange' | 'checked' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, defaultValue, ...rest } = props

  const {
    field: { onChange, value },
  } = useController({ name, control, defaultValue })

  return <Checkbox {...rest} onCheckedChange={onChange} checked={value} id={name} name={name} />
}

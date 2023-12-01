import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Selector, SelectPropsType } from '@/components/ui/select'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectPropsType, 'setSelectedValue' | 'value'>

export const ControlledSelector = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, defaultValue, ...rest } = props

  const {
    field: { onChange, value },
  } = useController({ name, control, defaultValue })

  return <Selector {...rest} setSelectedValue={onChange} value={value} name={name} />
}

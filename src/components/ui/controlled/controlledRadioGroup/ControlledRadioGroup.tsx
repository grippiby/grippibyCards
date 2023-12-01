import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onValueChange' | 'value' | 'id'>
export const ControlledRadioGroup = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, defaultValue, options, ...rest } = props

  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <RadioGroup
      {...rest}
      options={options}
      onValueChange={onChange}
      value={value}
      id={name}
      name={name}
    />
  )
}

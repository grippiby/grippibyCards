import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Input, InputProps } from '@/components/ui/input'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  name,
  control,
  type,
  ...inputProps
}: ControlledInputProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <Input type={type} value={value} onChange={onChange} name={name} {...inputProps} />
}

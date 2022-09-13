import { FieldErrors, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'
//
import BaseInput, { BaseInputProps } from '~/components/base/BaseInput'
import { get } from 'lodash'

type FormInputProps<TypeFormValues> = {
  source: Path<TypeFormValues>
  register: UseFormRegister<TypeFormValues>
  errors: FieldErrors
  rules?: RegisterOptions
} & BaseInputProps

const FormInput = <TypeFormValues,>({ source, register, errors, rules, ...props }: FormInputProps<TypeFormValues>) => {
  const error = get(errors, source)
  const errorMessage = error?.message

  return (
    <div>
      <BaseInput error={!!error} {...props} {...(register && register(source, rules))} />
      {errorMessage && <p className="mt-2 text-left text-xs text-red-500">{errorMessage as string}</p>}
    </div>
  )
}

export default FormInput

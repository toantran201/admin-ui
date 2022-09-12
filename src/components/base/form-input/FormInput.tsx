import React, { HTMLInputTypeAttribute } from 'react'
import { Input } from '@material-tailwind/react'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FieldErrors } from 'react-hook-form/dist/types/errors'
import { colors } from '@material-tailwind/react/types/generic'

type FormInputProps = {
  label?: string
  prop: string
  type?: HTMLInputTypeAttribute
  register: UseFormRegister<any>
  errors: FieldErrors
  color?: colors
}

const FormInput = ({ label = '', prop, type = 'text', register, errors, color = 'blue-gray' }: FormInputProps) => {
  const error = errors?.[prop]
  const errMsg = error?.message

  return (
    <>
      <Input error={!!error} color={color} label={label} type={type} {...register(prop)} />
      {errMsg && <p className="text-xs text-left text-red-500 mt-2">{errMsg as string}</p>}
    </>
  )
}

export default FormInput

import { forwardRef, HTMLInputTypeAttribute } from 'react'
import { Input } from '@material-tailwind/react'
import { colors } from '@material-tailwind/react/types/generic'

export type BaseInputProps = {
  id?: string
  name?: string
  label?: string
  type?: HTMLInputTypeAttribute
  color?: colors
  className?: string
  placeholder?: string
  error?: boolean
  [k: string]: any
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ id, name, label, type, color = 'blue-gray', className, placeholder, error, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        id={id}
        type={type}
        color={color}
        name={name}
        label={label}
        placeholder={placeholder}
        aria-label={label}
        error={error}
        className={`${className || ''}`}
        autoComplete="off"
        {...props}
      />
    )
  }
)

BaseInput.displayName = 'Input'

export default BaseInput

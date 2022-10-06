import { ComponentProps, forwardRef, HTMLInputTypeAttribute } from 'react'
import { IconType } from 'react-icons'
//
import { Color, Size } from '~/types'

//
export interface BaseInputProps extends Omit<ComponentProps<'input'>, 'size'> {
  id?: string
  name?: string
  label?: string
  type?: HTMLInputTypeAttribute
  color?: Color
  size?: Size
  className?: string
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  error?: boolean
  icon?: IconType
  fullWidth?: boolean

  [k: string]: any
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      id,
      name,
      label,
      type,
      color = 'primary',
      className,
      placeholder,
      readonly,
      disabled,
      error,
      size = '',
      icon,
      fullWidth,
      ...props
    },
    ref
  ) => {
    const Icon = icon ? icon : null

    //Styles
    const colorClass = `input-${color}`
    const sizeClass = size ? `input-${size}` : ''
    const hasIconClass = icon ? 'has-icon' : ''

    return (
      <div
        className={`input relative text-left ${sizeClass} ${colorClass} ${hasIconClass} ${fullWidth ? 'w-full' : ''}`}
        data-input="yellow"
      >
        <label htmlFor={id} className="text-sm text-input-label">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          aria-label={label}
          className={`
            ${icon ? 'pl-10' : ''}
            ${fullWidth ? 'w-full' : ''}
            ${className || ''} 
            ${error ? 'input-error' : ''}
          `}
          autoComplete="off"
          readOnly={readonly}
          disabled={disabled}
          {...props}
        />
        {Icon && <Icon className="icon icon-left" />}
      </div>
    )
  }
)

BaseInput.displayName = 'Input'

export default BaseInput

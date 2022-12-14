import { ComponentProps, forwardRef, useId } from 'react'
import { BsCheckLg } from 'react-icons/all'
//
import { Color, Variant } from '~/types'

interface BaseCheckboxProps extends ComponentProps<'input'> {
  label: string
  color?: Color
  variant?: Variant
  soft?: boolean
}

const BaseCheckbox = forwardRef<HTMLInputElement, BaseCheckboxProps>(
  ({ label, color = 'primary', variant = 'filled', soft, ...props }: BaseCheckboxProps, ref) => {
    // Styles
    let colorClass = `checkbox-${color}`
    if (soft) colorClass += ' soft'
    if (variant === 'outlined') colorClass += ' outlined'

    // Id
    const id = props.id ? props.id : useId()

    return (
      <div className={`checkbox-group ${colorClass}`}>
        <input ref={ref} type="checkbox" id={id} {...props} />
        <label htmlFor={id}>
          <span className="check-block">
            <BsCheckLg className="check h-3.5 w-3.5" />
          </span>
          <span className="text-input-label">{label}</span>
        </label>
      </div>
    )
  }
)

BaseCheckbox.displayName = 'BaseCheckbox'

export default BaseCheckbox

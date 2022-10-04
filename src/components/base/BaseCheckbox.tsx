import { ComponentProps, forwardRef } from 'react'
import { BsCheckLg } from 'react-icons/all'
//
import { Color, Variant } from '~/types'

interface BaseCheckboxProps extends ComponentProps<'input'> {
  label: string
  color?: Color
  variant?: Variant
  ripple?: boolean
  soft?: boolean
}

const BaseCheckbox = forwardRef(
  ({ label, color = 'primary', variant = 'filled', ripple, soft }: BaseCheckboxProps, ref) => {
    //Styles
    let colorClass = `checkbox-${color}`
    if (soft) colorClass += ' soft'
    if (variant === 'outlined') colorClass += ' outlined'

    return (
      <div className={`checkbox-group ${colorClass}`}>
        <input type="checkbox" id="test" />
        <label htmlFor="test">
          <span className="check-block">
            <BsCheckLg className="check h-3.5 w-3.5" />
          </span>
          <span>{label}</span>
        </label>
      </div>
    )
  }
)

BaseCheckbox.displayName = 'BaseCheckbox'

export default BaseCheckbox

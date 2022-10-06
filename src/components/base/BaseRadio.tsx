import { ComponentProps, forwardRef, useId } from 'react'
import { GoPrimitiveDot } from 'react-icons/all'
//
import { Color, Variant } from '~/types'

interface BaseRadioProps extends ComponentProps<'input'> {
  label: string
  color?: Color
  variant?: Variant
  soft?: boolean
}

const BaseRadio = forwardRef<HTMLInputElement, BaseRadioProps>(
  ({ label, color = 'primary', variant = 'filled', soft, ...props }: BaseRadioProps, ref) => {
    // Styles
    let colorClass = `checkbox-${color}`
    if (soft) colorClass += ' soft'
    if (variant === 'outlined') colorClass += ' outlined'

    // Id
    const id = props.id ? props.id : useId()

    return (
      <div className={`checkbox-group ${colorClass} radio`}>
        <input ref={ref} type="checkbox" id={id} {...props} />
        <label htmlFor={id}>
          <span className="check-block">
            <GoPrimitiveDot className="check h-5 w-5" />
          </span>
          <span className="text-input-label">{label}</span>
        </label>
      </div>
    )
  }
)

BaseRadio.displayName = 'BaseRadio'

export default BaseRadio

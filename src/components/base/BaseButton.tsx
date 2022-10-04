import { ComponentProps, forwardRef, ReactNode } from 'react'
import Ripple from 'material-ripple-effects'
//
import { Color, Size, Variant } from '~/types'

interface BaseButtonProps extends ComponentProps<'button'> {
  size?: Size
  color?: Color
  variant?: Variant
  ripple?: boolean
  fullWidth?: boolean
  soft?: boolean
  className?: string
  children: ReactNode
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    { children, size, color = 'primary', variant = 'filled', fullWidth, soft, className = '', ripple = true, ...props },
    ref
  ) => {
    //Styles
    let colorClass = `button-${color}`
    if (soft) colorClass += ' soft'
    if (variant === 'outlined') colorClass += ' outlined'
    const sizeClass = size ? `button-${size}` : ''

    // Ripple effect
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const rippleEffect = ripple && new Ripple()

    return (
      <button
        {...props}
        ref={ref}
        className={`button ${fullWidth ? 'w-full' : ''} ${colorClass} ${sizeClass} ${className || ''}`}
        onMouseDown={(e) => {
          const onMouseDown = props?.onMouseDown

          if (ripple) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            rippleEffect.create(e, soft || variant === 'outlined' ? 'dark' : 'light')
          }

          return typeof onMouseDown === 'function' && onMouseDown(e)
        }}
      >
        {children}
      </button>
    )
  }
)

BaseButton.displayName = 'BaseButton'

export default BaseButton

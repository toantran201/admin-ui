import { RefObject, useEffect } from 'react'

export const useOutSideClick = (
  ref: RefObject<HTMLElement | undefined>,
  fnHandler: () => void,
  visibleState: boolean
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!visibleState) return
      if (ref && (!ref.current || ref.current.contains(event.target as Node))) {
        return
      }
      fnHandler()
    }

    const keyDownListener = (event: KeyboardEvent) => {
      if (!visibleState) return
      if (event.key === 'Escape') {
        fnHandler()
      }
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    document.addEventListener('keydown', keyDownListener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
      document.removeEventListener('keydown', keyDownListener)
    }
  }, [ref, fnHandler, visibleState])
}

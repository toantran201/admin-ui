import { useState } from 'react'
import { BsFullscreen, BsFullscreenExit } from 'react-icons/all'

const ScreenSizePopover = () => {
  //0. Init
  const [isFullScreen, setIsFullScreen] = useState(false)

  //
  const toggleFullScreen = async () => {
    const element = document.documentElement
    if (isFullScreen && document.exitFullscreen) {
      await document.exitFullscreen()
      setIsFullScreen(false)
      return
    }
    if (element.requestFullscreen) {
      await element.requestFullscreen()
      setIsFullScreen(true)
    }
  }

  return (
    <button className="p-3.5 group hover:bg-purple-100 rounded-full outline-none" onClick={toggleFullScreen}>
      {isFullScreen ? (
        <BsFullscreenExit className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
      ) : (
        <BsFullscreen className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
      )}
    </button>
  )
}

export default ScreenSizePopover

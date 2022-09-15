import { AiOutlineClockCircle } from 'react-icons/all'

const NotificationItem = () => {
  return (
    <div className="p-3 flex space-x-2 hover:bg-purple-100 rounded-lg cursor-pointer">
      <img
        src="https://pbs.twimg.com/media/Ee_5_WCUYAAp9i0.jpg"
        alt="notification"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-bold">Peter Parker</p>
        <p className="text-gray-600 text-xs">Answered to your comment on the cash flow forecasts graph 🔔.</p>
        <div className="flex items-center mt-2 space-x-1">
          <AiOutlineClockCircle />
          <span className="text-xs text-gray-700">14:50 September 14 2022</span>
        </div>
      </div>
    </div>
  )
}

export default NotificationItem

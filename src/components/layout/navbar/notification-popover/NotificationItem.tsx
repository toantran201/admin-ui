import { AiOutlineClockCircle } from 'react-icons/all'

const NotificationItem = () => {
  return (
    <div className="flex cursor-pointer space-x-2 rounded-lg p-3 hover:bg-purple-100">
      <img
        src="https://pbs.twimg.com/media/Ee_5_WCUYAAp9i0.jpg"
        alt="notification"
        className="h-10 w-10 rounded-full"
      />
      <div>
        <p className="font-bold">Peter Parker</p>
        <p className="text-xs text-gray-600">Answered to your comment on the cash flow forecasts graph 🔔.</p>
        <div className="mt-2 flex items-center space-x-1">
          <AiOutlineClockCircle />
          <span className="text-xs text-gray-700">14:50 September 14 2022</span>
        </div>
      </div>
    </div>
  )
}

export default NotificationItem

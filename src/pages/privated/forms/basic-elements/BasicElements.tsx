// import { Card, CardBody } from '@material-tailwind/react'
import BaseInput from '~/components/base/BaseInput'

const BasicElements = () => {
  return (
    <div>
      <h1>Input example</h1>
      <div className="mt-3 grid grid-cols-4 gap-x-2">
        <div>
          <BaseInput label="Example" />
        </div>
        <div>
          <BaseInput type="date" label="Date" />
        </div>
        <div>
          <BaseInput type="time" label="Time" />
        </div>
      </div>
    </div>
  )
}

export default BasicElements

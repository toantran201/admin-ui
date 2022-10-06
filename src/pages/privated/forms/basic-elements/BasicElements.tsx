import { BsMailbox } from 'react-icons/all'
//
import BaseInput from '~/components/base/BaseInput'

const BasicElements = () => {
  return (
    <>
      <div className="bg-nav-header p-6">
        <h1 className="text-heading">Input example</h1>
        <div className="mt-3 grid grid-cols-4 gap-x-5 gap-y-5">
          <div>
            <BaseInput fullWidth label="Basic Input" />
          </div>
          <div>
            <BaseInput fullWidth label="Input with Label" />
          </div>
          <div>
            <BaseInput fullWidth label="Input with placeholder" placeholder="Placeholder" />
          </div>
          <div>
            <BaseInput fullWidth label="Read only Input" readonly />
          </div>
          <div>
            <BaseInput fullWidth label="Disable Input" disabled />
          </div>
          <div>
            <BaseInput fullWidth label="Input with Icon" placeholder="example@gmail.com" icon={BsMailbox} />
          </div>
          <div>
            <BaseInput fullWidth type="date" label="Date" />
          </div>
          <div>
            <BaseInput fullWidth type="time" label="Time" />
          </div>
          <div>
            <BaseInput fullWidth type="password" label="Password" />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-nav-header p-6">
        <h1 className="text-heading">Input Sizing</h1>
        <div className="mt-3 grid grid-cols-4 items-center gap-x-5 gap-y-5">
          <div>
            <BaseInput fullWidth label="Input sm" size="sm" />
          </div>
          <div>
            <BaseInput fullWidth label="Input base" />
          </div>
          <div>
            <BaseInput fullWidth label="Input lg" size="lg" />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-nav-header p-6">
        <h1 className="text-heading">Input Color</h1>
        <div className="mt-3 grid grid-cols-4 items-center gap-x-5 gap-y-5">
          <div>
            <BaseInput fullWidth label="Input Primary" />
          </div>
          <div>
            <BaseInput fullWidth label="Input Secondary" color="secondary" />
          </div>
          <div>
            <BaseInput fullWidth label="Input Info" color="info" />
          </div>
          <div>
            <BaseInput fullWidth label="Input Success" color="success" />
          </div>
          <div>
            <BaseInput fullWidth label="Input Warning" color="warning" />
          </div>
          <div>
            <BaseInput fullWidth label="Input Danger" color="danger" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BasicElements

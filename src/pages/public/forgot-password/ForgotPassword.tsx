import { Link } from 'react-router-dom'
import { FiMail } from 'react-icons/all'
//
import { BaseButton, BaseInput } from '~/components'

const ForgotPassword = () => {
  return (
    <div className="relative h-[100vh] w-[100vw] bg-gray-600">
      <div className="absolute-center w-[90%] md:w-[50%] xl:w-[30%]">
        {/*Sign in form block*/}
        <div className="rounded-lg bg-white p-8 text-center">
          <h3>Forgot Password?</h3>
          <p className="mt-2 font-manrope-light text-sm text-gray-500">Reset password with velzon</p>
          <div className="mt-5">
            <FiMail className="m-auto h-20 w-20 text-center text-amber-300" strokeWidth={1} />
            <div className="mt-2 rounded-md bg-amber-100 py-4">
              <span className="text-sm text-amber-700">Enter your email and instructions will be sent to you!</span>
            </div>
          </div>
          <div className="mt-5">
            <BaseInput label="Email" />
          </div>
          <div className="mt-5">
            <BaseButton fullWidth soft size="sm">
              Send reset link
            </BaseButton>
          </div>
        </div>

        {/* Sign up block */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Wait, I remember my password...{' '}
            <Link to="/signin">
              <span className="inline font-manrope underline">Click here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

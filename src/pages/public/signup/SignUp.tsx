import { Button, Input, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-gray-400">
      <div className="absolute-center w-[90%] md:w-[50%] xl:w-[30%]">
        {/*Sign in form block*/}
        <div className="bg-white p-8 rounded-lg text-center">
          <Typography variant="lead" color="blue-gray" className="font-manrope">
            Create New Account
          </Typography>
          <p className="text-sm font-manrope-light text-gray-500 mt-2">Get your free velzon account now</p>
          <div className="mt-5">
            <Input label="Email" />
          </div>
          <div className="mt-5">
            <Input label="Username" />
          </div>
          <div className="mt-5">
            <Input label="Password" type="password" />
          </div>
          <p className="text-left mt-5 text-sm text-gray-500">
            By registering you agree to the Velzon{' '}
            <Link to="#" className="text-gray-900 underline">
              Terms of Use
            </Link>
          </p>
          <div className="mt-5">
            <Button color="blue-gray" className="w-full">
              Sign up
            </Button>
          </div>
        </div>

        {/* Sign up block */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-900">
            Already have an account ?{' '}
            <Link to="/signin">
              <span className="inline font-manrope text-gray-900 underline">Signin</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp

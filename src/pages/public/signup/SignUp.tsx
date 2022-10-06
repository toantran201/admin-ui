import { Link } from 'react-router-dom'
import { Resolver, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//
import { BaseButton, FormInput } from '~/components'
import i18next from '~/translations/i18n'

type SignUpFormData = {
  username: string
  password: string
  email: string
}

const schema = yup.object({
  email: yup.string().required(i18next.t('required')).min(8),
  username: yup.string().required(i18next.t('required')).min(8),
  password: yup.string().required(i18next.t('required')).min(8),
})

const SignUp = () => {
  //0. Init
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: 'onBlur',
    resolver: yupResolver<yup.AnyObjectSchema>(schema) as Resolver<SignUpFormData>,
  })

  //1. On submit handler
  const onSubmit = (data: SignUpFormData) => {
    console.log(data)
  }

  return (
    <div className="relative h-[100vh] w-[100vw] bg-gray-600">
      <div className="absolute-center w-[90%] md:w-[50%] xl:w-[30%]">
        {/* --------------- Sign up form block --------------- */}
        <div className="rounded-lg bg-white p-8 text-center">
          <h3>Create New Account</h3>
          <p className="mt-2 font-manrope-light text-sm text-gray-500">Get your free account now</p>
          <div className="mt-5">
            <FormInput source="email" register={register} errors={errors} label="Email" fullWidth />
          </div>
          <div className="mt-5">
            <FormInput source="username" register={register} errors={errors} label="Username" fullWidth />
          </div>
          <div className="mt-5">
            <FormInput
              source="password"
              register={register}
              errors={errors}
              label="Password"
              type="password"
              fullWidth
            />
          </div>
          <p className="mt-5 text-left text-sm text-gray-500">
            By registering you agree to the .....{' '}
            <Link to="#" className="text-gray-800 underline">
              Terms of Use
            </Link>
          </p>
          <div className="mt-5">
            <BaseButton fullWidth soft size="sm" onClick={handleSubmit(onSubmit)}>
              Sign up
            </BaseButton>
          </div>
        </div>
        {/* --------------- End sign up form block --------------- */}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Already have an account ?{' '}
            <Link to="/signin">
              <span className="inline font-manrope underline">Signin</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp

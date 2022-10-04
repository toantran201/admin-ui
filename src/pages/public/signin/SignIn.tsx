import { Link } from 'react-router-dom'
import { Resolver, useForm } from 'react-hook-form'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
// import { Button, Checkbox, IconButton, Typography } from '@material-tailwind/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//
import { BaseButton, FormInput } from '~/components'
import i18next from '~/translations/i18n'
import { useAuth } from '~/auth/useAuth'

const schema = yup.object({
  username: yup.string().required(i18next.t('required')).min(8),
  password: yup.string().required(i18next.t('required')).min(8),
})

type SignInFormData = {
  username: string
  password: string
}

const SignIn = () => {
  //0. Init
  const { t } = useTranslation()
  const { signin } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: 'onBlur',
    resolver: yupResolver<yup.AnyObjectSchema>(schema) as Resolver<SignInFormData>,
  })

  //1. Submit handler
  const onSubmit = (data: SignInFormData) => {
    signin(data.username, data.password)
  }

  return (
    <div className="relative h-[100vh] w-[100vw] bg-gray-600">
      <div className="absolute-center w-[90%] md:w-[50%] xl:w-[30%]">
        <div className="rounded-lg bg-white p-8 text-center">
          <h1 color="red" className="font-manrope">
            {t('welcome-back')}
          </h1>
          <p className="mt-2 font-manrope-light text-sm text-gray-500">{t('sigin-to-continue')}</p>
          {/* ---------------------- Form start ----------------------*/}
          <div className="mt-5">
            <FormInput label={t('username')} source="username" register={register} errors={errors} />
          </div>
          <div className="mt-5">
            <FormInput type="password" label={t('password')} source="password" register={register} errors={errors} />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center">
              {/*<Checkbox color="red" defaultChecked />{' '}*/}
              <span className="text-sm text-gray-600">{t('remember-me')}</span>
            </div>
            <div>
              <Link to="/forgot">
                <span className="text-sm text-gray-600 underline">{t('forgot-password')}</span>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <BaseButton onClick={handleSubmit(onSubmit)} fullWidth size="sm" soft={true}>
              {t('signin')}
            </BaseButton>
          </div>
          {/*---------------------- Form end ----------------------*/}
          <div className="mt-5">
            <p className="text-sm text-gray-700">{t('signin-with')}</p>
            <div className="mt-5 flex w-full justify-center space-x-5">
              <button color="red">
                <FaFacebook className="h-5 w-5" />
              </button>
              <button color="red">
                <FaGoogle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sign up block */}
        <div className="mt-8 text-center">
          <p className="font-manrope text-sm text-gray-400">
            {t('dont-have-account')}{' '}
            <Link to="/signup">
              <span className="inline underline">{t('signup')}</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn

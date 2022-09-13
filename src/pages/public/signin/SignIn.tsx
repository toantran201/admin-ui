import { Link } from 'react-router-dom'
import { Resolver, useForm } from 'react-hook-form'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Button, Checkbox, IconButton, Typography } from '@material-tailwind/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//
import { FormInput } from '~/components'
import i18next from '~/translations/i18n'

const schema = yup.object({
  username: yup.string().required(i18next.t('required')).min(8),
  password: yup.string().required(i18next.t('required')).min(8),
})

type LoginFormData = {
  username: string
  password: string
}

const SignIn = () => {
  //0. Init
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: 'onBlur',
    resolver: yupResolver<yup.AnyObjectSchema>(schema) as Resolver<LoginFormData>,
  })

  //1. Submit handler
  const onSubmit = (data: LoginFormData) => {
    console.log(data)
  }

  return (
    <div className="relative w-[100vw] h-[100vh] bg-gray-400">
      <div className="absolute-center w-[90%] md:w-[50%] xl:w-[30%]">
        <div className="bg-white p-8 rounded-lg text-center">
          <Typography variant="lead" color="blue-gray" className="font-manrope">
            {t('welcome-back')}
          </Typography>
          <p className="text-sm font-manrope-light text-gray-500 mt-2">{t('sigin-to-continue')}</p>
          {/* ---------------------- Form start ----------------------*/}
          <div className="mt-5">
            <FormInput label={t('username')} source="username" register={register} errors={errors} />
          </div>
          <div className="mt-5">
            <FormInput type="password" label={t('password')} source="password" register={register} errors={errors} />
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center">
              <Checkbox color="blue-gray" defaultChecked />{' '}
              <span className="text-sm text-gray-600">{t('remember-me')}</span>
            </div>
            <div>
              <Link to="/forgot">
                <span className="text-sm text-gray-600 underline">{t('forgot-password')}</span>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <Button color="blue-gray" className="w-full" onClick={handleSubmit(onSubmit)}>
              {t('signin')}
            </Button>
          </div>
          {/*---------------------- Form end ----------------------*/}
          <div className="mt-5">
            <p className="text-sm text-gray-700">{t('signin-with')}</p>
            <div className="w-full flex justify-center space-x-5 mt-5">
              <IconButton color="blue-gray">
                <FaFacebook className="w-5 h-5" />
              </IconButton>
              <IconButton color="blue-gray">
                <FaGoogle className="w-5 h-5" />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Sign up block */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-900">
            {t('dont-have-account')}{' '}
            <Link to="/signup">
              <span className="inline font-manrope text-gray-900 underline">{t('signup')}</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn

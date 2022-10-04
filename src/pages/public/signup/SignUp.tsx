import { Link } from 'react-router-dom'
// import { Button, Input, Typography } from '@material-tailwind/react'
import { FormInput } from '~/components'
import { Resolver, useForm } from 'react-hook-form'
import * as yup from 'yup'
import i18next from '~/translations/i18n'
import { yupResolver } from '@hookform/resolvers/yup'

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
    <h1>Sign up</h1>
    // <div className="relative w-[100vw] h-[100vh] bg-gray-400">
    //   <div className="absolute-center w-[90%] md:w-[50%] xl:w-[30%]">
    //     {/* --------------- Sign up form block --------------- */}
    //     <div className="bg-white p-8 rounded-lg text-center">
    //       <Typography variant="lead" color="red" className="font-manrope">
    //         Create New Account
    //       </Typography>
    //       <p className="text-sm font-manrope-light text-gray-500 mt-2">Get your free account now</p>
    //       <div className="mt-5">
    //         <FormInput source="email" register={register} errors={errors} label="Email" />
    //       </div>
    //       <div className="mt-5">
    //         <FormInput source="username" register={register} errors={errors} label="Username" />
    //       </div>
    //       <div className="mt-5">
    //         <FormInput source="password" register={register} errors={errors} label="Password" type="password" />
    //       </div>
    //       <p className="text-left mt-5 text-sm text-gray-500">
    //         By registering you agree to the .....{' '}
    //         <Link to="#" className="text-gray-800 underline">
    //           Terms of Use
    //         </Link>
    //       </p>
    //       <div className="mt-5">
    //         <Button color="red" className="w-full" onClick={handleSubmit(onSubmit)}>
    //           Sign up
    //         </Button>
    //       </div>
    //     </div>
    //     {/* --------------- End sign up form block --------------- */}
    //
    //     <div className="text-center mt-8">
    //       <p className="text-sm text-gray-900">
    //         Already have an account ?{' '}
    //         <Link to="/signin">
    //           <span className="inline font-manrope text-gray-900 underline">Signin</span>
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SignUp

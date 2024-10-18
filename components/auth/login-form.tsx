"use client";

import Link from 'next/link'
import { useFormState } from 'react-dom'
import { signUpCredentials } from '@/lib/actions'
import { RegisterButton } from '@/components/button';
const FormRegister = () => {
    const  [ state, formAction] = useFormState(signUpCredentials, null);
  return (
    <form action={formAction} className='space-y-6'>
        {state?.message ? (
            <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100' role='alert'>
                <span className='font-medium'>{state?.message}</span>
            </div>
        ) : null}
        <div>
        <label htmlFor='name' className='block md-2 text-sm font-medium text-gray-900'>Nome</label>
        <input type='text' name='name' className='bg-gray-50 border border-gray-300
        text-gray-900 rounded-lg w-full p-2.5'
        placeholder='Ex: Jhon Doe'
        />
        <div aria-live='polite' aria-atomic='true'>
        <span className='text-sm text-red-800 mt-2'>{state?.error?.name}</span>
        </div>
      </div>
      <div>
        <label htmlFor='email' className='block md-2 text-sm font-medium text-gray-900'>Email</label>
        <input type='email' name='email' className='bg-gray-50 border border-gray-300
        text-gray-900 rounded-lg w-full p-2.5'
         placeholder='Ex:JhonDoe@jhondoe.com'
        />
        <div aria-live='polite' aria-atomic='true'>
        <span className='text-sm text-red-800 mt-2'>{state?.error?.email}</span>
        </div>
      </div>
      <div>
        <label htmlFor='password' className='block md-2 text-sm font-medium text-gray-900'>Senha</label>
        <input type='password' name='password' className='bg-gray-50 border border-gray-300
        text-gray-900 rounded-lg w-full p-2.5'/>
        <div aria-live='polite' aria-atomic='true'>
        <span className='text-sm text-red-800 mt-2'>{state?.error?.password}</span>
        </div>
      </div>
      <div>
        <label htmlFor='ConfirmPassword' className='block md-2 text-sm font-medium text-gray-900'>Confirme a Senha</label>
        <input type='password' name='ConfirmPassword' className='bg-gray-50 border border-gray-300
        text-gray-900 rounded-lg w-full p-2.5'/>
        <div aria-live='polite' aria-atomic='true'>
        <span className='text-sm text-red-800 mt-2'>{state?.error?.ConfirmPassword}</span>
        </div>
      </div>
      <RegisterButton />
      <p>Já possui uma conta?
        <Link href='/login'><span className='font-medium pl-1 text-blue-600
        hover:text-blue-800'>Realizar Login</span></Link>
       </p>
    </form>
  )
}

export default FormRegister

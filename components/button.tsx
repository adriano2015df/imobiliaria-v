"use client";

import { useFormStatus } from "react-dom";

export const LoginButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type='submit' 
        disabled={pending}
        className='w-full text-white bg-green-700 font-medium rounded-lg
       px-5 py-2.5 text-center uppercase hover:bg-green-800'>
        {pending ? "Autenticando..." : "Login"}
        </button>
       
    )
}

export const RegisterButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type='submit' 
        disabled={pending}
        className='w-full text-white bg-green-700 font-medium rounded-lg
       px-5 py-2.5 text-center uppercase hover:bg-green-800'>
        {pending ? "Registrando..." : "Registrar"}
        </button>
       
    )
}
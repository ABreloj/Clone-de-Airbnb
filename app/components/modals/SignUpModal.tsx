'use client'


import Modal from "./Modal"

import { useState } from "react"
import { useRouter } from "next/navigation"
import UseSignUpModal from "../../hooks/UseSignUpModal"
import CustomButton from "../forms/CustomButton"
import { handleLogin } from "@/app/lib/action"
import apiService from "@/app/services/apiService"



const SignUpModal = () => {
    const router = useRouter()
    const signUpModal = UseSignUpModal()
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState<string[]>([])
     
    const submitSignup = async () => {
        const formData = {
            name: 'stein',
            email: email,
            password1: password1,
            password2: password2
        }
const response = await apiService.post('/api/auth/register/', JSON.stringify(formData))

        if(response.acces){
            handleLogin(response.user.pk, response.access, response.refresh)

            signUpModal.close()

            router.push('/')
        } else{
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })
        
            setErrors(tmpErrors)
        }
    }

    const content = (
        <>
            <form 
                action={submitSignup}
                className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Escriba su correo electronico" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />

                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Escriba su correo contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />

                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repita su contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />


                {errors.map((error, index) => {
                    return(    
                    <div 
                    key={`error_${index}`}
                    className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                    >
                        {error}
                    </div>
                    )
                })}

                <CustomButton
                label="sumbit"
                onClick={submitSignup}
                />
            </form>     
        </>
    )
    
    return(
        <Modal
        isOpen={signUpModal.isOpen}
        close={signUpModal.close}
        label="SignUp"
        content={content}
     />
     
    )
}

export default SignUpModal
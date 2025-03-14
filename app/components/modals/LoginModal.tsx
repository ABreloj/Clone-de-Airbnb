'use client'

import Modal from "./Modal"

import { useState } from "react"
import { useRouter } from "next/navigation" 
import useLoginModal from "../../hooks/UseLoginModal"
import CustomButton from "../forms/CustomButton"
import { handleLogin } from "@/app/lib/action"
import apiService  from "@/app/services/apiService"

const LoginModal = () => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string []>([])

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }
        const response = await apiService.post('/api/auth/login', JSON.stringify(formData))

        if(response.acces){
            handleLogin(response.user.pk, response.access, response.refresh)

            loginModal.close()

            router.push('/')
        } else{
            setErrors(response.non_field_errors)
        }
    }

    const content = (
        <>
            <form 
                action={submitLogin}
                className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Escriba su correo electronico" type="e  mail" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />

                <input onChange={(e) => setPassword(e.target.value)} placeholder="Escriba su contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                

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
                onClick={submitLogin}
                />
            </form>     
        </>
    )
    
    return(
        <Modal
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Login"
        content={content}
    />
    )
}

export default LoginModal
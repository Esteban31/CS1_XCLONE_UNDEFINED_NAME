import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../firebase/provider'
import Swal from 'sweetalert2'

export const SignInModalComponent = () => {

    const navigate = useNavigate()
    const usersCollection = JSON.parse(localStorage.getItem('usersCollection'))

    const [formData, setFormData] =  useState({
        email:"",
        password:""
    })

    const handleChangeField=(e)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    const handleSubmit = async(e)=>{
        e.preventDefault()

        const randomNumber = Math.floor(Math.random() * 100) + 1;


        const process = await signIn(formData.email, formData.password)

        if (process.ok) {

            if (process.userInfo.photoURL == null) {
                process.userInfo.photoURL = "https://avatar.iran.liara.run/public/"+randomNumber
            }

            localStorage.setItem("userSession", JSON.stringify(process.userInfo));
            navigate("/app")
        }else{
            SignInModal.close()
            Swal.fire({
                title: 'Error!',
                text: process.errorMessage,
                icon: 'error',
                confirmButtonText: 'Continue'
            })
        }

        console.log(process)
       
    }

    return (
        <>
            <dialog id="SignInModal" class="modal">
                <div class="modal-box relative bg-black text-white p-6 rounded-lg shadow-lg">
                    {/* Contenedor flex para el botón cerrar y la imagen centrada */}
                    <div class="modal-action flex justify-between items-center">
                        <form method="dialog">
                            <button class="btn rounded-full">X</button>
                        </form>
                        <img src="/assets/img/logo-x.png" alt="small-icon" class="w-5 h-5" />
                    </div>

                    <h3 class="text-2xl font-bold  mt-4">Iniciar Sesión</h3>

                    <form onSubmit={(e) => handleSubmit(e)}>


                        <div class="mt-4">
                            <input
                                type="email"
                                required
                                placeholder="Correo"
                                name='email'
                                value={formData.email}
                                onChange={handleChangeField}
                                class="input input-bordered w-full mb-4 bg-black text-white focus:border-custom-blue active:border-custom-blue"
                            />
                            <input
                                type="password"
                                required
                                placeholder="Contraseña"
                                name='password'
                                value={formData.password}
                                onChange={handleChangeField}
                                class="input input-bordered w-full mb-4 bg-black text-white focus:border-custom-blue active:border-custom-blue"
                            />
                        </div>

                        <br />
                        <div className="footerBottom sticky bottom-0 h-auto shadow-2xl w-full bg-black">
                            <button className='btn btn-block bg-custom-blue text-white mb-10' button="submit">Iniciar Sesión</button>
                        </div>

                    </form>


                </div>
            </dialog>
        </>
    )
}

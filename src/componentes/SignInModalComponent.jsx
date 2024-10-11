import React from 'react'
import { useState } from 'react'
import { usersCollection } from '../../Database/users'
import { useNavigate } from 'react-router-dom'

export const SignInModalComponent = () => {

    const navigate = useNavigate()

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


    const handleSubmit = (e)=>{
        e.preventDefault()


        // CHECK IF THE USER EXIST
        let results = usersCollection.filter(item => item.email == formData.email);

        if (results.length > 0) {
            if (results[0].password == formData.password) {
                localStorage.setItem("userSession", JSON.stringify(results[0]));
                navigate("/app")
            }else{
                alert("Contraseña Incorrecta")
            }
        }else{
            alert("Correo no encontrado")
        }
       
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

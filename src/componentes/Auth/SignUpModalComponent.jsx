import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SignUpModalComponent = () => {

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const numbers = Array.from({ length: 31 }, (_, index) => index + 1);
    const years = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    const navigate = useNavigate();
    const usersCollections = JSON.parse(localStorage.getItem('usersCollection'))

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    const [formData, setFormData] =  useState({
        userName:"",
        email: "",
        birthMonth:"",
        birthYear:"",
        birthDay:"",
        password: "",
        code: "",
        user:"",
        social:{
            followers: [],
            following:[]
        },
        profilePic:"https://avatar.iran.liara.run/public/"+randomNumber,
        bannerPic:"https://loremflickr.com/800/200"
    })

    const handleChangeField=(e)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    const next = (e, step) => {

        e.preventDefault(); 

        if (step == 1) {
            document.getElementById("firstStep").style.display = "none"
            document.getElementById("secondStep").style.display = "block"
        }

        if (step == 2) {
            document.getElementById("secondStep").style.display = "none"
            document.getElementById("thirdStep").style.display = "block"
        }
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
    
        
        // FORMAT THE USERfield
        formData.user.replace('@','')
        formData.user = '@'+formData.user

        // saved the data in localStorage
        usersCollections.push(formData)
        localStorage.setItem("usersCollection", JSON.stringify(usersCollections))

        localStorage.setItem("userSession", JSON.stringify(formData))
        SignUpModal.close()
        navigate("/app")

    }

    return (
        <>
            <dialog id="SignUpModal" class="modal">
                <div class="modal-box relative bg-black text-white p-6 rounded-lg shadow-lg">
                    {/* Contenedor flex para el botón cerrar y la imagen centrada */}
                    <div class="modal-action flex justify-between items-center">
                        <form method="dialog">
                            <button class="btn rounded-full">X</button>
                        </form>
                        <img src="/assets/img/logo-x.png" alt="small-icon" class="w-5 h-5" />
                    </div>

                    <h3 class="text-2xl font-bold  mt-4">Crea tu cuenta</h3>

                    <form onSubmit={(e) => next(e, 1)} style={{display: "block"}} id='firstStep'>


                        <div class="mt-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                name='userName'
                                value={formData.userName}
                                onChange={handleChangeField}
                                class="input input-bordered w-full mb-4 bg-black text-white focus:border-custom-blue active:border-custom-blue"
                            />
                            <input
                                type="email"
                                placeholder="Correo"
                                name='email'
                                value={formData.email}
                                onChange={handleChangeField}
                                class="input input-bordered w-full mb-4 bg-black text-white focus:border-custom-blue active:border-custom-blue"
                            />
                        </div>

                        <p>Fecha de Nacimiento</p><br />
                        <div className="grid grid-cols-12 gap-3 mb-10">
                            <div className="col-span-6">
                                <select class="select select-bordered w-full max-w-xs" name='birthMonth' onChange={handleChangeField}>
                                    <option disabled selected>Mes</option>
                                    {months.map((month, index) => (
                                        <option value={month}>{month}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-3">
                                <select class="select select-bordered w-full max-w-xs" name='birthDay' onChange={handleChangeField}>
                                    <option disabled selected>Día</option>
                                    {numbers.map((number, index) => (
                                        <option value={number}>{number}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-3">
                                <select class="select select-bordered w-full max-w-xs" name='birthYear' onChange={handleChangeField}>
                                    <option disabled selected>Año</option>
                                    {years.map((year, index) => (
                                        <option value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="footerBottom sticky bottom-0 h-auto shadow-2xl w-full bg-black">
                            <button className='btn btn-block bg-custom-blue text-white mb-10' button="submit">Siguiente</button>
                        </div>

                    </form>
                    

                    {/* SECOND STEP */}
                    <form onSubmit={(e) => next(e, 2)} style={{display: "none"}} id='secondStep'>


                        <div class="mt-4">
                            <label>Código de autenticación</label>
                            <input
                                type="text"
                                placeholder="Ingresa el código de autenticación"
                                name='code'
                                value={formData.code}
                                onChange={handleChangeField}
                                class="input input-bordered w-full mb-4 bg-black text-white focus:border-custom-blue active:border-custom-blue"
                            />
                        </div>
                        <br />
                        <div className="footerBottom sticky bottom-0 h-auto shadow-2xl w-full bg-black">
                            <button className='btn btn-block bg-custom-blue text-white mb-10' button="submit">Siguiente</button>
                        </div>

                    </form>


                    <form onSubmit={(e) => handleSubmit(e)} style={{display: "none"}} id='thirdStep'>


                        <div class="mt-4">
                            <label>Ingresa tu nuevo usuario</label>
                            <input
                                type="text"
                                placeholder="@usuario"
                                name='user'
                                value={formData.user}
                                onChange={handleChangeField}
                                class="input input-bordered w-full mb-4 bg-black text-white focus:border-custom-blue active:border-custom-blue"
                            />
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="*********"
                                name='password'
                                value={formData.password}
                                onChange={handleChangeField}
                                class="input input-bordered w-full mb-4 bg-black text-white focus:border-custom-blue active:border-custom-blue"
                            />
                        </div>
                        <br />
                        <div className="footerBottom sticky bottom-0 h-auto shadow-2xl w-full bg-black">
                            <button className='btn btn-block bg-custom-blue text-white mb-10' button="submit">Registrarse</button>
                        </div>

                    </form>


                </div>
            </dialog>
        </>
    )
}

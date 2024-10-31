import React from 'react'
import { SignUpModalComponent } from './SignUpModalComponent'
import { SignInModalComponent } from './SignInModalComponent'

export const LoginComponent = () => {


    function onClickOpenSignUpModal(){
        SignUpModal.showModal()
    }

    function onClickOpenSignInModal(){
        SignInModal.showModal()
    }

    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-6 flex items-center justify-center h-full min-h-screen">
                    <img src="assets\img\logo-x.png" alt="" width={"60%"} />
                </div>
                <div className="col-span-6">
                    <h1 className='text-5xl mt-20 font-extrabold mainTitle'>Lo que está pasando ahora</h1><br />
                    <h2 className='text-3xl font-bold mainTitle'>Únete hoy</h2><br />

                    <button className='btn rounded-full hover:red-200 w-3/5 h-10 bg-custom-gray text-black hover:text-white'>
                        <img src="assets\img\google-icon 1.svg" alt="" />
                        Registrarse con Google
                    </button>
                    <br /><br />
                    <button className='btn rounded-full hover:red-200 w-3/5 h-10 bg-custom-gray text-black hover:text-white'>
                        <img src="assets\img\apple-icon 1.svg" alt="" />
                        Iniciar sesión con Apple
                    </button>
                    <br /><br />



                    {/* SEPARATOR */}
                    <div class="relative flex items-center justify-center w-3/5 h-4">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-400"></div>
                        </div>
                        <div class="relative z-10 bg-black px-2">
                            <span class="block w-4 h-4 border-2 border-gray-400 rounded-full"></span>
                        </div>
                    </div>
                    <br />
                    {/* SEPARATOR */}


                    <button className='btn bg-custom-blue rounded-full w-3/5 text-white' onClick={onClickOpenSignUpModal}>Crear Cuenta</button>
                    <br /><br />
                    <p className='w-3/5 font-light text-sm text-justify'>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</p>
                    <br />
                    <h3 className='mainTitle font-bold'>¿Ya tienes una cuenta?</h3>
                    <br />
                    <button className='btn  bg-transparent border-2 border-custom-gray rounded-full w-3/5 text-custom-blue mb-10' onClick={onClickOpenSignInModal}>Iniciar Sesión</button>

                </div>
            </div>
            <SignUpModalComponent/>
            <SignInModalComponent/>
        </>
    )
}

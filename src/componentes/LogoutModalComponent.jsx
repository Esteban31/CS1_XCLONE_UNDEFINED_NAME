import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LogoutModalComponent = () => {

    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem('userSession')
        navigate("/")
    }

    return (
        <>
            <dialog id="LogoutModal" class="modal">
                <div class="modal-box">
                    <button className='btn btn-block' onClick={logout}>Cerrar sesión</button>
                    <br /><br />
                    <button className='btn btn-block bg-custom-gray text-black'>Añadir Cuenta</button>
                </div>
            </dialog>
        </>
    )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../firebase/provider'

export const LogoutModalComponent = () => {

    const navigate = useNavigate()

    async function logout(){
        localStorage.removeItem('userSession')
        navigate("/")
        await logoutUser()
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

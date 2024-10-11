import React from 'react'
import { useParams } from 'react-router-dom'
import { RightBarComponent } from './RightBarComponent'
import { Link } from 'react-router-dom'

export const ProfileComponent = () => {


    const { user } = useParams()
    const userSession = JSON.parse(localStorage.getItem('userSession'))
    let isSame = false

    var userInfo = {}

    const usersCollection = JSON.parse(localStorage.getItem('usersCollection'))

    let results = usersCollection.filter(item => item.user.includes(user));

    // Check if the user is already logged
    if (user == userSession.user.replace('@','')) {
        isSame = true
    }


    // TO DO: Search user in firebase
    if (results.length > 0) {
        userInfo = results[0]
    }


    return (
        <>
            <>
                <div className="grid grid-cols-12">
                    <div className="col-span-8 border-l border-custom-gray h-screen mt-0">
                        <div className="grid grid-cols-2">
                            <div className="col-span-12 sticky top-0 flex float-start items-center">
                                <div className="backdrop-blur-sm bg-black/30 text-white flex float-start items-center p-2 border-b border-white w-full space-x-2">
                                    <Link to="/app" className='btn btn-ghost rounded-full'>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.6" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </Link>
                                    <p>{userInfo.user.replace('@','')}</p>
                                </div>
                            </div>

                            <div className="col-span-12">
                                <div className="bg-black text-white rounded-lg shadow-lg">
                                    {/* Imagen de banner */}
                                    <div className="w-full h-32 overflow-hidden">
                                        <img
                                            src={userInfo.bannerPic}
                                            alt="Banner"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Contenedor de la información del usuario */}
                                    <div className="relative">
                                        {/* Imagen de perfil */}
                                        <img
                                            src={userInfo.profilePic}
                                            alt="Profile"
                                            className="w-24 h-24 rounded-full border-4 border-black absolute -top-12 left-5"
                                        />

                                        {/* Nombre del usuario y otros detalles */}
                                        <div className="ml-32 mt-4">
                                            <h2 className="text-xl font-bold">{userInfo.userName}</h2>
                                            <p className="text-gray-400">{userInfo.user}</p>
                                            <p className="text-sm text-gray-400">"PENDING PUT A DECRIPTION HERE"</p>
                                            <p className="text-sm text-gray-400">Se unió en {userInfo.birthMonth} del {userInfo.birthYear}</p>

                                            {/* Estadísticas */}
                                            <div className="flex space-x-4 mt-2 text-gray-400">
                                                <p>{userInfo.social.following} Siguiendo</p>
                                                <p>{userInfo.social.followers} Seguidores</p>
                                            </div>
                                        </div>

                                        <button className="absolute right-5 top-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700" style={isSame ? {"display":'none'}:{"display":'block'}}>
                                            Seguir
                                        </button>
                                        <button className="absolute right-5 top-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700" style={isSame ? {"display":'block'}:{"display":'none'}}>
                                            Configurar Perfil
                                        </button>
                                    </div>

                                    {/* Texto adicional */}
                                    <p style={isSame ? {"display":'none'}:{"display":'grid'}} className="mt-4 text-sm text-gray-500 text-center">Ninguna de las cuentas que sigues sigue a este usuario</p>

                                    <br />
                                    <div role="tablist" class="tabs tabs-bordered" style={isSame ? {"display":'none'}:{"display":'grid'}}>
                                        <a role="tab" class="tab tab-active">Post</a>
                                        <a role="tab" class="tab">Respuestas</a>
                                        <a role="tab" class="tab">Fotos y Videos</a>
                                    </div>
                                    <div role="tablist" class="tabs tabs-bordered" style={isSame ? {"display":'grid'}:{"display":'none'}}>
                                        <a role="tab" class="tab tab-active">Post</a>
                                        <a role="tab" class="tab">Respuestas</a>
                                        <a role="tab" class="tab">Destacados</a>
                                        <a role="tab" class="tab">Artículos</a>
                                        <a role="tab" class="tab">Fotos y Videos</a>
                                        <a role="tab" class="tab">Me gusta</a>
                                    </div>
                                </div>

                            </div>


                            {/* FEED */}

                            {/* FEED */}


                        </div>
                    </div>
                    <div className="col-span-4 border-l border-custom-gray h-screen mt-0 flex flex-col items-center p-6">
                        <RightBarComponent />
                    </div>
                </div>
            </>
        </>
    )
}

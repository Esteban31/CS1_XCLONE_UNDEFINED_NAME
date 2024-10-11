import React from "react";
import { Link } from "react-router-dom";

import { LogoutModalComponent } from "./LogoutModalComponent";


export const SideBar = () => {

    function openLogoutModal() {
        LogoutModal.showModal()
    }

    const userSession = JSON.parse(localStorage.getItem('userSession'));

    return (
        <>
            <ul class="menu rounded-box w-60 h-screen ml-8">
                <li className="mb-5">
                    <img src="/assets\img\logo-x.png" alt="" width={"30%"} />
                </li>
                <li className="mb-3 font-extrabold">
                    <Link to="/app">
                        <img src="/assets\img\home-icon.svg" alt="homeIcon" width={"85%"} />
                        Inicio
                    </Link>
                </li>
                <li className="mb-3">
                    <Link>
                        <img src="/assets\img\discovery-icon.svg" alt="ExploreIcon" width={"85%"} />
                        Explorar
                    </Link>
                </li>
                <li className="mb-3">
                    <Link>
                        <img src="/assets\img\notifications-icon.svg" alt="NotificationsIcon" width={"85%"} />
                        Notificaciones
                    </Link>
                </li>
                <li className="mb-3">
                    <Link>
                        <img src="/assets\img\message-icon.svg" alt="MessagesIcon" width={"85%"} />
                        Mensajes
                    </Link>
                </li>
                <li className="mb-3">
                    <Link>
                        <img src="/assets\img\grok-icon.svg" alt="GrokIcon" width={"85%"} />
                        Grok
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to={"/app/" + userSession.user.replace("@", "")}>
                        <img src="/assets\img\profile-icon.svg" alt="profileIcon" width={"85%"} />
                        Perfil
                    </Link>
                </li>
                <li className="mb-3">
                    <Link>
                        <img src="/assets\img\options-icon.svg" alt="OptionsIcon" width={"85%"} />
                        Más opciones
                    </Link>
                </li>
                <div className="buttonContainer flex justify-center">
                    <button className="w-2/3 btn bg-custom-blue text-white rounded-full">Postear</button>
                </div>
                <br />
                <button onClick={openLogoutModal} className="w-3/ btn bg-transparent text-white border-transparent rounded-full justify-center">
                    <img src={userSession.profilePic} alt="" width={"20%"} />
                    {userSession.userName}
                    <br />{userSession.user}
                </button>
            </ul>
            <LogoutModalComponent/>
        </>
    );
};

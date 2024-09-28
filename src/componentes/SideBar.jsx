import React from "react";

export const SideBar = () => {
    return (
        <>
            <ul class="menu rounded-box w-56 h-screen">
                <li className="mb-5">
                   <img src="assets\img\logo-x.png" alt="" width={"30%"}/>
                </li>
                <li  className="mb-3">
                    <a>
                        <img src="assets\img\home-icon.svg" alt="homeIcon" width={"85%"} />
                        Inicio
                    </a>
                </li>
                <li className="mb-3">
                    <a>
                        <img src="assets\img\discovery-icon.svg" alt="ExploreIcon" width={"85%"} />
                        Explorar
                    </a>
                </li>
                <li className="mb-3">
                    <a>
                        <img src="assets\img\notifications-icon.svg" alt="NotificationsIcon" width={"85%"} />
                        Notificaciones
                    </a>
                </li>
                <li className="mb-3">
                    <a>
                        <img src="assets\img\message-icon.svg" alt="MessagesIcon" width={"85%"} />
                        Mensajes
                    </a>
                </li>
                <li className="mb-3">
                    <a>
                        <img src="assets\img\grok-icon.svg" alt="GrokIcon" width={"85%"} />
                        Grok
                    </a>
                </li>
                <li className="mb-3">
                    <a>
                        <img src="assets\img\profile-icon.svg" alt="profileIcon" width={"85%"} />
                        Perfil
                    </a>
                </li>
                <li className="mb-3">
                    <a>
                        <img src="assets\img\options-icon.svg" alt="OptionsIcon" width={"85%"} />
                        Más opciones
                    </a>
                </li>
            </ul>
        </>
    );
};

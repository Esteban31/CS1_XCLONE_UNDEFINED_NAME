import React from 'react'

import {SideBar} from "../../componentes/SideBar"
import { ProfileComponent } from '../../componentes/ProfileComponent'

export const Profile = () => {
  return (
    <>
       <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col m-4">
            <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label>

            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12">
                  <ProfileComponent/> 
                </div>
            </div>


        </div>
        <div className="drawer-side shadow-2xl rounded-lg">
            <label for="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <SideBar/> 
        </div>
    </div>
    </>
  )
}

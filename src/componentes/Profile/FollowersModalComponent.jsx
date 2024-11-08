import React from 'react'
import { useState, useEffect } from 'react'
import { getUserInfo, Getfollowing } from '../../firebase/provider'

export const FollowersModalComponent = ({ followers }) => {

    const [followings, setIsFollowing] = useState([])


    useEffect(() => {
        searchIsFollow()
    }, [])
    

    const searchIsFollow = async() => {

        const currentUser = JSON.parse(localStorage.getItem('userSession'))
        const followindData = await Getfollowing(currentUser.displayName)
        setIsFollowing(followindData)
        console.log(followings)

    }


    return (
        <>
            <dialog id="followersModal" class="modal">
                <div class="modal-box">
                    <div class="bg-black p-6 rounded-lg shadow-md max-w-md mx-auto text-white">
                        <ul class="divide-y divide-gray-300 text-white">
                            {followers.map((follower, index) => (
                                <li className="flex items-center py-4 text-white" key={index}>
                                    <img className="w-12 h-12 rounded-full" src={follower.profilePic} alt="Foto de perfil" />
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold">{follower.userName}</p>
                                        <p className="text-sm text-gray-600">{follower.user}</p>
                                    </div>
                                    {/* <button className="ml-auto btn btn-primaru">{searchIsFollow()}</button> */}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </dialog>
        </>
    )
}

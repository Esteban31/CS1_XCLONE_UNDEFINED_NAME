import React from 'react'

export const FollowersModalComponent = ({followers}) => {


    return (
        <>
            <dialog id="followersModal" class="modal">
                <div class="modal-box">
                    <div class="bg-black p-6 rounded-lg shadow-md max-w-md mx-auto text-white">
                        <ul class="divide-y divide-gray-300 text-white">
                             {followers.map((follower, index) => (
                                 <li class="flex items-center py-4 text-white" key={index}>
                                    <img class="w-12 h-12 rounded-full" src={follower.profilePic} alt="Foto de perfil"/>
                                        <div class="ml-4">
                                            <p class="text-lg font-semibold">{follower.userName}</p>
                                            <p class="text-sm text-gray-600">{follower.user}</p>
                                        </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </dialog>
        </>
    )
}

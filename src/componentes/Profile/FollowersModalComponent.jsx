import React from 'react'
import { useState, useEffect } from 'react'
import { Getfollowing, updateFollowingList, updateUser, removeFollower, updateFollowerList } from '../../firebase/provider'

export const FollowersModalComponent = ({ followers }) => {

    const [followings, setIsFollowing] = useState([])


    useEffect(() => {
        searchIsFollow()
    }, [])
    

    const searchIsFollow = async() => {

        const currentUser = JSON.parse(localStorage.getItem('userSession'))
        const followindData = await Getfollowing(currentUser.displayName)
        setIsFollowing(followers)

        let result = []

        followers.forEach(element => {
            followindData.followingList.forEach(element2 => {
                if (element.user == element2.user) {
                    result.push({
                        profilePic: element.profilePic,
                        userName: element.userName,
                        user: element.user,
                        isFollowing: true
                    })
                }else{
                    result.push({
                        profilePic: element.profilePic,
                        userName: element.userName,
                        user: element.user,
                        isFollowing: false
                    })
                }
            });
        });

        setIsFollowing(result)


    }



    const followAction = async(isFollowing, userInfo) => {
        // if (!isFollowing) { // NOW FOLLOWING
        //     const obj = {
        //         profilePic: userSession.photoURL,
        //         userName: userSession.displayName,
        //         user: userSession.displayName
        //     }

        //     await updateFollowerList(obj, userInfo.id)

        //     // userInfo.social.followers.push(obj)
        //     // const process = await updateUser(userInfo)
        //     // setIsFollowing(true);


        //     // Actualizamos lista de seguidos
        //     const obj2 = {
        //         profilePic: userInfo.profilePic,
        //         userName: userInfo.user,
        //         user: userInfo.user
        //     }
        
        //     await updateFollowingList(obj2,userSession.id)



        // } else { // FOLLOWING


        //     const objToDelete = {
        //         profilePic: userSession.photoURL,
        //         userName: userSession.displayName,
        //         user: userSession.displayName
        //     }


        //     const deleteFollow = await removeFollower(userInfo.id, objToDelete)
        //     // setIsFollowing(false);

        // }

        // fetchUserProfile()
    };


    return (
        <>
            <dialog id="followersModal" class="modal">
                <div class="modal-box">
                    <div class="bg-black p-6 rounded-lg shadow-md max-w-md mx-auto text-white">
                        <ul class="divide-y divide-gray-300 text-white">
                            {followings.map((follower, index) => (
                                <li className="flex items-center py-4 text-white" key={index}>
                                    <img className="w-12 h-12 rounded-full" src={follower.profilePic} alt="Foto de perfil" />
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold">{follower.userName}</p>
                                        <p className="text-sm text-gray-600">{follower.user}</p>
                                    </div>
                                    <button onClick={followAction(follower.isFollowing, follower)} className="ml-auto btn btn-primaru">{follower.isFollowing ? 'Dejar de seguir': 'Seguir'}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </dialog>
        </>
    )
}

import React from 'react'
import { Link, replace } from 'react-router-dom'

export const PostComponent = ({ postProperties }) => {
    return (
        <>
            <div className="w-full bg-transparent text-white border-l border-r border-custom-gray">
                <div className="content p-8">
                    <div className="flex items-start">
                        <img className="w-12 h-12 rounded-full" src={postProperties.userProfilePic} alt="User avatar" />
                        <div className="ml-4">
                            <Link to={"/app/"+postProperties.user.replace("@","")}>
                                <div className="flex items-center">
                                    <h2 className="font-bold text-lg">{postProperties.userName}</h2>
                                    <span className="text-gray-400 text-sm ml-2">{postProperties.user} - {postProperties.postDate}</span>
                                </div>
                            </Link>
                            <p className="text-gray-300">{postProperties.postDescription}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <img className="w-full h-auto rounded-xl border-2" src={postProperties.urlImage} alt="Posted image" />
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-8">
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="assets\img\postActions\comments.svg" alt="" />
                                <span>{postProperties.reactions.comments.length}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="assets\img\postActions\retweet.svg" alt="" />
                                <span>{postProperties.reactions.retweets.length}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="assets\img\postActions\like.svg" alt="" />
                                <span>{postProperties.reactions.likes.length}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="assets\img\postActions\stats.svg" alt="" />
                                <span>{postProperties.reactions.scope.length}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

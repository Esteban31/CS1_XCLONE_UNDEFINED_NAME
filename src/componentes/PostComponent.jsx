import React from 'react'

export const PostComponent = ({ postProperties }) => {
    return (
        <>
            <div class="w-full bg-transparent text-white border-l border-r border-custom-gray">
                <div className="content p-8">
                    <div class="flex items-start">
                        <img class="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />
                        <div class="ml-4">
                            <div class="flex items-center">
                                <h2 class="font-bold text-lg">{postProperties.user}</h2>
                                <span class="text-gray-400 text-sm ml-2">{postProperties.userName}</span>
                            </div>
                            <p class="text-gray-300">{postProperties.postDescription}</p>
                        </div>
                    </div>

                    <div class="mt-4">
                        <img class="w-full h-auto rounded-xl border-2" src={postProperties.urlImage} alt="Posted image" />
                    </div>

                    <div class="flex justify-between items-center mt-4">
                        <div class="flex items-center space-x-8">
                            <button class="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="assets\img\postActions\comments.svg" alt="" />
                                <span>{postProperties.reactions.comments}</span>
                            </button>
                            <button class="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="assets\img\postActions\retweet.svg" alt="" />
                                <span>{postProperties.reactions.retweets}</span>
                            </button>
                            <button class="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="assets\img\postActions\like.svg" alt="" />
                                <span>{postProperties.reactions.likes}</span>
                            </button>
                            <button class="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="assets\img\postActions\stats.svg" alt="" />
                                <span>{postProperties.reactions.scope}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

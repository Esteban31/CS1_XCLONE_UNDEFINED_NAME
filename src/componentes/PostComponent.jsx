import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PostComponent = ({ postProperties }) => {

    const [postCollection, setPostCollection] = useState([]);
    const [currentPost, setCurrentPost] = useState(postProperties); 
    const userInfo = JSON.parse(localStorage.getItem('userSession'));

    useEffect(() => {
        const results = JSON.parse(localStorage.getItem('postsCollection')) || [];
        setPostCollection(results);
    }, []);


    useEffect(() => {
        setCurrentPost(postProperties);
    }, [postProperties]);

    const handleClickLike = (e) => {
        e.preventDefault();

        const indexOfPost = postCollection.findIndex(post => post.id === currentPost.id);
        const currentUser = userInfo.user;

        if (indexOfPost !== -1) {
            const updatedPosts = [...postCollection]; 
            const post = updatedPosts[indexOfPost];
            const found = post.reactions.likes.indexOf(currentUser);

            if (found === -1) { // NO HA DADO LIKE
                post.reactions.likes.push(currentUser);
            } else { // ELIMINAR EL LIKE
                post.reactions.likes.splice(found, 1);
            }

            
            localStorage.setItem('postsCollection', JSON.stringify(updatedPosts));
            setPostCollection(updatedPosts);
            setCurrentPost(post);
        }
    };

    return (
        <>
            <div className="w-full bg-transparent text-white border-l border-r border-custom-gray">
                <div className="content p-8">
                    <div className="flex items-start">
                        <img className="w-12 h-12 rounded-full" src={currentPost.userProfilePic} alt="User avatar" />
                        <div className="ml-4">
                            <Link to={"/app/" + currentPost.user.replace("@", "")}>
                                <div className="flex items-center">
                                    <h2 className="font-bold text-lg">{currentPost.userName}</h2>
                                    <span className="text-gray-400 text-sm ml-2">{currentPost.user} - {currentPost.postDate}</span>
                                </div>
                            </Link>
                            <p className="text-gray-300">{currentPost.postDescription}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <img className="w-full h-auto rounded-xl border-2" src={currentPost.urlImage} alt="Posted image" />
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-8">
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="/assets/img/postActions/comments.svg" alt="comments" />
                                <span>{currentPost.reactions.comments.length}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="/assets/img/postActions/retweet.svg" alt="retweet" />
                                <span>{currentPost.reactions.retweets.length}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500" onClick={handleClickLike}>
                                <img src="/assets/img/postActions/like.svg" alt="like" />
                                <span>{currentPost.reactions.likes.length}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
                                <img src="/assets/img/postActions/stats.svg" alt="stats" />
                                <span>{currentPost.reactions.scope.length}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

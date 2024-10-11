import React, { useState, useEffect } from "react";
import { PostComponent } from "./PostComponent";
import { RightBarComponent } from "./RightBarComponent";
import moment from "moment";

export const HomeComponent = () => {

    const [postDescription, setPostDescription] = useState({ postDescription: '' });
    const [postsCollection, setPostsCollection] = useState([]);
    const userSession = JSON.parse(localStorage.getItem('userSession'));

    useEffect(() => {
        
        const storedPosts = JSON.parse(localStorage.getItem('postsCollection')) || [];
        const sortedPosts = storedPosts.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
        setPostsCollection(sortedPosts);

    }, []);

    const handleChangeField = (e) => {
        const { name, value } = e.target;
        setPostDescription((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handlePost = (e) => {
        e.preventDefault();

       
        const today = moment().format('YYYY-MM-DD HH:mm:ss');
        const id =  Math.floor(Math.random() * 9999) + 1;

        const postObject = {
            id:id,
            user: userSession.user,
            userName: userSession.userName,
            userProfilePic: userSession.profilePic,
            urlImage: "https://loremflickr.com/150/50",
            postDescription: postDescription.postDescription,
            postDate: today,
            reactions: {
                comments: [],
                retweets: [],
                likes: [],
                scope: []
            }
        };

        // UPDATE THE POST LIST WITH THE NEW
        const updatedPosts = [postObject, ...postsCollection];
       
        const sortedPosts = updatedPosts.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
        
        localStorage.setItem('postsCollection', JSON.stringify(sortedPosts));
        setPostsCollection(sortedPosts);

        
        setPostDescription({ postDescription: '' });
    }

    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-8 border-l border-custom-gray h-screen mt-0">
                    <div className="grid grid-cols-2">
                        <div className="col-span-12 sticky top-0">
                            <div role="tablist" className="tabs tabs-bordered backdrop-blur-sm bg-black/30 text-white">
                                <a role="tab" className="tab">Para ti</a>
                                <a role="tab" className="tab tab-active font-extrabold">Siguiendo</a>
                            </div>
                        </div>
                        <div className="col-span-12 border-b border-custom-gray">
                            <div className="postContainer w-full">
                                <div className="card w-full">
                                    <form onSubmit={handlePost}>
                                        <div className="card-body flex flex-row w-full items-center">
                                            <img
                                                src={userSession.profilePic}
                                                alt=""
                                                width={"10%"}
                                            />
                                            <input
                                                type="text"
                                                name="postDescription"
                                                value={postDescription.postDescription}
                                                onChange={handleChangeField}
                                                className="input w-full bg-transparent focus:outline-none focus:ring-0 focus:border-transparent text-white"
                                                placeholder="¡¿Qué está pasando?!"
                                                required
                                            />
                                        </div>
                                        <div className="flex justify-start ml-28 gap-4 mb-4 items-center">
                                            <img src="assets/img/actions/upload-image.svg" alt="" />
                                            <img src="assets/img/actions/upload-image-gif.svg" alt="" />
                                            <img src="assets/img/actions/option-text.svg" alt="" />
                                            <img src="assets/img/actions/emoji-action.svg" alt="" />
                                            <img src="assets/img/actions/calendar-action.svg" alt="" />
                                            <img src="assets/img/actions/location-action.svg" alt="" />
                                            <button type="submit" className="btn bg-custom-blue text-custom-gray rounded-full ml-auto mr-10">
                                                Postear
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* FEED */}
                        {postsCollection.map((post, index) => (
                            <div key={index} className="col-span-12 flex justify-center">
                                <PostComponent postProperties={post} />
                            </div>
                        ))}
                        {/* FEED */}
                    </div>
                </div>
                <div className="col-span-4 border-l border-custom-gray h-screen mt-0 flex flex-col items-center p-6">
                    <RightBarComponent />
                </div>
            </div>
        </>
    );
};

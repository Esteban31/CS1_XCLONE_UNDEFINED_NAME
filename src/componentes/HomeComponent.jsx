import React from "react";

import { PostComponent } from "./PostComponent";
import { RightBarComponent } from "./RightBarComponent";

import { postCollection } from "../../Database/post";

export const HomeComponent = () => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-8 border-l border-custom-gray h-screen mt-0">
                    <div className="grid grid-cols-2">
                        <div className="col-span-12 sticky top-0">
                            <div role="tablist" class="tabs tabs-bordered backdrop-blur-sm bg-black/30 text-white">
                                <a role="tab" class="tab">
                                    Para ti
                                </a>
                                <a role="tab" class="tab tab-active font-extrabold">
                                    Siguiendo
                                </a>
                            </div>
                        </div>
                        <div className="col-span-12 border-b border-custom-gray">
                            <div className="postContainer w-full">
                                <div className="card w-full">
                                    <div className="card-body flex flex-row w-full items-center">
                                        <img
                                            src="assets\img\userProfilePic.svg"
                                            alt=""
                                            width={"10%"}
                                        />
                                        <input
                                            type="text"
                                            class="input w-full bg-transparent focus:outline-none focus:ring-0 focus:border-transparent text-white"
                                            placeholder="¡¿Qué está pasando?!"
                                        />
                                    </div>
                                    <div className="flex justify-start ml-28 gap-4 mb-4 items-center">
                                        <img src="assets\img\actions\upload-image.svg" alt="" />
                                        <img src="assets\img\actions\upload-image-gif.svg" alt="" />
                                        <img src="assets\img\actions\option-text.svg" alt="" />
                                        <img src="assets\img\actions\emoji-action.svg" alt="" />
                                        <img src="assets\img\actions\calendar-action.svg" alt="" />
                                        <img src="assets\img\actions\location-action.svg" alt="" />
                                        <button className="btn bg-custom-blue text-custom-gray rounded-full ml-auto mr-10">
                                            Postear
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* FEED */}
                        {postCollection.map((post, index) => (
                            <div className="col-span-12 flex justify-center">
                                <PostComponent postProperties={post} />
                            </div>
                        ))}
                        {/* FEED */}


                    </div>
                </div>
                <div className="col-span-4 border-l border-custom-gray h-screen mt-0 flex flex-col items-center p-6">
                    <RightBarComponent/>
                </div>
            </div>
        </>
    );
};

import React from 'react'

export const HomeComponent = () => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-8 border-l border-custom-gray h-screen mt-0">
                    <div className="grid grid-cols-2">
                        <div className="col-span-12">
                            <div role="tablist" class="tabs tabs-bordered">
                                <a role="tab" class="tab">Para ti</a>
                                <a role="tab" class="tab tab-active font-extrabold">Siguiendo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 border-l border-custom-gray h-screen mt-0 flex justify-center">
                    <label class="input input-bordered flex items-center rounded-full w-3/4">
                        <input type="text" class="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70">
                            <path
                                fill-rule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>
        </>
    )
}

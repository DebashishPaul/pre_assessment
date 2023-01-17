import React from 'react'
import baloon from "../assets/baloon.jpg";

const NotFound = () => {
    return (
        <div>
            <div className="bg-bg-default bg-cover h-screen px-10 py-10" style={{ backgroundImage: `url(${baloon})` }}>
                <p class="text-white text-4xl tracking-widest	">Take me home</p>
                <div className="">
                    <p class="text-5xl text-center text-white yx-50 tracking-widest	my-10">404<br />Not Found</p>
                    <p class="text-2xl text-center text-white yx-50">Sorry, the page you are looking for <br /> does not exist, or was moved</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound

import React from 'react';
import Logo from "../assets/logo-text.png"

const nav = () => {
    return (
        <nav className='flex justify-between mt-3 mb-3 container mx-auto w-10/11 items-center sticky top-0 z-50'>
            <img src={Logo} alt="" />

            <ul className=' flex gap-4'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>


            <div className='flex gap-2'>
                <button className="">Sign In</button>
                <button className="rounded-4xl bg-[#D91B7E] text-white m-2 px-5 py-1.5">Sign Up</button>
            </div>


        </nav>
    );
};

export default nav;
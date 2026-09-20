import React from 'react';
import Logo from "../assets/logo-text.png"

const nav = () => {
    return (
        <nav className='flex justify-between mt-3 mb-3 container mx-auto w-10/11 items-center sticky top-0 z-50 bg-white'>
            <img src={Logo} alt="" />

            <ul className=' flex gap-6'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>


            <div className='flex gap-2'>
                <button className="">Sign In</button>
                <button  className="rounded-4xl bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-4 py-2 text-sm font-medium text-white">Sign Up</button>
            </div>


        </nav>
    );
};

export default nav;
import React from "react";
import Logo from "../assets/logo-text.png";

const fotter = () => {
  return (
    <div className="container mx-auto w-10/11">
      <div  className="flex justify-between items-center mb-10">
        <div>
          <img src={Logo} alt="" />
          <p className="mt-4 mb-4">
            Curated tools, technologies, and resources for developers building
            <br></br>
            modern software.
          </p>
          <ul className="flex gap-4 ">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
            <ul>
                <li className="font-extrabold mb-4">PRODUCT</li>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className="font-extrabold mb-4">COMPANY</li>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className="font-extrabold mb-4">LEGAL</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
               
            </ul>
        </div>
        
      </div>

{/* -------------------------------------gap line --------------------------------------- */}

      <div class="divider"></div>




      <div className="flex justify-between items-center mb-10 mt-10">
        <p className=" text-[#94A3B8]">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <ul className="flex gap-4">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default fotter;

import React from "react";
import TechCard from "./techCard"
import Yourstack from "./yourstac";

const allStack = ({ tech }) => {
  console.log(tech, "tech from all tech");
  return (

    <div>

        <h2>Explore the Technologies</h2>
        <p>Pick one technology per category to build your ideal stack.</p>
         

         <div className="flex gap-5">


            <div className="grid grid-cols-3 gap-5" >
       
      {tech.map((tech) => {
        return (
     <TechCard key={tech.id} tech={tech}/>
        );
      })}
    </div>

    <div>


        <Yourstack/>


    </div>



         </div>




    </div>





    





  );
};

export default allStack;

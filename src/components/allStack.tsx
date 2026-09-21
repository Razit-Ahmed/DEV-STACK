import React, { type Dispatch, type SetStateAction } from "react";
import TechCard from "./techCard"
import Yourstack from "./yourstac";
import type { Itech } from "../types/techType";
interface IAllTechProps{
    tech:Itech[];
    selectedTech : Itech[];
    setSelectedTech: Dispatch<SetStateAction<Itech[]>>

}

const allStack = ({ tech ,selectedTech,setSelectedTech, }) => {
  console.log(tech, "tech from all tech");
  return (

    <div>

        <h2>Explore the Technologies</h2>
        <p>Pick one technology per category to build your ideal stack.</p>
         

         <div className="flex gap-5">


            <div className="grid grid-cols-3 gap-5" >
       
      {tech.map((tech) => {
        return (
     <TechCard key={tech.id} tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
        );
      })}
    </div>

    <div>


        <Yourstack selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>


    </div>



         </div>




    </div>





    





  );
};

export default allStack;

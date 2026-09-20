import React from "react";
import TechCard from "./techCard"

const allStack = ({ tech }) => {
  console.log(tech, "tech from all tech");
  return (





    <div className="grid grid-cols-3 gap-5" >
       
      {tech.map((tech) => {
        return (
     <TechCard key={tech.id} tech={tech}/>
        );
      })}
    </div>





  );
};

export default allStack;

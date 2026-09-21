import React, { use, useState } from "react";
import type { Itech } from "../types/techType";
import AllStack from "./allStack";

interface TechProps {
  techPromise: Promise<Itech[]>;
}

const tech = ({ techPromise }: TechProps) => {
  console.log(techPromise);
  const tech = use(techPromise);

  const [selectedTech,setSelectedTech]=useState<Itech[]>([]);

  

  return(
    <div className="container mx-auto w-10/11">
        
    <div><AllStack tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech} /></div>

    <div></div>
   </div>
  )
   
};

export default tech;

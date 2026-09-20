import React, { use } from "react";
import type { Itech } from "../types/techType";
import AllStack from "./allStack";

interface TechProps {
  techPromise: Promise<Itech[]>;
}

const tech = ({ techPromise }: TechProps) => {
  console.log(techPromise);
  const tech = use(techPromise);

  return(
    <div className="container mx-auto w-10/11">
        {/* all tech */}
    <div><AllStack tech={tech}/></div>

    {/* selected tech */}

    <div></div>
   </div>
  )
   
};

export default tech;

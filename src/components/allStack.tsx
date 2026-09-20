import React from 'react';

const allStack = ({tech}) => {
    console.log(tech,"tech from all tech")
    return (
        <div>
            {
                tech.map((tech)=>{
                    return <div>
                        {tech.name}
                    </div>

                })
            }
            
        </div>
    );
};

export default allStack;
import type { ReactNode } from "react";
import React from "react";

type PropType={
    count:number,
    inc:()=>void
    dec:()=>void
    reset:()=>void
}

class Show extends React.Component<PropType>{
    
    render(): ReactNode {
        const {count,inc,dec,reset}=this.props
        return(
            <>
               <h2>Count: {count}</h2>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
            <button onClick={reset}>RESET</button>
            </>
        )
    }
}

export default Show
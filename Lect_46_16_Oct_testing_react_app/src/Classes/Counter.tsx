import React from "react";
import Show from "./Show";

type StateType={
    count:number
}

class Counter extends React.Component<{},StateType>{

    state:StateType ={
        count:0
    }

    inc=()=>{
        this.setState(pre=>({count:pre.count+1}))
    }
    dec=()=>{
        this.setState(pre=>({count:pre.count-1}))
    }
    reset=()=>{
        this.setState({count:0})
    }
    handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({count:+event.target.value})
    }
 
    render(): React.ReactNode {
        return (
            <>
            <h2>Counter:</h2>
            <Show
                count={this.state.count}
                inc={this.inc}
                dec={this.dec}
                reset={this.reset}
            />
            <input type="text" placeholder="Enter Count" value={this.state.count} onChange={this.handleChange}/>
            {/* <h2>{this.state.count}</h2>
            <button onClick={this.inc}>INC</button>
            <button onClick={this.dec}>DEC</button>
            <button onClick={this.reset}>RESET</button> */}
            </>
        )
    }
}

export default Counter
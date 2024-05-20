import React, { useState } from "react";


function FunctionComponent(props) {
    const [changeName, setChangeName] = useState("");

    const [count,setCount] = useState(0);
    const reduceCount = () =>{
        setCount(count - 1)
    }
    return(
        <div>
            <p>This is Functional components</p>
            <button onClick={()=>setCount(count+1)}  >Click me to increment/add by 1</button>
            <button onClick={reduceCount}  >Click me to decrement by 1</button>
            <h2>{count}</h2>
            
            <h4>My name is:<strong>{props.name}</strong> age is:<strong>{props.age}</strong>and like to play:<strong>{props.play}</strong></h4>
            <input onChange={(e)=>setChangeName(e.target.value)} />
            <button onClick={()=>props.setName(changeName)}>click me to change name..</button>
            {/* <button onClick={()=>props.seta}></button> */}
        </div>
    );
    
}

export default FunctionComponent;
import React, { useState } from "react";

const FunctionalComponent = ({name, age, company, setName, setNameConfig, nameConfig}) =>{
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("defaultName");
    const subtract = () => {
        setCount(count - 1);
    }
    // const {name, age, company, setName} = props;
    return (
        <div>
            <p> Functional Component</p>
            <button onClick={() =>setCount(count + 1)}>Click on me to Add +1 </button>
            <button onClick={subtract}>Click on me to Sub -1 </button>
            <h1>{count}</h1>
            <h1>My name is {nameConfig}, I'm {age} and I work for {company}</h1>
            <input type="text" onChange={(e)=>setChangeName(e.target.value)}/>
            <button onClick={()=> setNameConfig(changeName)}>Change Name</button>
            <button onClick={()=> setNameConfig("DevTown") }>Change name to DevTown</button>
            <button onClick={()=> setNameConfig("OpsJob") }>Change name to OpsJob</button>
            </div>
        // <div>
        //     <p> Functional Component</p>
        //     <button onClick={() =>setCount(count + 1)}>Click on me to Add +1 </button>
        //     <button onClick={subtract}>Click on me to Sub -1 </button>
        //     <h1>{count}</h1>
        //     <h1>My name is {props.name}, I'm {props.age} and I work for {props.company}</h1>
        //     <input type="text" onChange={(e)=>setChangeName(e.target.value)}/>
        //     <button onClick={()=> props.setName(changeName)}>Change Name</button>
        //     <button onClick={()=> props.setName("Kinnal") }>Change name to kinnal</button>
        //     </div>
    )
}


export default FunctionalComponent;
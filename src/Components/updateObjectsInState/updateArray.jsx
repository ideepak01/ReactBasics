import React, { useState }from "react";

const UpdateArray = ()=>{
    const [food,setFood] = useState(['Apple','Mango'])
    const addFood=()=>{
        const addFood= document.getElementById('foodInput').value
        document.getElementById('foodInput').value=''
        setFood(    [...food,addFood])
    }
    const handleRemove = (index)=>{
        setFood(f=>(f.filter((_,i)=>i!==index)))
    }

    return(
        <>
        <h4>List of Foods:</h4>
        <ul>
            {food.map((food,index)=>
                <li key={index} onClick={()=>handleRemove(index)}>{food}</li>
            )}
        </ul>
        <input type="text" id="foodInput" />
        <button onClick={addFood}> Add</button>

        </>
    )
}

export default UpdateArray;
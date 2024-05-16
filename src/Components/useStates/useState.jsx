import React, {useState} from "react";

function useStateDemo(){
    const  [name,setName] = useState('Deepak')
    const updateName=()=>{
        setName('Tony Stark')
        console.log(name)
    }
    const [arr,setArray] = useState(['Apple','Mango','Banana'])

    return(<>
        <h5>Name: {name} </h5>
        <button onClick={updateName}>set name</button>

        <h5>Array: {arr}</h5>
        <button onClick={()=>{

            setArray(arr=> arr+['grapes','cherries']
            )
        }}> setArray</button>
        </>
    )
}

export default useStateDemo;
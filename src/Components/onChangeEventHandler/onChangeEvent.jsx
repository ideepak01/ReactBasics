import React, {useState} from "react";

function ChangeFunc(){
    const  [name,setName] = useState('Deepak')
    const [age,setAge] = useState()
    const [car,setCar] = useState()
    const updateName=(event)=>{
        setName(event.target.value)
    }
    const updateCar=(event)=>{
        // console.log(event.target.value)
        setCar(event.target.value)
        console.log(car)
    }

    return(<>
        <input type="text" value={name} onChange={updateName}/>
        <h5>Name: {name} </h5>
        <input type="number" value={age} onChange={(event)=>{
            setAge(event.target.value)
            console.log(age)
        }} />
        <h5>Age: {age}</h5>
        <label >Choose a car:</label>
        <select value={car} onChange={updateCar}>
            <option value="volvo">Volvo</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="tata">TATA</option>
        </select>
        <p>car : {car}</p>
        
        </>
    )
}

export default ChangeFunc;
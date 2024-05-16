import React, {useState} from "react";

 const UpdateObj= ()=>{

    const [car,setCar] = useState({name:"ford", year:2024, model:"Mustang"})
    const onCarNameChange = (event)=>{
        setCar({...car,name:event.target.value})
    }

    const onCarYearChange = (event)=>{
        setCar({...car,year:event.target.value})
    }

    //using Updater function
    const onCarModelChange = (event)=>{
        setCar(c=>({...car,model:event.target.value}))
    }

    return(
        <>
            <p>Your Favourite car is:{car.name},{car.year},{car.model}</p>

            <label>Car</label>
            <input type="text" value={car.name} onChange={onCarNameChange}/>

            <label>Year</label>
            <input type="number" value={car.year} onChange={onCarYearChange}/>

            <label>Model</label>
            <input type="text" value={car.model} onChange={onCarModelChange}/>


        </>
    )

}

export default UpdateObj;
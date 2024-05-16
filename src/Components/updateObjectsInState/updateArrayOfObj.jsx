import React, {useState} from "react";

function UpdateArrayOfObj(){
 const [cars,setCar] = useState([
    {name:"BMW",year:2024,ordQty:100},
    {name:"Audi",year:2024,ordQty:200},
    {name:"Nexon",year:2024,ordQty:300}
])
const addData=()=>{
    const name= document.getElementById('name').value;
    const year= document.getElementById('year').value;
    const ordQty = document.getElementById('ordQty').value;
    setCar(c=>[...c,{name:name,year:year,ordQty:ordQty}])

}

const handleRemove = (index)=>{
    setCar(c=>c.filter((_,i)=>i!==index))
}

return(
    <> 
    <h4>List of cars</h4>
    <ul>
        {cars.map((car,index)=>{return <li key={index} onClick={()=>handleRemove(index)}>{car.name}{car.year}{car.ordQty}</li>})}
    </ul>
    <input type="text" placeholder="CarName" id="name"/>
    <input type="number" placeholder="year" id="year" />
    <input type="number" placeholder="order quantity" id="ordQty"/>
    <button onClick={addData}>Add</button>
    </>
)
}

export default UpdateArrayOfObj;
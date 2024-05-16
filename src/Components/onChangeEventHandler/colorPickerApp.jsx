import React,{useState} from "react";
import './colorPicker.css'

function ColorPicker(){

    const [color,setColor]=useState('#d71919')

   const updateColor=(event)=>{
        setColor(event.target.value)
    }

    return(
        <div className="setMargin">
            <div style={{backgroundColor:color}} className="colorPicker">               
            </div>
            <span style={{marginRight:"1em"}}>Select color</span>
            <input type="color" value={color} onChange={updateColor} />
            <p>color: {color}</p>
        </div>
    )
}

export default ColorPicker
import React,{useState} from "react";
import './updaterFunc.css';

function UpdaterFunc(){
    const [count,setCount] = useState(0)

    return(
        <>
        <div className="counterApp">
        <h2>Counter</h2>
        <h4>{count}</h4>
        
            <button onClick={()=>{
                setCount(count-1)
            }}>-</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>

            {/* // updater func to update increment by 2 */}
            <button onClick={()=>{
                setCount(c => c+1)
                setCount(c => c+1)
            }}>+</button>
            </div>
        
        </>
        
    )

}

export default UpdaterFunc;
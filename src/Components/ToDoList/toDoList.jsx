import React,{useState} from "react";
import './toDoList.css';

function ToDoList(){
    const [addTask,setAddTask ]= useState(['Wake up by 5am', 'Do  Exercises','Journal daily'])

    const addTaskHandler=()=>{
        const newTask = document.getElementById('newTask').value;
        if(newTask.trim('')!=='')
            setAddTask(a=>[...a,newTask])
        else
            console.log('Please enter task')
    }
    const onDeleteHandler=(index)=>{
        setAddTask(a=>(a.filter((_,i)=>index!==i)))
    }

    return(
        <>
        <div className="toDoList">
            <h4 className="title">To Do List</h4>
        <input className="input" type="text"placeholder="Add Task" id="newTask" />
        <button className="addButton" onClick={addTaskHandler}>Add</button>
        <ul className="ul" >
            {addTask.map((task,index)=>
               
            <li className="li" key={index}>
                <span className="text">{task}</span>
                 <button onClick={()=>onDeleteHandler(index)}>Delete</button>
                 <button>👆</button>
                 <button>👇</button>
                  </li>
            
            
                
            )}
        </ul>
        </div>
        </>
    )
}

export default ToDoList;
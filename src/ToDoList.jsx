import React,{useState} from "react"
import deletePic from "./assets/delete.png"
import upPic from "./assets/up-arrow.png"
import downPic from "./assets/down-arrow.png"
import addPic from "./assets/add.png"

function ToDoList(){
    const [tasks,setTasks]=useState([])
    const [newtask,setNewtask]=useState("")
    const [SuccessText,setSuccessText]=useState(false)

    function addTask(){
        if(newtask.trim()!==""){
            setTasks(t=>[...t,newtask])
            setNewtask("")
            setSuccessText(true)
        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=>i!==index))
    }
    function moveUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function moveDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    
    return(
        <div className="to-do-list">
            <h1>ToDo List📝</h1>
            <div className="inputData">
                <input type="text" value={newtask} onChange={(e)=>setNewtask(e.target.value)} placeholder="Enter a task..."/>
                <img src={addPic} className="add-button" onClick={addTask}/>
            </div>
            {SuccessText && <p>task Added Successfully...!</p>}
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text"> {task}</span>
                    <img src={deletePic} className="delete-button" onClick={()=>deleteTask(index)}/>
                    <img src={upPic} className="move-button" onClick={()=>moveUp(index)}/>
                    <img src={downPic} className="move-button" onClick={()=>moveDown(index)}/>
                </li>)}
            </ol>
        </div>
    )
}
export default ToDoList
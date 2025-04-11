import { useState } from "react"

function Todo(){


const [task, setTask] = useState("")  //this is for dynamic Tasks
const [todo, setTodo] = useState([]) //this is for capturing the Todo's in a list



const changeHandler = (e) =>  {
    setTask(e.target.value)
}

const submitHandler = (e) => {
   e.preventDefault()
   const newTodos = [...todo, task]  //capturing previous todo's and new task, it will have list of todo's
   setTodo(newTodos)
   setTask("")  //after entering the task, and click add button, textbox should show empty
}

const deleteHandler = (indexValue) => {
   const newTodos = todo.filter((todo, index) => index !==  indexValue)
   setTodo(newTodos)
}

    return (
       
       <div className="card"> 
       <div className="card-body"> 
        <h5 className="card-title"> Todo Manamgement Application  </h5>
        <form onSubmit= {submitHandler} > 
            <input size = "60" type="text" name = "task" value = {task} onChange={changeHandler} placeholder="Please Enter Todo's"/> &nbsp; &nbsp;
            <button type = "submit" name="add" value = "add"> Add  </button>
            </form>
            <ul>
            {todo.map((todo,index) => (
              <li key = {index}> {todo} &nbsp; <button onClick = {()=> deleteHandler(index)} > Delete </button>  </li> 
           ) )}

            </ul>
   

        </div>
        </div>
    )

}
export default Todo
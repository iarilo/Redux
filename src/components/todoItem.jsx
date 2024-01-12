import { useDispatch } from "react-redux";
import { removeTodo,toggleCompleted } from "../store/todoSlice";

const TodoItem = ({id, text, completed}) => {
const dispath = useDispatch()
   return (
    <li>
     <input className="checkbox"  type="checkbox"    checked={completed}
        //onChange={()=> dispath(toggleCompleted({id}))}
          onChange={()=> dispath(toggleCompleted({id}))}
       />
     <span className="span_text">{text}</span>
     <span className="delete" onClick ={() => dispath( removeTodo({id}))} >&times;</span>
    </li>
   )
}

export default TodoItem


// type="checkbox" checked={completed} 


















/*
                       // Вариант с Redux
const TodoItem = ({id,text,completed}) => {
  const dispath = useDispatch()
   return (
  <li>
      <input  className="checkbox"  type="checkbox" 
       checked={completed} onChange={()=> dispath(toggleCompleted({id}))}
        />
      <span className="span_text">{text}</span>
      <span className="delete" onClick={()=> dispath(removeTodo({id}))}>&times;</span>
  </li>
)
}

export default TodoItem
*/

/*
                            // Вариант без Redux
 const TodoItem = ({id,text,completed,removeTodo,toggleCompleted}) => {
    return (
    <li>
        <input  className="checkbox"  type="checkbox" 
         checked={completed} onChange={()=> toggleCompleted(id)}
          />
        <span className="span_text">{text}</span>
        <span className="delete" onClick={()=> removeTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem
*/
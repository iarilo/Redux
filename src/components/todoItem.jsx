import { useDispatch } from "react-redux";
import { toggleCompleted } from "../store/todoSlice";
import { deleteTodo,toggleStatus } from "../store/action";

 // Вариант с вариантом  удаления  createAsyncThunk
 const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span className="span_text">{title}</span>
      <span className="delete" onClick={() => dispatch(deleteTodo(id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;

// type="checkbox" checked={completed}

// .........................................................

/*
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../store/todoSlice";

  // Вариант с Базовый вариантом  createAsyncThunk
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleted({ id }))}
      />
      <span className="span_text">{title}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;

*/
// ..........................................................

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

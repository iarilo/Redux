// Вариант с Redux
import TodoItem from "./todoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const allTodo = useSelector((ell) => ell.todoReduxer.todos);

  return (
    <ul>
      {allTodo.map((ell) => (
        <TodoItem key={ell.id} {...ell} />
      ))}
    </ul>
  );
};
export default TodoList;

/*
const TodoList = ({}) => {
 //Получаю все ключи из объкта todos:[],который находится в срезе  
// state - Это хранилище Stor
  const todoList = useSelector( state => state.todosConfigStore.todos);
  return (
    <ul>
    {
      todoList.map((ell) => <TodoItem  key={ell.id} {...ell}/>)
    }
    </ul>
  )
}
export default TodoList
*/

/*
                            // Вариант без Redux
import TodoItem from "./todoItem"
const TodoList = ({todos,removeTodo,toggleCompleted }) => {
  return (
    <ul>
      {
      todos.map((ell)=> <TodoItem key={ell.id}
      removeTodo={removeTodo}
      toggleCompleted={toggleCompleted}
      {...ell}/>
    )
      }
    </ul>
  )
}
export default TodoList
*/

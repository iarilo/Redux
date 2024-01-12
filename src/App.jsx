import { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import InputField from "./components/inputField";
import Counter from "./components/counter";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "./store/todoSlice";
import {setIsLogout} from'./store/countSlice'





function App() {
  const [text, setText] = useState('');
   const dispath = useDispatch()
  // ---------------------------
  const  timetState =  useSelector(ell => ell.timerReducer.showBooton)

   // --------------------------
  const toggleTodo = () => {
    dispath(addTodos({text}))
    setText('')
  }

  return (
    <div className="App">
      <h3>Redux - todos</h3>
      <InputField text={text} setText={setText} toggleTodo={toggleTodo} />
      <TodoList />
      {/* Таймер */}
      <button className="button_loading"  
        onClick={()=> dispath(setIsLogout())}
        >показать</button>
      {timetState && <Counter />} 
    </div>
  );
}
export default App;













//-----------------------

/*
function App() {
  const [text, setText] = useState("");
  const dispath = useDispatch();
  const isLogout = useSelector((state) => state.countReducer.completed);
  //Taimer
  const [isLogout, setIsLogout] = useState(false);

  const toggleButton = () => {
    dispath(setIsLogout());
  };

  const allTodo = () => {
    dispath(addTodos({ text }));
    setText("");
  };
  return (
    <div className="App">
      <h3>Redux - todos</h3>
      <InputField />
      <TodoList />
      // Таймер 
      <button className="button_loading">показать</button>
      <Counter />
    </div>
  );
}
export default App;

*/
// ------------------------------------------

/*
                               // Вариант с Redux
function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
     dispatch(addTodos({text:text}))
    setText('')// Очистка поля для ввода
    };

  return (
    <div className="App">
      <h3>Redux - todos</h3>
      <InputField text={text} handleSubmit={addTask} handleInput={setText} />

      <TodoList />
    </div>
  );
}
export default App;
*/

/*
                                  // Вариант без Redux
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
 

  const addTodos = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text: text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <h3>Redux - todos</h3>

      <InputField text={text} handleSubmit={addTodos} handleInput={setText} />

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default App;

*/

import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import InputField from "./components/inputField";
import Counter from "./components/counter";
import { useDispatch, useSelector } from "react-redux";
//import { addTodos } from "./store/todoSlice";
import { setIsLogout } from "./store/countSlice";
//  .........  createAsyncThunk  .......
import { fetchTodos, allNewTodo } from "./store/action";
// .........................

function App() {
  const [text, setText] = useState("");
  const dispath = useDispatch();
  // -------------- Timer  -------------
  const timetState = useSelector((ell) => ell.timerReducer.showBooton);
  // --------------------------

  //  .........  createAsyncThunk  .......
 const { error,status } = useSelector( ell => ell.todoReducer)
// .........................

//  .........  Redux   createAsyncThunk  .......

const toggleTodo = () => {
  if (text.trim().length) {
   dispath(allNewTodo(text)) 
   setText('')
  }
}
/*
// Базовый вариант
   const toggleTodo = () => {
if (text.trim().length) {
    dispath(addTodos({ text }));
    setText("");
 };
};
*/
// .........................................

    // .........  createAsyncThunk  ......
  useEffect(() => {
    dispath(fetchTodos())
  },[dispath])
  // Вызываю action из todoSlice
  
  // .....................................

  return (
    <div className="App">
      <h3>Redux - todos</h3>
      <InputField text={text} setText={setText} toggleTodo={toggleTodo} />
    
           {/* .....  createAsyncThunk  ... */}
         {status === 'loading' &&  <h2>Идёт загрузка</h2> }
         {error && <h2>произошла ошибка: {error}</h2>} 
 
             {/* ............................... */}


        <TodoList /> 
      {/* Таймер */}
      <button className="button_loading" onClick={() => dispath(setIsLogout())}> 
       показать
      </button>
      {timetState && <Counter />} 
        
    </div>
  );
}
export default App;

//-----------------------

// useEffect(() => {
//   dispath(fetchTodos());
// },[dispath]);

//const {status, error} = useSelector(state => state.todoReduxer)
// {status === 'loading' && <h2>Идёт загрузка</h2>}
// {error && <h2 >Произошла ошибка: {error}</h2>} 










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

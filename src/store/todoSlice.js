import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoName",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((ell) => ell.id !== action.payload.id);
    },

    toggleCompleted(state, action) {
      const toggleTodo = state.todos.find(
        (ell) => ell.id === action.payload.id
      );
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});

export const { addTodos, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;

// addTodos() {},
// removeTodo() {},
// toggleCompleted() {},
//completed:

/*
import { createSlice } from "@reduxjs/toolkit";
// Вариант с Redux
const todoSlice = createSlice({
  // название slice
  name: "todosName",
  // Изначальное состояние с которым надо работать
  initialState: {
    //todos  равносильно  const [todos, setTodos] = useState([]);
    todos: [],
  },
  reducers: {
    //  state - Это хранилище Store
    //  action - Это вызов для изминения состояния,
    addTodos(state, action) {
      //  console.log("state: ", state);
      //  console.log("action: ", action);
      // добавляю новый элемент в state    todos: []
      state.todos.push({
        id: new Date().toISOString(),
        // action через payload получает text из формы
        text: action.payload.text,
        completed: false,
      });
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((ell) => ell.id !== action.payload.id);
    },

    toggleCompleted(state, action) {
      const togleTodo = state.todos.find((ell) => ell.id === action.payload.id);
      togleTodo.completed = !togleTodo.completed;
    },
  },
});

// Возврощаю action bp todoSlice (функция которое вносит изминения в UI)
export const { addTodos, toggleCompleted, removeTodo } = todoSlice.actions;
// Экспортирую один Редюсер
export default todoSlice.reducer;
*/

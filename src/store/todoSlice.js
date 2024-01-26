// createAsyncThunk - Асинхронные запросы
import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, deleteTodo, toggleStatus, allNewTodo } from "./action";

const setError = (state, action) => {
  (state.status = "rejected"), (state.error = action.payload);
  state.todos = [];
};

const todoSlice = createSlice({
  name: "nameTodo",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
//  .........  Redux   createAsyncThunk  .......
    addTodos(state, action) {
      state.todos.push(action.payload);
    },


    removeTodo(state, action) {
      state.todos = state.todos.filter((ell) => ell.id != action.payload.id);
    },
    toggleCompleted(state, action) {
      const toggle = state.todos.find((ell) => ell.id === action.payload.id);
      toggle.completed = !toggle.completed;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      (state.status = "loading"), (state.error = null);
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      (state.status = "resolved"), (state.todos = action.payload);
    });

    builder.addCase(fetchTodos.rejected, setError);
    builder.addCase(deleteTodo.rejected, setError);
    builder.addCase(toggleStatus.rejected, setError);
    builder.addCase(allNewTodo.rejected, setError);
  },
});

export const { addTodos, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;




//  ..........................................................

/*
import { createSlice, isRejected } from "@reduxjs/toolkit";

// const setError = (state, action) => {
//   state.status = "rejected";
//   state.error = action.payload;
//   state.todos = [];
// };

// ..........................................

const todoSlice = createSlice({
  name: "todoName",
  initialState: {
    todos: [],
    status: null,
    error: null,
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
  // extraReducers отдельный слой для работы с createAsyncThunk
  extraReducers: (builder) => {
    // fetchTodos.pending  -  до получения данных
    builder.addCase(fetchTodos.pending, (state) => {
      //Подключаю   loading (загрузка) если нет ошибки
      state.status = "loading";
      // Если есть ошибка
      state.error = null;
    });
    // fetchTodos.fulfilled - После получения данных
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      // Статус загрузки
      state.status = "resolved";
      // Получаю данные  в state todos[]
      if (state.status != "resolved") {
        rejected();
      } else {
        state.todos = action.payload;
      }
    });
 


    // ........................
    
    //fetchTodos.rejected - Ошибка
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
      // const data = (state.error = action.payload);
      // console.log("data; ", data);
    });
    

    //fetchTodos.rejected - Ошибка
    builder.addCase(fetchTodos.rejected, setError);
  },

  // ...........................
});

export const { addTodos, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;

*/

//    ...................................................

/*
       // Вариант с redux-persist   

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

*/
// ................................................................

/*
                        // Вариант  @reduxjs/toolkit

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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeTodo, toggleCompleted, addTodos } from "./todoSlice";

// Базовый вариант
export const fetchTodos = createAsyncThunk(
  "fetchTodos/todos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      if (!response.ok) {
        throw new Error("данные не пришли");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// .........................................

// Удаление  из базы данных по id
export const deleteTodo = createAsyncThunk(
  "deleteTodo/todos",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Удаление не удалось, ошибка сервера");
      }
      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// .........................................
// Обновление ,изминения статуса

export const toggleStatus = createAsyncThunk(
  "toggleStatus/todos",
  async function (id, { rejectWithValue, dispatch, getState }) {
    // getState - получает данные из стэйта
    const completedTodo = getState().todoReducer.todos.find(
      (ell) => ell.id === id
    );
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // Изминяю статус
            completed: !completedTodo.completed,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("изминения не удались, ошибка сервера");
      }
      dispatch(toggleCompleted({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// .........................................
// Добавляю данные
export const allNewTodo = createAsyncThunk(
  "allNewTodo/todos",
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const newTodo = {
        userId: 1,
        title: text,
        completed: false,
      };

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTodo),
        }
      );
      if (!response.ok) {
        throw new Error("данные не добавлены");
      }
      const data = await response.json();
      dispatch(addTodos(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// .........................................

/*
// Action
// Фенкция получения пользователей
export const fetchTodos = createAsyncThunk(
  "fetchTodos/todos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );

      if (!response.ok) {
        throw new Error("Данные с сервера не пришли");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
*/

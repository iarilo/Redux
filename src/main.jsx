import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import storeAllReducer, { persistor } from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeAllReducer}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// -------------------------------------------------------

{
  /* Оборачиваю всё приложение в Provider что бы оно взаимодействовало с Store(хранилище)  */
}
{
  /* store={store}  Это  reducer из configureStore который принимает createSlice и actions: addTodos, toggleCompleted, removeTodo  */
}
/*


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// storeAction - любое название
//import storeAction from './store/index.js';
import App from "./App.jsx";
import "./index.css";
import storeTodo, { persistor } from "./store/index.js";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeAction}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
*/

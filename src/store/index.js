// Хранилище Store   и точка входа
/*
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,
REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
*/
//todoReduxerSlice - может называться по любому
//import todoReduxerSlice from'./todoSlice';
//import countReducerSlice from './countSlice'

// ------------------------------------------------

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import timerReducerStore from "./countSlice";
import todoReduxerSlice from "./todoSlice";

const rootReduser = combineReducers({
  todoReduxer: todoReduxerSlice,
  timerReducer: timerReducerStore,
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReduser);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

 export const persistor = persistStore(store);
 export default store;

/*
//rootReduser, persistConfig, persistedReducer, store, persistor
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
*/

/*

                //   Persist
  //  combineReducers - собирает все  Reducers             
const rootReduser = combineReducers({
    todoReduxer: todoReduxerSlice,
    timerReduxer: countReduxerSlice,
});

// persistConfig 
 const  persistConfig = {
    key: 'root',// для создания нескольких хранилищ
    storage: storage,
    //blacklist: ['navigation'],
    //whitelist: ['navigation']
};

// persistReducer - 
const persistedReducer = persistReducer(persistConfig, rootReduser) 

const store = configureStore({
    reducer: persistedReducer,
 //Базовый набор middleware -  Указывает на исключения   
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        // проверка для сериализации
      serializableCheck: {
        // Actions -  которые игнорируются и не обрабатываются в reduxjs/toolkit
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
// persistStore - Оборачивает и экспортирует  store со всеми Reducers для того что-бы приложение могло работать с redux-persist
export const persistor =  persistStore(store)
export default store;

*/

/*
                   //  Toolkit
  import { configureStore,} from "@reduxjs/toolkit";  
  import todoReduxerSlice from'./todoSlice';

export default configureStore({
  reducer: {
    todoReduxer: todoReduxerSlice,
 
  },
});
*/

/*
                   // Вариант с Redux
   // configureStore настраивает хранилище из наборов reducer             
        export default configureStore({
   // Каждый  reducer работает с своим срезом (slice)         
       reducer:{
    //todosConfigStore - любое название
                todosConfigStore: todoReduxerSlice,
                 countReducer: countReducerSlice
            }
        })
       */

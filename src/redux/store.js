import { combineReducers, configureStore } from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/lib/persistStore"
import storage from "redux-persist/lib/storage"

import notisReducer from "./Notis/notisSlice"
import planilleroReducer from "./Planillero/planilleroSlice"
import matchesReducer from "./Matches/matchesSlice"

const reducers = combineReducers({
    notis: notisReducer,
    planillero: planilleroReducer,
    match: matchesReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["notis", "planillero", "match",]
}

//al persist se le pasa como segundo parametro los reducers que va a consumir, y los que se guardan en localStorage son los incluidos en la whitelist
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)
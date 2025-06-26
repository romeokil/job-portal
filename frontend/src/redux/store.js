import { combineReducers,configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice.js"; // Import your slice reducer
import jobReducer from "./jobSlice.js"
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// ye purana store tha jb redux-persist ni daale the.
// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//     },
// });

// ab redux-persist add kr diye hai.

const rootReducer=combineReducers({
    auth:authReducer,
    job:jobReducer
});
const persistConfig={
    key:'root',
    version:1, // otherwise it will default take -1 as a version
    storage
}

const persistedReducer=persistReducer(persistConfig,rootReducer);

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
        })
})

// export default store;
export const persistor=persistStore(store);

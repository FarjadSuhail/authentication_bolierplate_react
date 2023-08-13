// import { createStore } from "redux";
import authSlice from "./slice/AuthSlice";
import { configureStore } from '@reduxjs/toolkit';

// if just 1 createSlice then use below method 
//const store = createStore(counterSlice.reducer); 

// for multiple -- for now use below 
// const store = configureStore({
//     reducer: counterSlice.reducer
// });
const store = configureStore({
    reducer: { 
        // counter: counterSlice.reducer,
        authentication: authSlice
    },    
});

// returns an action object of this shape:
    // {
    //     type: 'some auto generated unique identifer'
    // }
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;
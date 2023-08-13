import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async({username, password}) => {
        console.log(username);
        console.log(password);
        const res = await fetch('http://localhost:8080/api/user/login', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({username, password})
          })
          const json = await res.json();
          console.log(json)
        //   console.log()
          localStorage.setItem('user', JSON.stringify(json.data));
          return json;
    }
);

export const logoutUser = createAsyncThunk(
    'user/logout',
    async() => {
        localStorage.removeItem('user');
    }
)
const initialAuthState = {
    // isAuthenticated: false,
    loading: false,
    user: null,
    errror: null
}
console.log(initialAuthState);

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    extraReducers: (builder)=> {
        builder
         .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            state.user = action.payload;
            state.error = null;
         })
         .addCase(loginUser.rejected, (state, action) => {
            console.log(action);
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            // if(action.error.message === 'Request Failed')

            state.error = action.error.message;
         })
         .addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
          });
    }
});

console.log(authSlice.reducer);

export const authActions = authSlice.actions;
export default authSlice.reducer;
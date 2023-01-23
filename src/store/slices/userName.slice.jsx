import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usernameSlice = createSlice({
		name: 'userName',
    initialState: "Jhon Dohe",
    reducers: {
         changeUserName: (state, action) => {
            const inputValue = action.payload
            return inputValue
        }
    }
})

export const { changeUserName } = usernameSlice.actions;

export default usernameSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fold: true,
}

export const foldSlice = createSlice({
  name: 'fold',
  initialState,
  reducers: {
    folding: (state) => {
      
      state.fold=!state.fold
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { folding} = foldSlice.actions

export default foldSlice.reducer
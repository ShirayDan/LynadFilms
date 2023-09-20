import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TTheme = {
  theme: string
}

const initialState: TTheme = {
  theme: localStorage.getItem('theme') || 'system'
}

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    }
  }
})

export const { changeTheme } = theme.actions
export const themeReducer = theme.reducer

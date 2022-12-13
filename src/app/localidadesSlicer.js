import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "localidades",
    initialState: {
        estados: [],
        cidades: [],
        municipio: []
    },
    reducers: {
        changeEstados(state, { payload }) {
            return { ...state, estados: payload }
        }
    }
})

export const { changeEstados } = slice.actions
export const selectEstados = state => state.localidades
export default slice.reducer 
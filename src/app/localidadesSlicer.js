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
        },
        changeMunicipios(state, { payload }) {
            return { ...state, cidades: payload }
        },
        changeMunicipio(state, { payload }) {
            return { ...state, municipio: payload }
        }
    }
})

export const { changeEstados, changeMunicipios, changeMunicipio} = slice.actions
export const selectEstados = state => state.localidades
export default slice.reducer 
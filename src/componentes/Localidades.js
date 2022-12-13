import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../api/api'
import { changeEstados, selectEstados } from '../app/localidadesSlicer'

export default function Localidades() {
    const dispatch = useDispatch()
    const { estados } = useSelector(selectEstados)
    const { cidades } = useSelector(selectEstados)
    useEffect(() => {
        api.get("/estados").then((response) => {
            dispatch(changeEstados(response.data))
        })
    }, [])
    return (
        <div>
            <select>
                <option></option>
                {estados.map((item) => {
                    return (
                        <option>{item.sigla}</option>
                    )
                })}
            </select>
            <br></br>
            <select>
                <option></option>
                {cidades.map((item) => {
                    return (
                        <option>{item.sigla}</option>
                    )
                })}
            </select>
        </div>
    )
}
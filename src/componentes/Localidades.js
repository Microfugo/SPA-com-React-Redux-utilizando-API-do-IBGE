import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../api/api'
import { changeEstados, selectEstados, changeMunicipios, changeMunicipio } from '../app/localidadesSlicer'

export default function Localidades() {
    const dispatch = useDispatch()
    const { estados } = useSelector(selectEstados)
    const { cidades } = useSelector(selectEstados)
    const { municipio } = useSelector(selectEstados)
    const [estado, setEstado] = useState(0)

    function escolheEstado(estadoSelecionado) {
        setEstado(estadoSelecionado)
        const busca = `/estados/${estadoSelecionado}/municipios`
        console.log(busca)
        console.log(estadoSelecionado)
        api.get(busca).then((response) => {
            dispatch(changeMunicipios(response.data))
            console.log(response.data)
        })
    }
    function escolheMunicipio(municipioSelecionado) {
        const buscaMunicipio = `/municipios/${municipioSelecionado}/distritos`
        api.get(buscaMunicipio).then((response) => {
            console.log(response.data)
            dispatch(changeMunicipio(response.data[0]))
        })
    }

    useEffect(() => {
        api.get("/estados").then((response) => {
            dispatch(changeEstados(response.data))
            console.log(response.data)
        })
        console.log(estado)
    }, [estado])
    return (
        <div>
            <select onChange={(e) => { escolheEstado(e.target.value) }}>
                <option></option>
                {estados.map((item) => {
                    return (
                        <option value={item.id}>{item.sigla}</option>
                    )
                })}
            </select>
            <br></br>
            <select onChange={(e) => { escolheMunicipio(e.target.value) }}>
                <option></option>
                {cidades.map((item) => {
                    return (
                        <option value={item.id}>{item.nome}</option>
                    )
                })}
            </select>
            {municipio.map((item) => {
                    return (
                        <p>{item.nome}</p>
                    )
                })}
        </div>
    )
}
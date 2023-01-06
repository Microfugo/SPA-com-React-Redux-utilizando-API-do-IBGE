import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../api/api'
import { changeEstados, selectEstados, changeMunicipios, changeMunicipio } from '../app/localidadesSlicer'
import "./estilo.css";

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
        const buscaMunicipio = `/municipios/${municipioSelecionado}/distritos/`
        api.get(buscaMunicipio).then((response) => {
            console.log(response.data)
            dispatch(changeMunicipio(response.data))
        })
    }

    useEffect(() => {
        api.get("/estados?orderBy=nome").then((response) => {
            dispatch(changeEstados(response.data))
            console.log(response.data)
        })
        console.log(estado)
    }, [dispatch, estado])
    return (
        <div>
            <select onChange={(e) => { escolheEstado(e.target.value) }}>
                <option></option>
                {estados.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>{item.sigla}</option>
                    )
                })}
            </select>
            <br></br>
            <select onChange={(e) => { escolheMunicipio(e.target.value) }}>
                <option></option>
                {cidades.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>{item.nome}</option>
                    )
                })}
            </select>
            {municipio.map((item) => {
                return (
                    <tr className='tabela'>
                        <td>nome: {item.nome}</td>
                        <br/>
                        <td>microrregiao:{item.municipio.microrregiao.nome}</td>
                        <br/>
                        <td>mesorregiao:{item.municipio.microrregiao.mesorregiao.nome}</td>
                        <br/>
                        <td>UF:{item.municipio.microrregiao.mesorregiao.UF.nome}</td>
                        <br/>
                        <td>Regiao do municipio:{item.municipio["regiao-imediata"].nome}</td>
                    </tr>
                )
            })}
        </div>
    )
}
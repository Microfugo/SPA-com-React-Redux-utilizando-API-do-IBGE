import axios from "axios"

axios.defaults.withCredentials = false

const api = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
    withCredentials: false
})

export default api

import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8080',
})

export const search = async (url: string, setDados: Function, header?: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

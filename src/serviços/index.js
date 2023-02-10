import axios from "axios";


export const baseURL = "https://e7df-179-182-100-244.sa.ngrok.io"     // baseURL: "http://localhost:3000"

const api = axios.create({
    baseURL: baseURL
});

export const obterAnuncios = async (url, setAnuncios) => {
    await api.get(url)
        .then(resultado => {
            setAnuncios(resultado.data)
        }).catch((erro) => console.error(erro));
}

export const obterProdutos = async (url, setProdutos) => {
    await api.get(url)
        .then(resultado => {
            setProdutos(resultado.data)
        }).catch((erro) => console.error(erro));
}

export const obterPedidos = async (url, setPedidos) => {
    
  await api.get(url)
      .then(resultado => {
          setPedidos(resultado.data)
      }).catch((erro) => console.error(erro));
}

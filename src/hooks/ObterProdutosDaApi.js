import { api } from "../serviços";

export async function ObterProdutosDaApi (setProdutos) {
  await api.get("/produtos").then((response) => setProdutos(response.data))
  .catch((erro) => console.error(erro));
}
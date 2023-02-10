import React, { createContext, useEffect, useState } from "react";
import { obterItensDoCarrinhoArmazenadosLocalmente, salvarLocalmente, removerLocalmente } from "../serviços/local";

export const GlobalContext = createContext({});

export const ComprasProvider = ({ children }) => {
    const [itens, setItens] = useState([]);
    const [novaCompra, setNovaCompra] = useState(0);

    useEffect(() => {
        obterItensDoCarrinhoArmazenadosLocalmente(setItens)
    }, [])

    const adicionarItem = async (item) => {
        setItens([...itens, item])

        await salvarLocalmente([...itens, item])
    }

    const removerItem = async (id) => {
        const listaDeItens = itens.filter((elementoDeItens) => elementoDeItens.id !== id)

        for (let i = 0; i < listaDeItens.length; i++){
            listaDeItens[i].id = i+1
        } // Para organizar os ids dos itens de forma continua e crescente novamente

        setItens(listaDeItens)
        await salvarLocalmente(listaDeItens)
    }

    const esvaziarCarrinho = async () => {
        setItens([]);
        await removerLocalmente()
    }

    const quantidadeMaisUm = (id) => {
        itens[id-1].quantidade ++
        console.table(itens)
        calculaSubTotal()
    }

    const quantidadeMenosUm = (id) => {
        itens[id-1].quantidade --
        console.table(itens)
        calculaSubTotal()
    }

    const [subtotal, setSubTotal] = useState(0);

    function calculaSubTotal(){
        let soma = 0;
  
        for(let i = 0; i < itens.length; i++){
          soma+= itens[i].preço*itens[i].quantidade
        }
    
        setSubTotal(soma)
    }

    useEffect(() => {
        calculaSubTotal()
    }, [itens])

    return (
        <GlobalContext.Provider value={{ novaCompra, setNovaCompra, itens, adicionarItem, removerItem, esvaziarCarrinho, quantidadeMaisUm, quantidadeMenosUm, subtotal }}>
            {children}
        </GlobalContext.Provider>
    )

}
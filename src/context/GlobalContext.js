import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const ComprasProvider = ({ children }) => {
    const [itens, setItens] = useState([]);
    let id = itens.length+1

    const adicionarItem = (item) => {
        setItens([...itens, item])
    }

    const removerItem = (id) => {
        const listaDeItens = itens.filter((elementoDeItens) => elementoDeItens.id !== id)

        for (let i = 0; i < listaDeItens.length; i++){
            listaDeItens[i].id = i+1
        } // Para organizar os ids dos itens de forma continua e crescente novamente

        setItens(listaDeItens)
    }

    const esvaziarCarrinho = () => {
        setItens([]);
    }

    const quantidadeMaisUm = (id) => {
        itens[id-1].quantidade ++
        console.table(itens)
    }

    const quantidadeMenosUm = (id) => {
        itens[id-1].quantidade --
        console.table(itens)
    }

    return (
        <GlobalContext.Provider value={{ id, itens, adicionarItem, removerItem, esvaziarCarrinho, quantidadeMaisUm, quantidadeMenosUm }}>
            {children}
        </GlobalContext.Provider>
    )

}
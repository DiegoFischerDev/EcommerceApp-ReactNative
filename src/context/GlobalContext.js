import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const ComprasProvider = ({ children }) => {
    const [id, setId] = useState(1);
    const [itens, setItens] = useState([]);

    const adicionarItem = (item) => {
        setItens([...itens, item])

        setId(id + 1)
    }

    const removerItem = (id) => {
        const listaDeItens = itens.filter((elementoDeItens) => elementoDeItens.id !== id)

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
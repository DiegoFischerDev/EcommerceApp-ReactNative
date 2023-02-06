import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const ComprasProvider = ({ children }) => {
    const [id, setId] = useState(1);
    const [itens, setItens] = useState([]);

    const adicionarItem = (item) => {
        setItens([...itens, item])

        setId(id + 1)
    }

    const removerItem = (item) => {
        const listaDeItens = itens.filter((elementoDeItens) => elementoDeItens.id !== item.id)

        setItens(listaDeItens)
    }

    const esvaziarCarrinho = () => {
        setItens([]);
    }

    return (
        <GlobalContext.Provider value={{ id, itens, adicionarItem, removerItem, esvaziarCarrinho }}>
            {children}
        </GlobalContext.Provider>
    )

}
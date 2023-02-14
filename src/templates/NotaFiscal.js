import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export const imprimirNotaFiscal = async (itens) => {
    const html = header + body(itens) + footer;

    const { uri } = await Print.printToFileAsync({
        html,
        margins: {
            left: 85,    // 3cm
            top: 85,     // 3cm
            right: 57,   // 2cm
            bottom: 57,  // 2cm
        },
        height: 842,
        width: 595
    });

    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
};

export const header = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body>
`;


export const body = (itens) => {
    var content = '<h1>NOTA FISCAL</h1>';

    for (let i in itens.itens) {
        const item = itens.itens[i]

        console.log("item = " + item)

        content = content + `
            <div style="page-break-inside: avoid; page-break-after: auto;">
                <h2><b>Nome:</b> ${item.legenda}</h2>
                <h4><b>Tamanho: </b>${item.tamanho}</h4>
                <h4><b>Preço Unitário: </b>R$ ${item.preço}</h4>
                <h4><b>Número de itens: </b>${item.quantidade}</h4>
                <h3><b>Total: R$ ${item.preço * item.quantidade}</b></h3>
            </div>    
            <hr/>
        `
    }

    content = content + `
        <div style="page-break-inside: avoid; page-break-after: auto;">
            <h3><b>Sub-total: R$${itens.subTotal}</b></h2>
            <h3>Voucher: - R$${itens.voucher}</h2>
            <h3>Taxa de Entrega: R${itens.taxaDeEntrega}</h2>
            <h2><b>Total: R$ ${itens.valorTotalDoPedido}</b></h2>
        </div>    
    `

    return content
}

export const footer = `
        </body>
    </html>
`;


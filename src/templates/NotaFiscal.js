import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export const imprimirNotaFiscal = async (itens) => {
    const html = header + body(itens) + footer;

    const { uri } = await Print.printToFileAsync({
        html
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

  <style>
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: .8rem;
    margin: 0;
  }
  body {
    padding: 20px;
    max-width: 700px;
    justify-content: center;
    margin: auto;
  }
  .BoxDiv {
    border: 3px solid black;
    display: flex;
  }
  .ItensDiv {
    border: 3px solid black;
    padding-left: 20px;
  }

  </style>
  
  <body>

  <div class="BoxDiv">

    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqtb03ZQKDeRHkSR6vjN3Fs2s8LyhjgNtbrG2-I8O6yTm87Ck6o6zxpcQP9DmX9h7v68&usqp=CAU"
    style="width: 100px; margin: 20px" />

    <div style="text-align: center; margin-right: 20px;">
      <h1>PREFEITURA DO MUNICÍPIO DE RECIFE</h1>
      <h2 style="margin: 0;">SECRETARIA MUNICIPAL DE FINANÇAS</h2>
      <H2 style="margin: 0;">NOTA FISCAL ELETRÔNICA DE SERVIÇOS - NF-e</H2>
    </div>
  </div>

  <div class="BoxDiv">

    <img
    src="https://res.cloudinary.com/di9oiqvom/image/upload/v1676050777/logo_zexbmx.png"
    style="width: 100px; margin: 20px" />

    <div>
      <h2>PRESTADOR DE SERVIÇO</h2>
      <div style="text-align: left; width: 100%;">
        <h3>CNPJ: 64.167.645/0001-33</h3>
        <h3>Nome/Razão Social: VISTA OKA LTDA</h3>
        <h3>Endereço: Av Cond Boa Vista 1440 - Recife CEP: 03374-001</h3>
      </div>
    </div>
  </div>
  <div class="ItensDiv">
  <h2 style="text-align: center; width: 100%;">DISCRIMINAÇÃO DOS ITENS</h2>
`;


export const body = (itens) => {

    var content = '';

    for (let i in itens.itens) {
        const item = itens.itens[i]

        content = content + `
        <h3"><b>Nome:</b> ${item.legenda}</h3>
        <h3"><b>Tamanho: </b>${item.tamanho}</h3>
        <h3"><b>Preço Unitário: </b>R$ ${item.preço}</h3>
        <h3"><b>Número de itens: </b>${item.quantidade}</h3>
        <h3 style="margin-bottom: 20px;"><b>Total: R$ ${item.preço * item.quantidade}</b></h3>
        `
    }

    content = content + `
    </div> 

    <div class="ItensDiv">
      <h2 style="text-align: center; width: 100%;">VALOR TOTAL DA COMPRA</h2>
      <h3 style="margin: 0;"><b>Sub-total: R$${itens.subTotal}</b></h2>
      <h3 style="margin: 0;">Voucher: - R$${itens.voucher}</h2>
      <h3 style="margin: 0;">Taxa de Entrega: R$${itens.taxaDeEntrega}</h2>
      <h2><b>Total: R$ ${itens.valorTotalDoPedido}</b></h2>
    </div>   
    
    <div class="ItensDiv">
      <h2 style="text-align: center; width: 100%;">OUTRAS INFORMAÇÕES</h2>
      <h3 style="margin-bottom: 20px;">Previsão de entrega: ${itens.previsãoDeEntrega}</h2>
    </div>   
    `

    return content
}

export const footer = `
        </body>
    </html>
`;


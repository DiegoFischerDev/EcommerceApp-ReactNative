import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text,} from 'react-native'
import StatusB from '../../componentes/StatusB'
import BotaoLaranja from './componentes/BotaoLaranja'
import BotaoQuantidade from './componentes/BotaoQuantidade'
import Carrossel from './componentes/Carrossel'
import ProductDescription from './componentes/ProductDescription'
import SelecionarTamanho from './componentes/SelecionarTamanho'
import modelo1 from "../../../assets/modelo_1.png";
import modelo2 from "../../../assets/modelo_2.png";
import modelo3 from "../../../assets/modelo_3.png";
import modelo4 from "../../../assets/modelo_4.png";

const imagens = [modelo1, modelo2, modelo3, modelo4];


const DetalhesDoProduto = ({ route }) => {

  const routeInfo = route.params;

  const [TamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [numItens, setNumItens] = useState(1);
  const [imagemAtiva, setImagemAtiva] = useState(0);


  let produto = {
    legenda: routeInfo.legenda,
    preço: routeInfo.preço,
    review: routeInfo.review,
    reviewqtd: routeInfo.reviewqtd,
    tamanho: TamanhoSelecionado,
    quantidade: numItens
  }

  console.table(produto)

  return (

    <SafeAreaView >
      <StatusB />

      <Carrossel
        imagens={imagens}
        imagemAtiva={imagemAtiva}
        setImagemAtiva={setImagemAtiva}
      />

      <ProductDescription legenda={produto.legenda} preço={produto.preço} review={produto.review} reviewqtd={produto.reviewqtd} />

      <Text style={{marginVertical: 18, marginLeft:21, fontSize: 16}}>Selecionar Tamanho</Text>

      <View style={{flexDirection: 'row'}}>
        <SelecionarTamanho ButtonLabel={"P"} TamanhoSelecionado={TamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado}/>
        <SelecionarTamanho ButtonLabel={"M"} TamanhoSelecionado={TamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado}/>
        <SelecionarTamanho ButtonLabel={"G"} TamanhoSelecionado={TamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado}/>
        <SelecionarTamanho ButtonLabel={"GG"} TamanhoSelecionado={TamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado}/>
      </View>


      <View style={estilos.view1}>
        <BotaoQuantidade numItens={numItens} setNumItens={setNumItens}/>
        <BotaoLaranja />
      </View>

    </SafeAreaView>
      
  )
}

export default DetalhesDoProduto

const estilos = StyleSheet.create({

  view1: {
    flexDirection:'row',
    marginTop: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 21
  },
  
})

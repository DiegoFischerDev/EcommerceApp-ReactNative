import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
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


const DetalhesDoProduto = () => {

  const [TamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [imagemAtiva, setImagemAtiva] = useState(0);

  return (

    <SafeAreaView >
      <StatusB />

      <Carrossel
        imagens={imagens}
        imagemAtiva={imagemAtiva}
        setImagemAtiva={setImagemAtiva}
      />

      <ProductDescription legenda={'Camisa de Algodão Regular Fit (Masculina)'} preço={'100,00'} review={'4.9'} reviewqtd={'83'} />

      <Text style={{marginVertical: 18, marginLeft:21, fontSize: 16}}>Selecionar Tamanho</Text>

      <View style={{flexDirection: 'row'}}>
        <SelecionarTamanho ButtonLabel={"P"} TamanhoSelecionado={TamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado}/>
        <SelecionarTamanho ButtonLabel={"M"} TamanhoSelecionado={TamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado}/>
        <SelecionarTamanho ButtonLabel={"G"} TamanhoSelecionado={TamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado}/>
        <SelecionarTamanho ButtonLabel={"GG"} TamanhoSelecionado={TamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado}/>
      </View>


      <View style={estilos.view1}>
        <BotaoQuantidade />
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

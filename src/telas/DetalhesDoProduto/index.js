import React, { useContext, useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text,} from 'react-native'
import StatusB from '../../componentes/StatusB'
import BotaoAddAoCarrinho from './componentes/BotaoAddAoCarrinho'
import BotaoQuantidade from './componentes/BotaoQuantidade'
import Carrossel from './componentes/Carrossel'
import ProductDescription from './componentes/ProductDescription'
import SelecionarTamanho from './componentes/SelecionarTamanho'
import modelo1 from "../../../assets/modelo_1.png";
import modelo2 from "../../../assets/modelo_2.png";
import modelo3 from "../../../assets/modelo_3.png";
import modelo4 from "../../../assets/modelo_4.png";
import { GlobalContext } from '../../context/GlobalContext'
import ComprasModal from '../../componentes/ComprasModal'

const imagens = [modelo1, modelo2, modelo3, modelo4];


const DetalhesDoProduto = ({ route }) => {

  const [visivel, setVisivel] = useState(false)
  const [modalErroVisivel, setModalErroVisivel] = useState(false)

  const routeInfo = route.params;

  const { itens } = useContext(GlobalContext);

  const [TamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [numItens, setNumItens] = useState(1);
  const [imagemAtiva, setImagemAtiva] = useState(0);

  const novoID = itens.length+1;

  let produto = {
    id: novoID,
    legenda: routeInfo.legenda,
    preço: routeInfo.preço,
    review: routeInfo.review,
    reviewqtd: routeInfo.reviewqtd,
    tamanho: TamanhoSelecionado,
    quantidade: numItens
  }


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
        <BotaoAddAoCarrinho produto={produto} tamanho={produto.tamanho} setVisivel={setVisivel} setModalErroVisivel={setModalErroVisivel} />
      </View>

      <ComprasModal
        visivel={visivel}
        setVisivel={setVisivel}
        texto={'Item adicionado ao carrinho!'}
        botao={{
          texto: 'Adicionar novo item',
          link: 'Loja'
        }}
      />

      <ComprasModal
        visivel={modalErroVisivel}
        setVisivel={setModalErroVisivel}
        texto={'Selecione um Tamanho'}
        botao={{
          texto: 'Fechar',
          link: ''
        }}
      />

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

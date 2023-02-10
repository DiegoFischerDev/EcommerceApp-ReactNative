import react from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const MeusPedidosCard = ({id, setVisivel, SetIdDoPedidoQueOMOdalExibe, valorTotal, status, dataDaEntrega}) => {

  return(
    <View style={estilos.meusPedidos}>
      <View>
        <View style={{flexDirection:'row', justifyContent: "space-between"}}>
          <Text>Pedido: {id}</Text>
          <TouchableOpacity onPress={() => {SetIdDoPedidoQueOMOdalExibe(id); setVisivel(true)}}><Text style={{color: 'orange'}}>Ver Pedido</Text></TouchableOpacity>
        </View>
        <Text>Valor Total: R${valorTotal}</Text>
        <View style={{flexDirection:'row'}}>
          <Text>Status: </Text>
          <Text style={{color: 'orange'}}>{status}</Text>
        </View>
        <Text>Entrega Prevista: {dataDaEntrega}</Text>
      </View>
    </View>
  )

}

export default MeusPedidosCard


const estilos = StyleSheet.create({

  meusPedidos: {
    backgroundColor: "#FFF",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  }

})
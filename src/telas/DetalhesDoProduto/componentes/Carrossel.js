import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';



const WIDTH = Dimensions.get('window').width;

const Carrossel = ({ imagens, imagemAtiva, setImagemAtiva }) => {

  const navigation = useNavigation();

  const handleOnChange = (nativeEvent) => {
    if (nativeEvent) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if (slide != imagemAtiva) {
            setImagemAtiva(slide);
        }
    }
  }

  return (

    <SafeAreaView>

      <View style={estilos.topButtons}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}><Ionicons name="arrow-back-outline" size={30} color="black" /></TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("CarrinhoDeCompras") }}><Ionicons name="cart-outline" size={30} color="black" /></TouchableOpacity>
      </View>

      <ScrollView  
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={0}
        pagingEnabled
        horizontal
        onScroll={({ nativeEvent }) => handleOnChange(nativeEvent)}
        style={estilos.wrap}>

        {
          imagens.map((imagem, index) => {
            return (
              <Image style={estilos.wrap} source={imagem} key={index} />
            )
          })
        }
          
      </ScrollView>

      <View style={estilos.wrapDot}>

        {
          imagens.map((imagem, index) => {
            return <Text key={index} style={index === imagemAtiva ? [estilos.dot, {color:'#FFA959'}] : estilos.dot}>●</Text>
          })
        }

      </View>

      <View style={estilos.MiniImages}>

        {
          imagens.map((imagem, index) => {
            return <TouchableOpacity onPress={() => {}} key={index} ><Image source={imagem} style={(index === imagemAtiva) ? [estilos.MiniImage, estilos.MiniImageSelected] : estilos.MiniImage}></Image></TouchableOpacity>
          })
        }

      </View>

    </SafeAreaView>
      
  )
}

export default Carrossel

const estilos = StyleSheet.create({

  topButtons:{
    position: 'absolute',
    zIndex: 2,
    flexDirection:'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },

  wrap: {
    width: WIDTH,
    height: WIDTH,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'relative',
},

  wrapDot: {
    position: 'absolute',
    top: WIDTH * 0.9,
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  MiniImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  MiniImage: {
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
    borderRadius: 10,
  },

  MiniImageSelected: {
    borderWidth: 2,
    borderColor: '#FFA959',
  },

  dot: {
    margin: 5,
    marginBottom: 15,
    color: "#CACACA",
  },

})

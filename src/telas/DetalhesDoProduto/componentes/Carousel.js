import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import modelo1 from "../../../../assets/modelo_1.png";
import modelo2 from "../../../../assets/modelo_2.png";
import modelo3 from "../../../../assets/modelo_3.png";
import modelo4 from "../../../../assets/modelo_4.png";


const WIDTH = Dimensions.get('window').width;
const imagens = [modelo1, modelo2, modelo3, modelo4];


const Carousel = () => {
  return (

    <SafeAreaView>
      <ScrollView  
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={0}
        pagingEnabled
        horizontal
        onScroll={() => {}}
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
            return <Text key={index} style={index == 2 ? [estilos.dot, {color:'#FFA959'}] : estilos.dot}>●</Text>
          })
        }

      </View>

      <View style={estilos.MiniImages}>

        {
          imagens.map((imagem, index) => {
            return <TouchableOpacity onPress={() => {}} key={index} ><Image source={imagem} style={(index == 2) ? [estilos.MiniImage, estilos.MiniImageSelected] : estilos.MiniImage}></Image></TouchableOpacity>
          })
        }

      </View>

    </SafeAreaView>
      
  )
}

export default Carousel

const estilos = StyleSheet.create({

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

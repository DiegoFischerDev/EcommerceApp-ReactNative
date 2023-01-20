import React from 'react'
import { SafeAreaView, View, Text, Image,} from 'react-native'
import EstrelaAmarela from '../../../../assets/EstrelaAmarela.png'

const ProductDescription = ({legenda, preço, review, reviewqtd}) => {

  return (
    <SafeAreaView style={{marginLeft: 21}}>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
        <Image source={EstrelaAmarela} style={{width: 18, height: 18}}></Image>
        <Text style={{fontSize:18, fontWeight: 'bold', marginLeft: 5}}>{review}</Text>
        <Text style={{fontSize:12, marginLeft: 5, color: '#CACACA'}}>({reviewqtd})</Text>
        <Text style={{fontSize:12, marginLeft: 5}}>Reviews</Text>
      </View>

      <Text style={{fontSize:16, fontWeight: 'normal', marginTop:15}}>{legenda}</Text>

      <Text style={{fontSize:16, fontWeight: 'bold', marginTop:15}}>R$ {preço}</Text>

    </SafeAreaView>

  )
}

export default ProductDescription

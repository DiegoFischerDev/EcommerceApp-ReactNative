import React from 'react'
import { SafeAreaView, View, Text, Image,} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

const ProductDescription = ({legenda, preço, review, reviewqtd}) => {

  return (
    <SafeAreaView style={{marginLeft: 21}}>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
        <Ionicons name="star" size={15} color="#fec800" />
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

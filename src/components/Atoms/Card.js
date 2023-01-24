import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";

const Card = ({id, title, description, imgUrl, price, qty}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate("ProductDetails", {"title": title, "id" : id, "description": description, "qty": qty,"imgUrl": imgUrl, "price": price})}
    activeOpacity={0.8} style={styles.card}>
      <Image
      source={imgUrl}
      style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.heading} numberOfLines={1}>{title}</Text>
        <Text style={styles.price}>Price<Text style={{fontWeight:"bold"}}> ₹ {price}</Text></Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        elevation:5,
        borderRadius:10,
        maxWidth:180,
        marginRight:20,
        marginBottom:20,
        alignItems:"center",
        paddingBottom:10
    },
    image:{
        resizeMode:"contain",
        width:170,
        height:170,
        borderRadius:10
    },
    container:{
        marginTop:15,
    },
    heading:{
        fontSize:16,
        color:"black",
        fontWeight:"bold",
        maxWidth:150
    },
    price:{
        fontSize:14,
        color:"black",
        fontWeight:"400"
    }
})
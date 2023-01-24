import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Image
      source={require("../assets/Logo.png")}
      style={styles.image}
      />
      <Text style={styles.title}>Welcome to MyShop24x7</Text>
      <TouchableOpacity activeOpacity={0.8} 
      onPress={()=>navigation.navigate("Login")}
      style={styles.button}>
        <Text style={styles.buttonText}>Let's Shop</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        flex:1
    },
    image:{
        resizeMode:"contain",
        height:200,
        width:200,
        alignSelf:"center",
        marginTop:"50%"
    },
    heading:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        marginVertical:20
    },
    title:{
        fontSize:20,
        textAlign:"center",
        marginTop:20,
        color:"black",
        fontWeight:"bold"
    },
    button:{
        position:"absolute",
        backgroundColor:"black",
        borderRadius:10,
        bottom:"2%",
        width:"90%",
        alignSelf:"center",
        padding:10,
        paddingVertical:20,
        alignItems:"center"
    },
    buttonText:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    },

})
import { Animated, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import BackIcon from "../assets/back.svg";
import {useNavigation} from "@react-navigation/native";
import AddIcon from "../assets/add.svg";
import SubtractIcon from "../assets/subtract.svg";
import CloseIcon from "../assets/close.svg";
import { useSelector } from 'react-redux';


const CheckoutScreen = () => {

    const navigation = useNavigation();
    const cart = useSelector((state)=>state.cart.cart);
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        let sum = 0;
        cart.map((item)=>{
            sum= sum+item?.price
        })
        setTotal(sum);
    },[]);

    console.log("Total" + total)

    const checkoutHandler=()=>{
        navigation.navigate("Delivery", {"total": total});
    }


  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={styles.menu}
        activeOpacity={0.8}>
            <BackIcon
            height={'30'}
            width={'30'}
            />
        </TouchableOpacity>
        <View style={styles.view}>
            <Text style={styles.cart}>Checkout</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.cardContainer}>
        {cart.map((item)=>(
            <View
            key={item?.id}
            style={styles.card}>
                <Image
                source={item?.imgUrl}
                style={styles.image}
                />
                <View style={styles.cardContent}>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.price}>Price <Text style={{fontWeight:"bold"}}> ₹ {item?.price}</Text></Text>
                    <View style={styles.quantity}>
                        <Text style={[styles.qtyText, {fontSize:16}]}>Quantity: </Text>
                        <Text style={[styles.qtyText, {fontSize:16}]}>{item?.qty}</Text>
                    </View>
                </View>
            </View>
        ))
        }
      </View>
      <View style={styles.checkout}>
        <View style={styles.checkoutContainer}>
            <Text style={styles.subtotal}>Sub Total</Text>
            <Text style={styles.checkoutPrice1}>₹ {total}</Text>
        </View>
        <View style={styles.checkoutContainer}>
            <Text style={styles.shipping}>Shipping</Text>
            <Text style={styles.checkoutPrice2}>₹ 100</Text>
        </View>
        <View style={styles.checkoutContainer}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.checkoutPrice3}>₹ {total + 100}</Text>
        </View>
        <TouchableOpacity 
        onPress={checkoutHandler}
        activeOpacity={0.8} style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        flex:1
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        elevation:5,
        backgroundColor:"white",
        padding:10,
        paddingVertical:20,
        zIndex:100
    },
    view:{
        flexDirection:"row",
        alignItems:"center"
    },
    container:{
        margin:15,
        marginBottom:0
    },
    cart:{
        fontSize:20, 
        color:"black",
        fontWeight:"bold"
    },
    cardContainer:{
        margin:20,
        marginTop:30
    },
    card:{
        flexDirection:"row",
        alignItems:"flex-start",
        backgroundColor:"white",
        elevation:5,
        borderRadius:10,
        padding:10,
        marginBottom:20
    },
    image:{
        resizeMode:"contain",
        height:120,
        width:120,
        borderRadius:10
    },
    cardContent:{
        marginLeft:20
    },
    title:{
        fontSize:16,
        color:"black",
        fontWeight:"bold",
        marginBottom:10,
        maxWidth:200
    },
    price:{
        fontSize:14,
        color:"black"
    },
    quantity:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
    },
    qtyButton:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        padding:5,
    },
    qtyText:{
        fontSize:10,
        color:"black",
        fontWeight:"600",
        textAlign:"center",
    },
    close:{
        alignItems:"flex-end",
        position:"absolute",
        right:"5%",
        bottom:"5%"
    },
    checkout:{
        position:"absolute",
        bottom:"3%",
        width:"100%",
        alignSelf:"center",
        paddingHorizontal:20
    },
    checkoutContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
        paddingHorizontal:20,
    },
    subtotal:{
        fontSize:18,
        color:"black",
        fontWeight:"700" 
    },
    checkoutPrice1:{
        fontSize:18,
        color:"black",
        fontWeight:"bold"
    },
    shipping:{
        fontSize:15,
        color:"black",
        fontWeight:"700" 
    },
    checkoutPrice2:{
        fontSize:15,
        color:"black",
        fontWeight:"bold"
    },
    total:{
        fontSize:20,
        color:"black",
        fontWeight:"700" 
    },
    checkoutPrice3:{
        fontSize:20,
        color:"black",
        fontWeight:"bold"
    },
    checkoutButton:{
        backgroundColor:"black",
        borderRadius:10,
        padding:10,
        alignItems:"center",
        marginTop:40,
        width:"100%",
        paddingVertical:20,
        alignSelf:"center"
    },
    checkoutButtonText:{
        fontSize:16,
        color:"white",
        fontWeight:"bold"
    }
})
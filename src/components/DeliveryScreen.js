import { Animated, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import BackIcon from "../assets/back.svg";
import {useNavigation} from "@react-navigation/native";
import AddIcon from "../assets/add.svg";
import SubtractIcon from "../assets/subtract.svg";
import CloseIcon from "../assets/close.svg";
import { useSelector } from 'react-redux';


const DeliveryScreen = () => {

    const navigation = useNavigation();
    const cart = useSelector((state)=>state.cart.cart);
    const [total, setTotal] = useState(0);
    const [office, setOffice] = useState("");
    const [permanent, setPermanent] = useState("");
    const [paymentMode, setPaymentMode] = useState(false);
    const [payment, setPayment] = useState("");

    useEffect(()=>{
        let sum = 0;
        cart.map((item)=>{
            sum= sum+item?.price
        })
        setTotal(sum);
    },[]);

    const paymentHandler=()=>{
        navigation.navigate("Custom")
        ToastAndroid.show('Order Placed Successfully', ToastAndroid.CENTER);
    }

    console.log("Total" + total)


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
            <Text style={styles.cart}>Delivery</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.heading}>Fill the following details to proceed further</Text>
        <View style={styles.textInput}>
            <Text style={styles.inputText}>Permanent Address</Text>
            <TextInput
            placeholder='Please Enter Permanent Address'
            value={permanent}
            onChangeText={(text)=>setPermanent(text)}
            placeholderTextColor="grey"
            style={styles.input}
            />
        </View>
        <View style={styles.textInput}>
            <Text style={styles.inputText}>Office Address</Text>
            <TextInput
            placeholder='Please Enter Office Address'
            value={office}
            onChangeText={(text)=>setOffice(text)}
            placeholderTextColor="grey"
            style={styles.input}
            />
        </View>
        <View style={styles.textInput}>
            <Text style={styles.inputText}>Payment Mode</Text>
            <TouchableOpacity 
            onPress={()=>setPaymentMode(true)}
            activeOpacity={0.8} style={styles.payment}>
                <Text style={styles.paymentText}>{payment==="" ? "Select Payment Mode" : payment}</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.checkout}>
        <View style={styles.checkoutContainer}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.checkoutPrice3}>₹ {total + 100}</Text>
        </View>
        <TouchableOpacity
        onPress={paymentHandler}
        activeOpacity={0.8} style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Payment</Text>
        </TouchableOpacity>
      </View>
      <Modal
      animationType='fade'
      visible={paymentMode}
      transparent={true}
      onRequestClose={()=>setPaymentMode(false)}
      style={styles.modal}
      >
        <View style={styles.paymentContainer}>
            <Text style={styles.paymentContainerText}>Select Payment Mode</Text>
            <View style={styles.paymentView}>
                <TouchableOpacity
                onPress={()=>{
                    setPaymentMode(false);
                    setPayment("Paytm/UPI")
                }}
                activeOpacity={0.8} style={styles.paymentContaineBox}>
                    <Text style={styles.paymentContaineBoxText}>Paytm/UPI</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    setPaymentMode(false);
                    setPayment("Google Pay")
                }}
                activeOpacity={0.8} style={styles.paymentContaineBox}>
                    <Text style={styles.paymentContaineBoxText}>Google Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    setPaymentMode(false);
                    setPayment("COD (Cash On Delivery)")
                }}
                activeOpacity={0.8} style={styles.paymentContaineBox}>
                    <Text style={styles.paymentContaineBoxText}>COD (Cash On Delivery)</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  )
}

export default DeliveryScreen

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
    },
    heading:{
        fontSize:18,
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:40
    },
    textInput:{
        marginBottom:40
    },
    inputText:{
        fontSize:15,
        color:"black",
        marginBottom:10,
        fontWeight:"600"
    },
    input:{
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        padding:10,
        fontSize:15,
        color:"black"
    },
    payment:{
        backgroundColor:"white",
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
        padding:10
    },
    paymentText:{
        fontSize:15,
        color:"black",
        fontWeight:"700"
    },
    modal:{

    },
    paymentContainer:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black",
        position:"absolute",
        height:300,
        padding:20,
        alignSelf:"center",
        marginTop:"60%",
        width:"90%",
        borderRadius:10
    },
    paymentContainerText:{
        fontSize:16,
        textAlign:"center",
        color:"black",
        fontWeight:"700"
    },
    paymentView:{
        marginTop:40
    },
    paymentContaineBox:{
        borderWidth:1,
        borderColor:"black",
        padding:10,
        marginBottom:20,
        borderRadius:10
    },
    paymentContaineBoxText:{
        fontSize:16,
        color:"black",
        fontWeight:"700"
    }
})
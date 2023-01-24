import { Animated, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import BackIcon from "../assets/back.svg";
import {useNavigation} from "@react-navigation/native";
import AddIcon from "../assets/add.svg";
import SubtractIcon from "../assets/subtract.svg";
import CloseIcon from "../assets/close.svg";
import {useSelector, useDispatch} from "react-redux";
import { removeFromCart } from './redux/actions';


const CartScreen = () => {

    const navigation = useNavigation();
    const [qty, setQty] = useState(1);
    const cart = useSelector((state)=>state.cart.cart);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);

    console.log("Cart" + JSON.stringify(cart));

    const increaseHandler=()=>{
        setQty(qty+1);
    }

    const decreaseHandler=()=>{
        if(qty!==1){
            setQty(qty-1);
        }
        else{
            setQty(1);
        }
    }

    useEffect(()=>{
        let sum = 0;
        cart.map((item)=>{
            sum= sum+item?.price
        })
        setTotal(sum);
    },[qty]);

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
            <Text style={styles.cart}>My Cart ({cart?.length})</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        {(cart?.length!==0) ?
        (cart.map((item)=>(
            <View 
            key={item?.id}
            style={styles.card}>
            <Image
            source={item?.imgUrl}
            style={styles.image}
            />
            <View style={styles.cardContent}>
                <Text style={styles.title} numberOfLines={1}>{item?.title}</Text>
                <Text style={styles.price}>Price <Text style={{fontWeight:"bold"}}> ₹ {item?.price}</Text></Text>
                <View style={styles.quantity}>
                    <TouchableOpacity
                    onPress={decreaseHandler}
                    activeOpacity={0.8} style={styles.qtyButton}>
                        <SubtractIcon
                        height={'18'}
                        width={'18'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{item?.qty}</Text>
                    <TouchableOpacity
                    onPress={increaseHandler}
                    activeOpacity={0.8} style={styles.qtyButton}>
                        <AddIcon
                        height={'18'}
                        width={'18'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
            onPress={()=>{
                console.log("REMOVED Item "+ JSON.stringify(item?.id))
                dispatch(removeFromCart({
                    "id": item?.id
                }))
            }}
            activeOpacity={0.8} style={styles.close}>
                <CloseIcon
                height={'25'}
                width={'25'}
                />
            </TouchableOpacity>
        </View>
        )))
        :
        <Text style={{fontSize:20, color:"black", fontWeight:"700", textAlign:"center", marginTop:"40%"}}>Cart is Empty</Text>
        }
      </View>
      <View style={styles.checkout}>
        {(cart?.length!==0) &&
        <>
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
            <Text style={styles.checkoutPrice3}>₹ {total+100}</Text>
        </View>
        </>
        }
        <TouchableOpacity
        onPress={()=>navigation.navigate("CheckoutScreen")}
        activeOpacity={0.8} style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

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
        fontSize:16, 
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
        height:150,
        width:150,
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
        marginTop:20
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
        marginHorizontal:10
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
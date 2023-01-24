import { Animated, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import BackIcon from "../assets/back.svg";
import {useNavigation, useRoute} from "@react-navigation/native";
import FavouriteIcon from "../assets/favourite.svg";
import FavouriteIcon1 from "../assets/favourite1.svg";
import {useDispatch} from "react-redux";
import { addToCart } from './redux/actions';


const ProductDetails = () => {

    const navigation = useNavigation();
    const [favourite, setFavourite] = useState(false);
    const route = useRoute();
    const dispatch = useDispatch();

    const favouriteHandler=()=>{
        setFavourite(!favourite);
        console.log(favourite)
        if(favourite!==true){
            ToastAndroid.show('Item Added in Favourites Successfully', ToastAndroid.CENTER);
        }else{
            ToastAndroid.show('Item Removed from Favourites', ToastAndroid.CENTER);
        }
    }

    const cartHandler=()=>{
        console.log("Id" + route?.params?.id);
        ToastAndroid.show('Item Added Successfully', ToastAndroid.CENTER);
        dispatch(addToCart({
            "id": route?.params?.id,
            "price": route?.params?.price,
            "title": route?.params?.title,
            "imgUrl": route?.params?.imgUrl,
            "description": route?.params?.description,
            "qty": route?.params?.qty
        }))
        console.log("Added");
        navigation.navigate("Cart")
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
            <Text style={styles.cart} numberOfLines={1}>{route?.params?.title}</Text>
        </View>
        <TouchableOpacity 
        onPress={favouriteHandler}
        activeOpacity={0.8} style={styles.view}>
            {(favourite)
            ?
            <FavouriteIcon1
            height={'30'}
            width={'30'}
            />
            :
            <FavouriteIcon
            height={'30'}
            width={'30'}
            />}
        </TouchableOpacity>
      </View>
      <View style={styles.productDetails}>
        <Image
        source={route?.params?.imgUrl}
        style={styles.image}
        />
        <View style={styles.productContainer}>
            <Text style={styles.productContainerTitle}>{route?.params?.title}</Text>
            <Text style={styles.productContainerDescription}>{route?.params?.description}</Text>
            <Text style={styles.productContainerPrice}>Price<Text style={{fontWeight:"bold"}}> ₹ {route?.params?.price}</Text></Text>
        </View>
      </View>
      <TouchableOpacity
      onPress={cartHandler}
      activeOpacity={0.8} style={styles.addToCart}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductDetails

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
        fontWeight:"bold",
        maxWidth:250
    },
    productDetails:{
        marginTop:30,
        paddingHorizontal:60
    },
    image:{
        resizeMode:"contain",
        height:300,
        width:300,
        borderRadius:10,
        marginBottom:20,
        alignSelf:"center"
    },
    productContainerTitle:{
        fontSize:17,
        color:"black",
        fontWeight:"bold",
        marginBottom:20,
        maxWidth:300,
        textAlign:"center",
        marginTop:50
    },
    productContainerDescription:{
        fontSize:14,
        color:"grey",
        fontWeight:"500",
        maxWidth:300,
        textAlign:"center",
        marginBottom:20
    },
    productContainerPrice:{
        fontSize:16,
        color:"black",
        fontWeight:"500",
        textAlign:"center"
    },
    addToCart:{
        backgroundColor:"black",
        borderRadius:10,
        padding:10,
        alignItems:"center",
        marginTop:40,
        width:"90%",
        position:"absolute",
        bottom:"2%",
        paddingVertical:20,
        alignSelf:"center"
    },
    cartText:{
        fontSize:16,
        color:"white",
        fontWeight:"bold"
    }
})
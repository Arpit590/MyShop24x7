import { Animated, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import BackIcon from "../assets/back.svg";
import {useNavigation, useRoute} from "@react-navigation/native";
import HelpIcon from "../assets/help.svg";
import ContactIcon from "../assets/phone.svg";
import MailIcon from "../assets/email.svg";


const HelpCenter = () => {

    const navigation = useNavigation();
    const value = useState(new Animated.Value(0))[0];

    useEffect(()=>{
        Animated.timing(value, {
            toValue:1,
            duration:1500,
            useNativeDriver:true
        }).start();
    },[])

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
            <Text style={styles.cart} numberOfLines={1}>Help Center</Text>
        </View>
        <View style={{}}>
            <HelpIcon
            height={'30'}
            width={'30'}
            />
        </View>
      </View>
      <View style={styles.helpContainer}>
        <Animated.Image
        source={require("../assets/helpCenter.jpg")}
        style={[styles.image, {opacity:value}]}
        />
        <Text style={styles.heading}>We are here to help!</Text>
        <View style={styles.helpingOptions}>
            <View style={styles.helpingOption}>
                <ContactIcon
                height={'30'}
                width={'30'}
                />
                <Text style={styles.phone}>+919811298159</Text>
            </View>
            <View style={styles.helpingOption}>
                <MailIcon
                height={'30'}
                width={'30'}
                />
                <Text style={styles.mail}>Saxenaarpit52@gmail.com</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default HelpCenter

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
    helpContainer:{
        marginTop:50
    },
    image:{
        resizeMode:"contain",
        width:350,
        height:350,
        alignSelf:"center"
    },
    heading:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        marginTop:-30
    },
    helpingOptions:{
        marginTop:50,
        alignSelf:"flex-start",
        paddingHorizontal:50
    },
    helpingOption:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20
    },
    phone:{
        fontSize:15,
        color:"grey",
        fontWeight:"600",
        marginLeft:20
    },
    mail:{
        fontSize:15,
        color:"grey",
        fontWeight:"600",
        marginLeft:20
    }
})
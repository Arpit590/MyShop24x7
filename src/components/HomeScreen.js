import { Animated, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import MenuIcon from "../assets/menu.svg";
import CartIcon from "../assets/cart.svg";
import SearchIcon from "../assets/search.svg";
import ShoppingIcon from "../assets/shopping.svg";
import Card from './Atoms/Card';
import CloseIcon from "../assets/close.svg";
import ProfileIcon from "../assets/profile.svg";
import WhatsappIcon from "../assets/whatsapp.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import {useNavigation} from "@react-navigation/native";
import HelpIcon from "../assets/help.svg";
import LogoutIcon from "../assets/logout.svg";
import HomeIcon from "../assets/home.svg";

const data = [
    {
        "id": "m1",
        "title": " Highlander Men White Solid Denim Jacket",
        "price": 3499,
        "description": "White solid jacket, has a spread collar, button closure, straight hem, and i lining",
        "imgUrl": require("../assets/Jacket1.png"),
        "qty": 1
    },
    {
        "id": "m2",
        "title": "Louis Philippe Olive Jacket",
        "price": 2599,
        "description": "Fashioned for comfort, durability and impeccable style, make a smart investment this season with this Olive Solid jacket from Louis Philippe by the House of Louis Philippe.",
        "imgUrl": require("../assets/Jacket2.png"),
        "qty": 1
    },
    {
        "id": "m3",
        "title": "Black Watch - Fast Track",
        "price": 2300,
        "description": "This is awesome jackets",
        "imgUrl": require("../assets/Watch.png"),
        "qty": 1
    },
    {
        "id": "m4",
        "title": "CRETA-12 Men Sports Running Shoes",
        "price": 5940,
        "description": "In laid-back block colourways, this is a versatile, minimalist sneaker for effortless coordination. The uppers are crafted from supple synthetic leather to ensure feet stay comfortable on busy days. Neat stitching and tonal laces keep the aesthetic smart, while the green embroidered crocodile adds a splash of signature colour to the quarter panel. The emblematic Lacoste lettering is emblazoned on the tongue.",
        "imgUrl": require("../assets/shoes.png"),
        "qty": 1
    },
    {
        "id": "m5",
        "title": "Green Women's Top - Zara",
        "price": 1277,
        "description": "A loose-fitting button-up shirt with a typical collar and long sleeves is available with the cuffed button. This shirt can be paired with any kind of bottoms.",
        "imgUrl": require("../assets/top.png"),
        "qty": 1
    },
    {
        "id": "m6",
        "title": "BLUE HIGH RISE WASHED MOM JEANS",
        "price": 2219,
        "description": "Made from premium cotton, this pair of mom jeans from ONLY deserves to be shown off! Features a 5-pocket design, high rise, zip fly and gently tapered legs. Pair it with a white crop top and chunky sneakers for a cool vibe.",
        "imgUrl": require("../assets/jeans.png"),
        "qty": 1
    }
    
]

const HomeScreen = () => {

    const value1 = useState(new Animated.Value(-300))[0];
    const navigation = useNavigation();

    const menuHandler=()=>{
        console.log("Helo")
        Animated.timing(value1, {
            toValue:0,
            duration:1000,
            useNativeDriver:false
        }).start();
    }

    const closeHandler=()=>{
        Animated.timing(value1, {
            toValue:-300,
            duration:1000,
            useNativeDriver:false
        }).start();
    }


  return (
    <View style={styles.screen}>
        <Animated.View style={[styles.menuContainer, {width:"70%", left:value1, height:"100%"}]}>
            <TouchableOpacity
            onPress={closeHandler}
            style={{alignSelf:"flex-end"}}
            activeOpacity={0.8}>
                <CloseIcon
                height={'30'}
                width={'30'}
                />
            </TouchableOpacity>
            <View style={styles.menuView}>
                <View style={styles.profile}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <ProfileIcon
                        height={'100'}
                        width={'100'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.profileText}>Test User</Text>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Custom")}
                    activeOpacity={0.8} style={styles.option}>
                        <Text style={styles.optionText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("HelpCenter")}
                    activeOpacity={0.8} style={styles.option}>
                        <Text style={styles.optionText}>Help Center</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.option}>
                        <Text style={styles.optionText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.socials}>
                <TouchableOpacity activeOpacity={0.8} style={styles.social}>
                    <FacebookIcon
                    height={'40'}
                    width={'40'}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.social}>
                    <InstagramIcon
                    height={'35'}
                    width={'35'}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.social}>
                    <WhatsappIcon
                    height={'30'}
                    width={'30'}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.bottomText}>© 2023 Google LLC</Text>
        </Animated.View>
      <View style={styles.header}>
        <TouchableOpacity
        onPress={menuHandler}
        style={styles.menu}
        activeOpacity={0.8}>
            <MenuIcon
            height={'30'}
            width={'30'}
            />
        </TouchableOpacity>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.8}>
                <SearchIcon
                height={'30'}
                width={'30'}
                />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Cart")}
            style={{marginLeft:20}}
            activeOpacity={0.8}>
                <CartIcon
                height={'30'}
                width={'30'}
                />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:100}}>
            <View style={[styles.headingContainer]}>
                <Text style={styles.heading}>Find your style</Text>
                <ShoppingIcon
                height={'30'}
                width={'30'}
                />
            </View>
            <View style={styles.cards}>
                {data.map((item)=>(
                    <Card
                    key={item?.id}
                    id={item?.id}
                    title={item?.title}
                    price={item?.price}
                    imgUrl={item?.imgUrl}
                    qty={item?.qty}
                    description={item?.description}
                    />
                ))}
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen

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
    menu:{
    },
    view:{
        flexDirection:"row",
        alignItems:"center"
    },
    container:{
        margin:15,
        marginBottom:0
    },
    headingContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    heading:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        marginRight:15
    },
    cards:{
        marginTop:30,
        flexWrap:"wrap",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    menuContainer:{
        backgroundColor:"white",
        flex:1,
        zIndex:1000,
        position:"absolute",
        padding:10,
        elevation:5,
        borderColor:"black",
        borderWidth:1
    },
    menuView:{
        marginTop:40,
        alignItems:"center"
    },
    profile:{
        borderBottomColor:"black",
        borderBottomWidth:1,
        paddingBottom:20,
        width:"100%",
        alignItems:"center"
    },
    profileText:{
        fontSize:16,
        color:"black",
        fontWeight:"bold",
        marginTop:15
    },
    options:{
        marginTop:20,
        width:"100%",
        alignItems:"center"
    },
    option:{
        borderBottomColor:"black",
        borderBottomWidth:1,
        padding:10,
        width:"100%",
        alignItems:"center",
        marginBottom:20,
        paddingHorizontal:30,
        flexDirection:"row"
    },
    optionText:{
        fontSize:14,
        color:"black",
        fontWeight:"500",
        marginLeft:20
    },
    socials:{
        position:"absolute",
        flexDirection:"row",
        alignItems:"center",
        bottom:"10%",
        alignSelf:"center",
        justifyContent:"center"
    },
    social:{
        marginRight:30
    },
    bottomText:{
        fontSize:13,
        color:"grey",
        fontWeight:"500",
        textAlign:"center",
        position:"absolute",
        bottom:"5%",
        alignSelf:"center"
    }
})
import { Animated, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import MenuIcon from "../assets/menu.svg";
import CartIcon from "../assets/cart.svg";
import SearchIcon from "../assets/search.svg";
import ShoppingIcon from "../assets/shopping.svg";
import CloseIcon from "../assets/close.svg";
import ProfileIcon from "../assets/profile.svg";
import WhatsappIcon from "../assets/whatsapp.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import {useNavigation} from "@react-navigation/native"
import CardsIcon from "../assets/Cards.svg";
import WishlistIcon from "../assets/Wishlist.svg";
import HistoryIcon from "../assets/history.svg";
import LocationIcon from "../assets/Location.svg";
import ForwardIcon from "../assets/forward.svg";

const ProfileScreen = () => {

    const value = useState(new Animated.Value(0))[0];
    const value1 = useState(new Animated.Value(-300))[0];
    const navigation = useNavigation();

    useEffect(()=>{
        Animated.timing(value, {
            toValue:1,
            duration:2000,
            useNativeDriver:false
        }).start()
    }, []);

    const menuHandler=()=>{
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
                <TouchableOpacity
                 activeOpacity={0.8} style={styles.social}>
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
      <View style={styles.profileContainer}>
        <View style={styles.profile1}>
          <View style={styles.mainProfile}>
            <ProfileIcon
            height={"100"}
            width={"100"}
            />
          </View>
        </View>
        <Text style={styles.profileText1}>Test User</Text>
        <View style={styles.profileOptions}>
            <View style={styles.profileOption}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <WishlistIcon
                    height={'30'}
                    width={'30'}
                    />
                    <Text style={styles.profileOptionText}>Wishlist</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <ForwardIcon
                    height={'30'}
                    width={'30'}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.profileOption}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <LocationIcon
                    height={'30'}
                    width={'30'}
                    />
                    <Text style={styles.profileOptionText}>Edit Delivery Address</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <ForwardIcon
                    height={'30'}
                    width={'30'}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.profileOption}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <HistoryIcon
                    height={'30'}
                    width={'30'}
                    />
                    <Text style={styles.profileOptionText}>Order History</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <ForwardIcon
                    height={'30'}
                    width={'30'}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.profileOption}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <CardsIcon
                    height={'30'}
                    width={'30'}
                    />
                    <Text style={styles.profileOptionText}>Cards</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <ForwardIcon
                    height={'30'}
                    width={'30'}
                    />
                </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={styles.options1}>
          <TouchableOpacity activeOpacity={0.8} style={styles.option1}>
              <Text style={styles.optionText1}>Logout</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen

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
        justifyContent:"center"
    },
    optionText:{
        fontSize:14,
        color:"black",
        fontWeight:"500"
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
    },
    profileContainer:{
      marginTop:30
    },
    profile1:{
      backgroundColor:"white",
      borderWidth:5,
      borderColor:"black",
      borderRadius:100,
      padding:20,
      alignSelf:"center",
      width:140,
      height:140,
      justifyContent:"center",
      alignItems:"center"
    },
    profileText1:{
      marginTop:20,
      fontSize:20,
      color:"black",
      fontWeight:"bold",
      textAlign:"center"
    },
    options1:{
      position:"absolute",
      width:"100%",
      bottom:"5%",
      alignItems:"center"
  },
  optionText1:{
      fontSize:16,
      color:"red",
      fontWeight:"bold"
  },
  profileOptions:{
    marginTop:50,
  },
  profileOption:{
    flexDirection:"row",
    alignItems:"center",
    paddingBottom:20,
    marginBottom:20,
    width:"100%",
    paddingHorizontal:30,
    borderBottomColor:"black",
    borderBottomWidth:1,
    justifyContent:"space-between"
  },
  profileOptionText:{
    fontSize:18, 
    color:"black",
    fontWeight:"700",
    marginLeft:20
  }
})
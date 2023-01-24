import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler=()=>{
        console.log("teee" + JSON.stringify(password) + JSON.stringify(email))
        if(email!=="" && password!==""){
            navigation.navigate("Custom");
            ToastAndroid.show('Logged In Succesfully', ToastAndroid.CENTER);
        }else if(email===""){
            ToastAndroid.show('Enter an Email', ToastAndroid.CENTER);
        }else if(password===""){
            ToastAndroid.show("Enter a password", ToastAndroid.CENTER)
        }
        }

  return (
    <View style={styles.screen}>
      <Image
      source={require("../assets/Logo.png")}
      style={styles.image}
      />
      <Text style={styles.heading}>MyShop 24x7</Text>
      <View style={styles.login}>
        <View style={styles.loginOption}>
            <Text style={styles.email}>Email</Text>
            <TextInput
            placeholder='Enter your email'
            onChangeText={(text)=>setEmail(text)}
            value={email}
            keyboardType='email-address'
            placeholderTextColor="black"
            style={styles.input}
            />
        </View>
        <View style={styles.loginOption}>
            <Text style={styles.email}>Password</Text>
            <TextInput
            placeholder='Enter your password'
            onChangeText={(text)=>setPassword(text)}
            value={password}
            placeholderTextColor="black"
            keyboardType='email-address'
            secureTextEntry={true}
            style={styles.input}
            />
        </View>
        <View style={styles.account}>
            <Text style={styles.accountText1}>Didn't have an account? </Text>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Signup")}
            activeOpacity={0.8} style={styles.accountContainer}>
                <Text style={styles.accountText2}>Signup</Text>
            </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} 
      onPress={loginHandler}
      style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

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
        marginTop:50
    },
    heading:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        marginVertical:20
    },
    login:{
        marginTop:30
    },
    loginOption:{
        marginBottom:20,
        marginHorizontal:30
    },
    email:{
        fontSize:15,
        color:"black",
        fontWeight:"600",
        marginBottom:10
    },
    input:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        padding:10,
        fontSize:15,
        color:"black"
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
    account:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center"
    },
    accountText1:{
        fontSize:14,
        color:"black",
        fontWeight:"400"
    },
    accountText2:{
        fontSize:15,
        color:"black",
        fontWeight:"bold",
        textDecorationLine:"underline"
    }


})
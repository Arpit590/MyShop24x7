import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const SignupScreen = () => {

    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");


  return (
    <View style={styles.screen}>
      <Image
      source={require("../assets/Logo.png")}
      style={styles.image}
      />
      <Text style={styles.heading}>MyShop 24x7</Text>
      <View style={styles.login}>
        <View style={styles.loginOption}>
            <Text style={styles.email}>Name</Text>
            <TextInput
            placeholder='Enter your name'
            value={name}
            onChangeText={(text)=>setName(text)}
            placeholderTextColor="black"
            style={styles.input}
            />
        </View>
        <View style={styles.loginOption}>
            <Text style={styles.email}>Phone Number</Text>
            <TextInput
            placeholder='Enter your phone number'
            placeholderTextColor="black"
            keyboardType='decimal-pad'
            value={phone}
            onChangeText={(text)=>setPhone(text)}
            style={styles.input}
            />
        </View>
        <View style={styles.loginOption}>
            <Text style={styles.email}>Email</Text>
            <TextInput
            placeholder='Enter your email'
            keyboardType='email-address'
            value={email}
            onChangeText={(text)=>setEmail(text)}
            placeholderTextColor="black"
            style={styles.input}
            />
        </View>
        <View style={styles.loginOption}>
            <Text style={styles.email}>Password</Text>
            <TextInput
            placeholder='Enter your password'
            placeholderTextColor="black"
            value={password}
            onChangeText={(text)=>setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
            />
        </View>
        <View style={styles.account}>
            <Text style={styles.accountText1}>Already have an account? </Text>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Login")}
            activeOpacity={0.8} style={styles.accountContainer}>
                <Text style={styles.accountText2}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} 
      onPress={()=>navigation.navigate("Custom")}
      style={styles.button}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

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
        marginTop:30
    },
    heading:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        marginVertical:20
    },
    login:{
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
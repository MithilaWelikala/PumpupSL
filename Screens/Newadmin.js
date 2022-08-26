import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorageStatic } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../fir/firebase-config';


import backimage from '../assets/backimage.jpg';


const Newadmin = ({ navigation }) => {
    const [email, setEmail] = React.useState(password);
    const [password, setPassword] = React.useState('');
    const  paskey = password;
    const actualkey = 'Malindu3456%';

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    
    

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Sign in!')
            state={
                email:"",
                password:""
              }
              this.setState({ email: text })
            
            //aftercode
            const password = setPassword;
            const passkey = 'Malindu3456%';
            if (password = passkey) {
                navigation.navigate('DashboardusersScreen')
            }
           
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }
    return(
        <View style={Styles.contentbox}
            behavior="padding"
        >

            <Image source={backimage} style={{width: 400, height: 880,}}/>

            <View style={Styles.bottomcontent}>
                    <View style={Styles.maintext2}>
                            <Text style={Styles.maintext}>Administation</Text>

                            <Text style={Styles.maintext22}
                                 >
                                    Enter Your Admin Password
                            </Text>


                            
                            <TextInput 
                                placeholder={'Admin email'}
                                value={email}
                                onChangeText={setEmail}
                                style={Styles.textinone}
                                >
                            </TextInput>
                          
            
                            <TextInput 
                                placeholder={'Enter Admin Password'}
                                value={password}
                                onChangeText={setPassword}
                                style={Styles.textinone}
                                secureTextEntry>
                            </TextInput>

                            <TouchableOpacity style={Styles.buttonback}
                                onPress={handleSignIn}>
                                <Text style={Styles.buttontext}>Sign in as a Admin</Text>
                            </TouchableOpacity>


                            <Text style={Styles.maintext223}
                                    onPress={() => navigation.navigate('DashboardforGuests')}>
                                    Visit As a guest
                            </Text>

                    </View>
                  
            </View>
            
                        
        </View>
    )
}

export default Newadmin

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#'
    },
    bottomcontent: {
        zIndex: 1,
        position: 'absolute',
        marginHorizontal: 30,
        alignSelf: 'flex-start',
    },
    maintext2: {
        
    },
    maintext: { 
        color: 'white',
        fontSize: 40,
        fontWeight: '600',
       
        paddingTop: 50,
        textAlign: 'left'
    },

    maintext22: { 
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 100,
        textAlign: 'left'
    },
    maintext223: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        marginTop: 0,
        marginBottom: 20,
        textAlign: 'center'
    },
    backimage: {
            width: 500,
            height: 700,
    },
    buttonback: {
        flex: 0,
        width: 280,
        height: 70,
        backgroundColor: '#FFD703',
        alignSelf: 'center',
        borderRadius: 45,
        TouchableOpacity: 2,
        alignItems: 'center',
        
    },
    buttontext: {
        fontSize: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,

    },
    image2: {
        width: 30,
        height: 15,
        top: -39,
        marginLeft: 220,
    },
    backimage: {
        width: 290,
        height: 250,
        top: 10,
        left: 50,
        justifyContent: 'space-between',
    },
    imgcontainn: {
        
        alignItems: 'center',
        top: 230,
    },
    imgcontain: {
        
        alignItems: 'center',
    },
    textinone: {
        width: 320,
        height: 60,
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        marginBottom: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 18,
    },
  
});
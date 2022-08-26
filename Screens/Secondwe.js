import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backimage from '../assets/backgroundfortime.jpg';
import arrow from '../assets/right-arrow.png';


const Secondwe = ({ navigation }) => {
    return(
        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding"
        >

            <Image source={backimage} style={{width: 400, height: 880,}}/>

            <View style={Styles.bottomcontent}>
                    <KeyboardAvoidingView style={Styles.maintext2}>

                            <Text style={Styles.maintext}>Welcome to{"\n"}First Personal Training Application in Sri Lanka</Text>
                            
                            

                            <TouchableOpacity style={Styles.buttonback}
                                onPress={() => navigation.navigate('Setup Account')}>
                        
                                <Text style={Styles.buttontext}>Let's Setup</Text>
                    
                            </TouchableOpacity>

                          

                    </KeyboardAvoidingView>
                  
            </View>
            
            

            


            <TouchableOpacity style={Styles.buttonback}
                onPress={() => navigation.navigate('Signin')}>
                <Text style={Styles.buttontext}>Get Started</Text>
              
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Secondwe

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#'
    },
    bottomcontent: {
        zIndex: 1,
        position: 'absolute',
        marginHorizontal: 30,
        alignSelf: 'center',
    },
    maintext2: {
        alignItems: 'center',
    },
    maintext: { 
        color: 'white',
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 50,
        paddingTop: 460,
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
        paddingHorizontal: 50,
        paddingVertical: 20,

    },
    arrow: {
        position: 'absolute',
        top: 0,
        width: 200,
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
        top: 190,
        left: 50,
        justifyContent: 'space-between',
    },
    skiptext: {
        fontSize: 15,
        color: 'white',
        marginTop: 20,
    },
  
});
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backimage from '../assets/backgroundimage.jpg';







const Packages = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding"
        >



<Image source={backimage} style={{width: 400, height: 880,}}/>

<View style={Styles.bottomcontent}>
        <KeyboardAvoidingView style={Styles.maintext2}>


        <View  style={Styles.workoutboxmain}>
                                    
                                    <Text style={Styles.wokouttext5}>PumpUpSL</Text>
                                    <Text style={Styles.wokouttext5}>Premium</Text>
                                    
                                   
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text style={Styles.workout}>Personal Training</Text>
                                <Text style={Styles.workout}>Custom Meal Plans</Text>
                                <Text style={Styles.workout}>Monitor Your Progress</Text>

                                <Text style={Styles.workout5}>Pay monthly and get full access. please visit our website for futher details.</Text>
                                </View>

                            
                                
                        
                                <TouchableOpacity style={Styles.buttonback}
                                onPress={() => navigation.navigate('SignupScreen')}>
                                <Text style={Styles.buttontext}>Continue</Text>
                                </TouchableOpacity>
                

               


                <Text style={Styles.maintext223}
                        onPress={() => navigation.navigate('DashboardforGuests')}>
                        Visit As a guest
                </Text>

        </KeyboardAvoidingView>
      
</View>
       
                      
                        
                              

                    


        </KeyboardAvoidingView>
    )
}

export default Packages

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#141414',

        alignContent: 'center'
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
        marginBottom: 20,
        paddingTop: 120,
        textAlign: 'left'
    },

    maintext22: { 
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 250,
        textAlign: 'left'
    },
    maintext223: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        marginTop: 430,
        marginBottom: 20,
        textAlign: 'center'
    },
    backimage: {
            position: 'absolute',
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
        top: 380,
        
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
        top: 190,
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
    welcometext: {
        fontSize: 20,
        fontWeight: '800',
        marginTop: 0,
        color: 'white',
    },
    margincont: {
        marginHorizontal: 20,
    },
    workout5: {
        fontSize: 17,
        marginTop: 110,
        color: 'white',
        marginHorizontal: 35,
        textAlign: 'center',
    },
    workoutbox: {
        marginTop: 10,
        maxWidth: 370,
        width: 345,
        height: 160,
        maxHeight: 450,
        backgroundColor: 'black',
        borderRadius: 12,

    },
    workoutbox2: {
        marginTop: 20,
        maxWidth: 370,
        width: 345,
        height: 150,
        maxHeight: 450,
        backgroundColor: 'black',
        borderRadius: 12,

    },
    wokouttext1: {
        position: "absolute",
        fontSize: 30,
        fontWeight: '800',
        color: 'gold',
        marginTop: 25,
        marginHorizontal: 20,
    },
    wokouttext2: {
        position: "absolute",
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        marginTop: 105,
        marginHorizontal: 20,
    },
    wokouttext3: {
        position: "absolute",
        fontSize: 30,
        fontWeight: '800',
        color: 'black',
        marginTop: 30,
        marginHorizontal: 20,
    },
    wokouttext4: {
        position: "absolute",
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        marginTop: 105,
        marginHorizontal: 20,
    },
    workoutboxmain: {
        marginTop: 30,
        
        
        height: 170,
        maxHeight: 450,
        borderRadius: 12,
        alignItems: 'center',
        textAlign: 'center',
    },

    wokouttext5: {

        fontSize: 35,
        fontWeight: '500',
        color: 'white',
        marginTop: 5,
        top: 130,
        marginHorizontal: 0,
    },
    startbutton: {
        marginTop: 95,
        width: 190,
        height: 40,
        borderWidth: 1,
        color: 'white',
        backgroundColor: 'white',
        borderRadius: 30,
        alignContent: 'flex-start',
        justifyContent: 'center',
    },
    startbuttontext: {
        fontSize: 16,
        paddingHorizontal: 20,
        fontWeight: '300',
    },
    arrowright: {
        position: 'absolute',
        width: 30,
        height: 30,
        marginHorizontal: 150,
    },
    workout: {
        fontSize: 24,
        color: 'white',
        marginTop: 0,
        top: 70,
    },
    slidescrollcontentfirst: {
        width: 220,
        top: 20,
        marginBottom: 15,

    },
    excersiceimage: {
        width: 220,
        height: 160,
        borderRadius: 10,
    },
   
    slidescrollcontent: {
        top: 20,
        width: 220,
        height: 180,
        marginLeft: 20,
    },
    workname: {
        
        fontSize: 15,
        marginTop: 5,
        fontWeight: '700',
        color: 'greenyellow',
        height: 70,
    },
    worktime: {
        position: 'absolute',
        marginTop: 3,
        fontSize: 14,
        color: 'white',
        marginTop: 200,    
    },
    scrollmain: {
        marginTop: 40,
    },
    workoutboxab: {
        marginTop: 10,
        maxWidth: 370,
        width: 345,
        height: 190,
        maxHeight: 450,
        backgroundColor: 'black',
        borderRadius: 12,

    },

});
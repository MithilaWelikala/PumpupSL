import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backimage from '../assets/payment.jpg';
import food from '../assets/food.jpg';
import arrowright from '../assets/ar.png';
import babelshoulderpress from '../assets/babellshoulderpress.jpg';
import backsquart from '../assets/backsq.jpg';
import benchpress from '../assets/benchpress.jpg';
import bcrunch from '../assets/bcrunch.jpg';
import absworkout from '../assets/absworkout.jpg';
import twist from '../assets/twist.jpg';
import secondmeal from '../assets/secondmeal.jpg';
import secondmeal3 from '../assets/secondmeal3.jpg';
import profile from '../assets/pcomunity.jpg';
import backtohome from '../assets/left.png';
import payment from '../assets/payment.png';
import help from '../assets/help.png';
import privacypo from '../assets/privacypo.png';
import community from '../assets/community.png';
import { User } from 'firebase/auth';
import payment2 from '../assets/payment.jpg';

const Profile = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
 
    return(
        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding"
        >


            <View style={Styles.margincont}>

               
                        
                                <View  style={Styles.workoutboxmain}>

                                        <TouchableOpacity style={Styles.backbutton}
                                            onPress={() => navigation.navigate('DashboardusersScreen')}
                                         >
                                            <Image source={backtohome} style={Styles.back}/>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={Styles.paycardt}>
                                            <Image source={payment2} style={Styles.payment2}/>
                                            <View style={Styles.payments23}>
                                                <Text style={Styles.textform1}>
                                                    Pay Now!
                                                </Text>
                                                <Text></Text>
                                                <Text>Click here to pay your{"\n"}monthly fee</Text>
                                            </View>
                                        </TouchableOpacity>

                                        

                                        <TouchableOpacity style={Styles.paycard}>
                                            <Image source={profile} style={Styles.payment23}/>
                                            <View style={Styles.payments23}>
                                                <Text style={Styles.textform1}>
                                                    PumpUpSL{"\n"}Community
                                                </Text>
                                                <Text></Text>
                                                <Text>Join with Our{"\n"}Community</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={Styles.taskone}
                                            onPress={() => navigation.navigate('Accountdetails')}
                                        >
                                            <Image source={community} style={Styles.icon}/>
					                        <Text style={Styles.icontext}>Account</Text>
                                        </TouchableOpacity>

                                        <Text></Text>

                                        <TouchableOpacity style={Styles.taskone}
                                        onPress={() => navigation.navigate('SigninScreen')}
                                        >
                                            <Image source={payment} style={Styles.icon}/>
					                        <Text style={Styles.icontext}>Payment</Text>
                                        </TouchableOpacity>
                                        <Text></Text>
                                       

                                        <TouchableOpacity style={Styles.taskone}
                                        onPress={() => navigation.navigate('SigninScreen')}
                                        >
                                            <Image source={help} style={Styles.icon}/>
					                        <Text style={Styles.icontext}>Support</Text>
                                        </TouchableOpacity>
                                        <Text></Text>
                                        

                                        <TouchableOpacity style={Styles.taskone}
                                        onPress={() => navigation.navigate('SigninScreen')}
                                        >
                                            <Image source={privacypo} style={Styles.icon}/>
					                        <Text style={Styles.icontext}>Privacy Policy</Text>
                                        </TouchableOpacity>
                                        <Text></Text>
                                            


                                        
                                        <Text>PumpSl by Grapcreate</Text>
                                                                       
                                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Profile

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#141414',
        alignContent: 'center'
    },
    workoutboxmain: {
        marginTop: 30,
        maxWidth: 370,
        width: 345,
        height: 170,
        maxHeight: 450,
        borderRadius: 12,
    },
    backbutton: {
        marginHorizontal: 25,
    },
    back: {
        width: 30,
        height: 30,
        marginTop: 40,
    },
        icontext: {
        fontSize: 15,
        fontWeight: '400',
        position: 'absolute',
        marginLeft: 105,
    },
    icon: {
        width: 25,
        height: 25,
    },
    taskone: {
        marginHorizontal: 35,
        marginTop: 20,
    },
    icontext: {
        color: 'white',
        position: 'absolute',
        paddingVertical: 0,
        fontSize: 15,
        marginLeft: 50,
    },
    taskdevice: {
        borderBottomColor: 'grey',
        width: 325,
        marginHorizontal: 35,
        borderBottomWidth: 1,
        top: -9,
    },
    payment2: {
        width: 325,
        height: 150,
        borderRadius: 20,
        
    },
    payments23: {
        position: 'absolute',
        zIndex: 10,
        marginHorizontal: 20,
        marginTop: 30
    },
    paycard: {
        marginHorizontal: 25,
        marginTop: 20,
    },
    textform1: {
        fontSize: 20,
        fontWeight: '600',
    },
    paycardt: {
        marginHorizontal: 25,
        marginTop: 40,
    },
    payment23: {
        width: 325,
        height: 250,
        borderRadius: 20,
    },
});
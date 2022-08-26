import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet,  SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorageStatic } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, reauthenticateWithPhoneNumber } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../fir/firebase-config';
export const AuthContext = React.createContext();

import clientimages from '../assets/pcomunity.jpg';
import pay from '../assets/payment.jpg';
import search from '../assets/search.png';
import work from '../assets/workout.png';
import food from '../assets/restaurant.png';
import { ScrollView } from 'react-native-web';


const Admindashboard = ({ navigation }) => {

    return(
        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding"
        >
           
            <Text style={Styles.maintextt}>Admin Dashboard</Text>
           

            <TouchableOpacity>
                    <Image source={search} style={Styles.searchicon}/>
                    <TextInput
                        
                        placeholder='Search Client Details'
                        style={Styles.search}
                        placeholderTextColor={"white"}
                        onPressIn={() => navigation.navigate('Checkclient')}
                        animationenable={true}

                        
                    >
                       
                    </TextInput>


                
            </TouchableOpacity>
                <Text></Text>
            <TouchableOpacity
                onPressIn={() => navigation.navigate('Manage')}
            >
            <Image source={clientimages} style={Styles.mainboxedds}/>
           
               
               <View style={{position: 'absolute', marginHorizontal: 25, paddingHorizontal: 17, marginTop: 20, color: 'black',}}>
                <Text style={Styles.paymentt}>Manage Account</Text>
                <Text></Text>
                <Text style={Styles.paymenttd}>Manage and add details for your Account</Text>
                <Text style={Styles.paymenttd}></Text>
                <Text style={Styles.paymenttd}></Text>
               </View>
               
              
           
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
                 onPressIn={() => navigation.navigate('Manage Payments')}
            >
            <Image source={pay} style={Styles.mainboxed}/>
           
               
               <View style={{position: 'absolute', marginHorizontal: 25, paddingHorizontal: 17, marginTop: 20, color: 'black',}}>
                <Text style={Styles.paymentt}>Manage Payment</Text>
                <Text></Text>
                <Text style={Styles.paymenttd}>Manage Payments and payment details</Text>
                <Text style={Styles.paymenttd}></Text>
                <Text style={Styles.paymenttd}></Text>
               </View>
               
              
           
            </TouchableOpacity>


            <Text style={Styles.paymenttxx}>Workouts and Meal Plans</Text>
            <View>
            <TouchableOpacity style={Styles.mainboxedd}
                   onPressIn={() => navigation.navigate('Add Workout')}

            >
                 <Image source={work} style={{width: 80, height: 80,}}/>
                 <Text></Text>
                <Text style={Styles.paymenttx}>Add Workout</Text>   
            </TouchableOpacity>

            
            <TouchableOpacity style={Styles.mainboxeddx}
                onPressIn={() => navigation.navigate('Add mealplan')}
                    
            >
                 <Image source={food} style={{width: 80, height: 80,}}/>
                 <Text></Text>
                <Text style={Styles.paymenttx}>Add Meal plan</Text>   
            </TouchableOpacity>
            </View>
           


            
            
          
            
           
        </KeyboardAvoidingView>
    )
}

export default Admindashboard

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: 'black',
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
    searchicon: {
        width: 22,
        height: 22,
        position: 'absolute',
        marginVertical: 15,
        zIndex: 1,
        marginLeft: 310,
    },
    maintextt: {
        fontSize: 26,
        color: 'white',
        fontWeight: '800',
        marginHorizontal: 20,
        marginTop: 90,
        marginBottom: 25,
    },
    mainboxed: {
        width: 350,
        height: 140,
        marginHorizontal: 15,
        backgroundColor: '#181818',
        borderRadius: 15,
        paddingLeft:25,
        paddingTop: 20,
    },
    mainboxedds: {
        width: 350,
        height: 190,
        marginHorizontal: 15,
        backgroundColor: '#181818',
        borderRadius: 15,
        paddingLeft:25,
        paddingTop: 20,
    },
    mainboxedd: {
        width: 165,
        height: 180,
        borderRadius: 15,
        marginHorizontal: 15,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        
       
    },
    mainboxeddx: {
        position: 'absolute',
        width: 165,
        height: 180,
        borderRadius: 15,
        marginLeft: 200,
        marginRight: 15,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        
       
    },
    search: {
        width: 350,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#222222',
        paddingHorizontal: 25,
        justifyContent: 'center',
        color: 'white',
        marginHorizontal: 15,

    },
    paymenttxx: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 15,
        marginTop: 30,
        marginBottom: 15,

    },
    paymentt: {
        color: 'black',
        fontSize: 24,

    },
    paymenttx: {
        color: 'white',
        fontSize: 19,


    },
    paymenttd: {
        color: 'black',
        fontSize: 18,
        marginTop: 10,
        fontWeight: '200',

    },
   
});






















































































































































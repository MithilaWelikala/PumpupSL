import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backsquart from '../assets/backsq.jpg';
import backtohome from '../assets/left.png';
import leg from '../assets/illustration.png';
import barbell from '../assets/barbell.png';
import clock from '../assets/clock.png';




const WorkoutPlan = ({ navigation }) => {
   

    
    return(
        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding"
        >
            

            <TouchableOpacity style={Styles.backbutton}
                    onPress={() => navigation.navigate('DashboardusersScreen')}
            >
                <Image source={backtohome} style={Styles.back}/>
            </TouchableOpacity>


            <Image source={leg} style={Styles.illustration}/>
            <View style={Styles.textforr}>
            <Text style={Styles.textfor}>Can't find Workout</Text>
            </View>
            
           
            
            

        </KeyboardAvoidingView>
    )
}

export default WorkoutPlan

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#000000',

        alignContent: 'center'
    },
    backsquart: {
        height: 210,
        width: 380, 
    },
    backbutton: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 20,
        marginHorizontal: 20,
        top: 50,

    },
    back : {
        width: 30,
        height: 30,
    },
    illustration: {
        marginTop: 240,
        marginHorizontal: 50,
        width: 270,
        height: 270,
    },
    textfor: {
        color: 'white',
        fontSize: 18,
       
    },
    textforr: {
        marginTop: 30,
        alignItems: 'center',
    },

   


});
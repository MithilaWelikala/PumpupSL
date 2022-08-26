import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backsquart from '../assets/backsq.jpg';
import backtohome from '../assets/left.png';
import leg from '../assets/leg.png';
import barbell from '../assets/barbell.png';
import clock from '../assets/clock.png';




const Backsquarttwo = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding"
        >
            <Image source={backsquart} style={Styles.backsquart}/>

            <TouchableOpacity style={Styles.backbutton}
                    onPress={() => navigation.navigate('DashboardforGuests')}
            >
                <Image source={backtohome} style={Styles.back}/>
            </TouchableOpacity>

            <View style={Styles.secondframe}>
                    <View>
                        <Text style={Styles.titletext}>Back Squart</Text>
                        <Text style={Styles.titletext2}>20 minutes</Text>
                        <View style={Styles.musclegroup}>
                            <Image source={leg} style={Styles.legimage}/>
                            <Text style={Styles.muscletext}>Upper Leg</Text>
                        </View>
                        <TouchableOpacity style={Styles.buttonforstart}
                            onPress={() => navigation.navigate('TimerScreen')}
                        >
                            <Text style={Styles.buttontext}>Start Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <Text style={Styles.textforexs}>
                Most trainees find that their strength actually 
                improves a little bit on each subsequent wave. In other words on your 4th set you should be able to lift slightly more weight for 7 reps than you could on your 1st set. This is due to the principle of post-tetanic potentiation.
                </Text>

               

                <View>
                    <Text style={Styles.note01}>
                    wide stance
                    </Text>

                    <Text style={Styles.note02}>
                    heels flat
                    </Text>

                    <View style={Styles.note03}>
                        <Image source={barbell} style={Styles.barbell}/>
                    </View>
                    
                </View>


                <View style={Styles.maincontent}>
                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>Set 01</Text>
                            <Text style={Styles.setsand3}>12 Reps</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>60 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>Set 02</Text>
                            <Text style={Styles.setsand3}>12 Reps</Text>
                        </View>

                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>60 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>Set 03</Text>
                            <Text style={Styles.setsand3}>12 Reps</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>60 Second Rest</Text>
                        </View>
                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>Set 04</Text>
                            <Text style={Styles.setsand3}>12 Reps</Text>
                        </View>
                </View>


                

                
              
            </ScrollView>

            
            

        </KeyboardAvoidingView>
    )
}

export default Backsquarttwo

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
    secondframe: {
        width: 400,
        height: 150,
        backgroundColor: '#141414',
    },
    titletext: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
        marginHorizontal: 25,
        top: 16,
    },
    titletext2: {
        color: 'white',
        fontSize: 14,
        fontWeight: '300',
        marginHorizontal: 25,
        top: 18,
    },
    legimage: {
        width: 20,
        height: 20,
        left: 10,

    },
    musclegroup: {
        backgroundColor: 'white',
        width: 130,
        height: 35,
        justifyContent: 'center',
        borderRadius: 15,
        left: 225,
        top: -25,
    },
    muscletext: {
        position: 'absolute',
        left: 40,
        fontSize: 15,
        top: 5,
    },
    buttonforstart: {
        width: 330,
        height: 45,
        backgroundColor: 'greenyellow',
        marginHorizontal: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        fontSize: 18,
        fontWeight: '500',
    },
    note01: {
        fontSize: 15,
        marginHorizontal: 25,
        marginTop: 20,
        width: 120,
        height: 40,
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        borderRadius: 10,
    },
    note02: {
        position: 'absolute',
        fontSize: 15,
        left: 130,
        marginHorizontal: 25,
        marginTop: 20,
        width: 120,
        height: 40,
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        borderRadius: 10,
    },
    note03: {
        position: 'absolute',
        fontSize: 15,
        left: 260,
        marginHorizontal: 25,
        marginTop: 20,
        width: 70,
        height: 40,
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    barbell: {
        width: 50,
        height: 25,
    },
    setsand: {
        width: 330,
        height: 80,
        backgroundColor: '#252525',
        marginHorizontal: 25,
        borderRadius: 13,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    setsand2: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white'
    },
    setsand3: {
        fontSize: 25,
        fontWeight: '500', 
        color: 'white'
    },
    setsand4: {
        width: 330,
        height: 50,
        backgroundColor: 'dimgray',
        marginHorizontal: 25,
        borderRadius: 13,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    setsand5: {
        fontSize: 20,
        fontWeight: '300',
        color: 'lawngreen'
    },
    maincontent: {
        marginTop: 20,
    },
    textforexs: {
        fontSize: 14,
        color: 'white',
        marginHorizontal:25,
        marginTop: 20,
    },



});
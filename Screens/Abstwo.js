import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backsquart from '../assets/absimage.jpg';
import backtohome from '../assets/left.png';
import leg from '../assets/abs.png';
import barbell from '../assets/inoutabs.jpg';
import clock from '../assets/pushhh.jpg';


import sketch from '../assets/absske.png';
import workouticon from '../assets/fitness.png';


import excersiceone from '../assets/excersiceone.jpg';
import excersicetwo from '../assets/excersicetwo.jpg';
import excersicethree from '../assets/excersicethree.jpg';
import Pushup from '../assets/pushh.jpg';
import sqats from '../assets/sqats.jpg';




import excersicefour from '../assets/excersicefour.jpg';
import tipimage from '../assets/tipimage.jpg';




const Abstwo = ({ navigation }) => {
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
                        <Text style={Styles.titletext}>Abs in 10 Days</Text>
                        <Text style={Styles.titletext2}>5 Hours</Text>
                        <View style={Styles.musclegroup}>
                            <Image source={leg} style={Styles.legimage}/>
                            <Text style={Styles.muscletext}>6 Packs</Text>
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

                        <View style={Styles.metrics}>

                        <Text style={Styles.texts}>5 Hours</Text>
                        <Text style={Styles.textss}>Total Time</Text>





                        <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={Styles.days}>
                        <Text style={Styles.day}>Mon</Text>
                        <Text style={Styles.day}>Tue</Text>
                        <Text style={Styles.day}>Wen</Text>
                        <Text style={Styles.day}>Thu</Text>
                        <Text style={Styles.day}>Fri</Text>
                        <Text style={Styles.day}>Sat</Text>
                        <Text style={Styles.day}>Sun</Text>
                        
                        </ScrollView>
                        </View>



                <Text></Text>

                <View>
                    <Text style={Styles.note01}>
                    Abs Workout
                    </Text>

                    <Text style={Styles.note02}>
                    Any Area
                    </Text>

                    
                </View>

                <Text></Text>

                <Text style={Styles.excersice}>Excercies</Text>
                    <ScrollView
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                     style={Styles.days2}
                    >
                        <View style={Styles.mainframes}>
                                <Image source={excersiceone} style={Styles.excersiceone}/>
                                <Text style={Styles.excercisename}>Crunch with{"\n"}leg lift</Text>
                                <Text style={Styles.excercisenametwo}>30 Seconds</Text>
                        </View>


                     
                        <View style={Styles.mainframes}>
                                <Image source={excersicetwo} style={Styles.excersiceone}/>
                                <Text style={Styles.excercisename}>Crunch with{"\n"}1- leg lift</Text>
                                <Text style={Styles.excercisenametwo}>30 Seconds</Text>
                        </View>


                        <View style={Styles.mainframes}>
                                <Image source={excersicethree} style={Styles.excersiceone}/>
                                <Text style={Styles.excercisename}>Bicycle {"\n"}Crunch</Text>
                                <Text style={Styles.excercisenametwo}>30 Seconds</Text>
                        </View>

                        <View style={Styles.mainframes}>
                                <Image source={excersicefour} style={Styles.excersiceone}/>
                                <Text style={Styles.excercisename}>Shoulder{"\n"}Touch</Text>
                                <Text style={Styles.excercisenametwo}>30 Seconds</Text>
                        </View>

                        <View style={Styles.mainframes}>
                                <Image source={clock} style={Styles.excersiceone}/>
                                <Text style={Styles.excercisename}>Push-Up And {"\n"}Rotation</Text>
                                <Text style={Styles.excercisenametwo}>30 Seconds</Text>
                        </View>


                     
                        <View style={Styles.mainframes}>
                                <Image source={sqats} style={Styles.excersiceone}/>
                                <Text style={Styles.excercisename}>Squat{"\n"}Pulses</Text>
                                <Text style={Styles.excercisenametwo}>30 Seconds</Text>
                        </View>


                        <View style={Styles.mainframes}>
                                <Image source={barbell} style={Styles.excersiceone}/>
                                <Text style={Styles.excercisename}>In And{"\n"}Out Abs</Text>
                                <Text style={Styles.excercisenametwo}>30 Seconds</Text>
                        </View>
        
                    </ScrollView>


                <View style={Styles.maincontent}>
                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>30 Seconds</Text>
                            <Text style={Styles.setsand3}>Crunch with leg lift</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>20 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>30 Seconds</Text>
                            <Text style={Styles.setsand3}>Bicycle Crunch</Text>
                        </View>

                        <View style={Styles.tipss}>
                            <Image source={tipimage} style={Styles.tips}/>
                            <Text style={Styles.setsand2}>Pro Tip #01</Text>
                            <Text style={Styles.setsand3}>Breath Control</Text>
                            <Text></Text>
                            <Text style={Styles.setsand2}>Take a breath before legs{"\n"}up and hold breath during{"\n"}the leg up position</Text>
                        </View>


                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>20 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>30 Seconds</Text>
                            <Text style={Styles.setsand3}>Shoulder Touch</Text>
                        </View>
                       
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>20 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>12 Reps</Text>
                            <Text style={Styles.setsand3}>Push Up and Rotation</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>20 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>12 Reps</Text>
                            <Text style={Styles.setsand3}>Push Up and Rotation</Text>
                        </View>
                        <Text></Text>
                        <View style={Styles.tipss}>
                            <Image source={Pushup} style={Styles.tips}/>
                            <Text style={Styles.setsand2}>Pro Tip #02</Text>
                            <Text style={Styles.setsand3}>Body Position</Text>
                            <Text></Text>
                            <Text style={Styles.setsand2}> hold the top position of{"\n"}the pushup with perfect form {"\n"}as long as you can.</Text>
                        </View>
                        <Text></Text>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>20 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>12 Reps</Text>
                            <Text style={Styles.setsand3}>Squat Pulses</Text>
                        </View>

                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>20 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>30 Seconds</Text>
                            <Text style={Styles.setsand3}>In And Out Abs</Text>
                        </View>

                        <Text></Text>
                        <Text style={Styles.excersice}>Days Schedule</Text>
                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>10 Days</Text>
                            <Text style={Styles.setsand3}>45 Minutes each day</Text>
                        </View>
                       
                       
                </View>


                

                
              
            </ScrollView>

            
            

        </KeyboardAvoidingView>
    )
}

export default Abstwo

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
    tips: {
        position: 'absolute',
        width: 330,
        height: 180,
        backgroundColor: '#252525',
        
        borderRadius: 13,
        
        alignItems: 'flex-start',
        paddingHorizontal: 25,
        paddingTop: 25,
        justifyContent: 'flex-start',
    },
    tipss: {
        width: 330,
        height: 180,
        backgroundColor: '#252525',
        marginHorizontal: 25,
        borderRadius: 13,
        marginTop: 10,
        alignItems: 'flex-start',
        paddingHorizontal: 25,
        paddingTop: 25,
        justifyContent: 'flex-start',

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
    legimage: {
        width: 20,
        height: 20,
        left: 10,

    },
    maintext: {
        color: 'white',
        left: 25,
        top: 10,
        fontSize: 30,
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
    excersice: {
        fontSize: 20,
        color:'white',
        marginHorizontal: 25,
    },
    buttontext: {
        fontSize: 18,
        fontWeight: '500',
    },
    boxincontent: {
      position: 'absolute',
      top: 300,
      zIndex: 100,
      height: 500,
      width: 450,
      
    },
    sketchimage: {
        height: 290,
        marginTop: 20,
        width: 140,
        height: 200,
        top: -5,
    },

    applicationbarone: {
      height: 350,
      marginTop: 20,
      width: 150,
      height: 200,
      marginHorizontal: 20,
      top: 10,
      justifyContent: 'center',

    },
    metrics: {
      width: 325,
      height: 150,
      backgroundColor: 'white',
      top: 10,
      borderRadius: 20,
      marginHorizontal: 25,
      
    },
    texts: {
      fontSize: 25,
      fontWeight: '800',
      color: 'black',
      marginLeft: 20,
      marginTop: 20,
    },
    textss: {
      fontSize: 15,
      fontWeight: '200',
      color: 'black',
      marginLeft: 20,
      marginTop: 0,
    },
    days: {
      position: 'absolute',
      top: 90,
      left: 20,
      width: 300,
    },
    days2: {
        top: 10,
        marginHorizontal: 25,
        width: 330,
        height: 240,
      },
    day: {
      paddingTop: 7,
      paddingHorizontal: 20,
      paddingBottom: 7,
      backgroundColor: 'black',
      borderRadius: 45,
      color: 'white',
      marginRight: 10,
    },
    workouticon: {
        position: 'absolute',
        width: 50,
        zIndex: 1,
        top: 20,
    },
    mages: {
        position: 'absolute',
        width: 100,
        height: 100,
    },
    mainframes: {
        width: 150,
        height: 210,
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 10,
    },
    excersiceone: {
        width: 150,
        height: 120,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    excercisename: {
        fontSize: 15,
        fontWeight: '700',
        marginHorizontal: 20,
        marginTop: 10,
    },
    excercisenametwo: {
        fontSize: 12,
        color: 'grey',
        marginLeft: 20,
        marginTop: 10,
    },



});
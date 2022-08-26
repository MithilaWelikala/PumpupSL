import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backimage from '../assets/mainworkout.jpg';
import food from '../assets/food.jpg';
import arrowright from '../assets/ar.png';
import babelshoulderpress from '../assets/babellshoulderpress.jpg';
import backsquart from '../assets/backsq.jpg';
import benchpress from '../assets/benchpress.jpg';
import bcrunch from '../assets/bcrunch.jpg';
import absworkout from '../assets/absworkout.jpg';
import twist from '../assets/twist.jpg';
import secondmeal from '../assets/geels.jpg';
import secondmeal3 from '../assets/ata.jpg';
import secondmeal4 from '../assets/ata.jpg';
import profile3 from '../assets/account.png';
import shake from '../assets/shake.jpg';




const DashboardusersScreen = ({ navigation }) => {

    return(
        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding"
        >


            <View style={Styles.margincont}>

                <ScrollView
                style = {Styles.scrollmain}
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator={false}
                >
                        
                                <View  style={Styles.workoutboxmain}>
                                    
                                    <Text style={Styles.wokouttext5}>Pump up{"\n"}Your Journey !</Text>
                                    <TouchableOpacity style={Styles.startbutton}
                                        onPress={() => navigation.navigate('TimerScreen')}
                                    >
                                        
                                        <Text style={Styles.startbuttontext}>Start Workout</Text>
                                        <Image source={arrowright} style={Styles.arrowright}/>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={Styles.startbuttonx}
                                        onPress={() => navigation.navigate('Accountdetails')}
                                    >
                                        
                                       
                                        <Image source={profile3} style={Styles.profile3}/>
                                    </TouchableOpacity>
                                  
                                      
                                    
                                </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('WorkoutPlan')}
                        >
                                <View>
                                    <Image source={backimage} style={Styles.workoutbox}/>
                                    <Text style={Styles.wokouttext1}>Your Workout{"\n"}Schedule</Text>
                                    <Text style={Styles.wokouttext2}>Explore your full{"\n"}Workout Schedule</Text>
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('MealPlan')}
                        >
                                <View>
                                    <Image source={food} style={Styles.workoutbox2}/>
                                    <Text style={Styles.wokouttext3}>Your Meal{"\n"}Plan</Text>
                                    <Text style={Styles.wokouttext4}>Explore your full{"\n"}meal plan</Text>
                                </View>
                        </TouchableOpacity>


                        <Text style={Styles.workout}>Excersices</Text>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity style={Styles.slidescrollcontentfirst}
                                onPress={() => navigation.navigate('BarbellShoulder')}
                            >
                                <Image source={babelshoulderpress} style={Styles.excersiceimage}/>
                                <Text  style={Styles.workname}>Barbell Shoulder{"\n"}Press</Text>
                                <Text  style={Styles.worktime}>15 mins</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.slidescrollcontent}
                                onPress={() => navigation.navigate('Backsquart')}
                            >
                                <Image source={backsquart} style={Styles.excersiceimage}/>
                                <Text  style={Styles.workname}>Back Squat{"\n"}Deep</Text>
                                <Text  style={Styles.worktime}>20 mins</Text>
                            </TouchableOpacity>

                            
                            <TouchableOpacity style={Styles.slidescrollcontent}
                                onPress={() => navigation.navigate('Benchpress')}
                            >
                                <Image source={benchpress} style={Styles.excersiceimage}/>
                                <Text  style={Styles.workname}>Bench press{"\n"}wide grip</Text>
                                <Text  style={Styles.worktime}>15 mins</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.slidescrollcontent}
                                onPress={() => navigation.navigate('Bcrunch')}
                            >
                                <Image source={bcrunch} style={Styles.excersiceimage}/>
                                <Text  style={Styles.workname}>Bicycle{"\n"}Crunch</Text>
                                <Text  style={Styles.worktime}>10 mins</Text>
                            </TouchableOpacity>
                        </ScrollView>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Absworkout')}
                        >
                                <View>
                                    <Image source={absworkout} style={Styles.workoutboxab}/>
                                    <Text style={Styles.wokouttext1}>10 Day Abs{"\n"}Workout</Text>
                                    <Text style={Styles.wokouttext2}>To develop a truly{"\n"}impressive Sixpack</Text>
                                </View>
                        </TouchableOpacity>

                     

                        

                        
                        <Text style={Styles.workout}>Meals</Text>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity style={Styles.slidescrollcontentfirst}
                                onPress={() => navigation.navigate('MealOne')}
                            >
                                <Image source={twist} style={Styles.excersiceimage}/>
                                <Text  style={Styles.workname}>Spicy Egg with{"\n"}a twist </Text>
                                <Text  style={Styles.worktime}>20 mins</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.slidescrollcontent}
                                onPress={() => navigation.navigate('Mealthree')}>
                                <Image source={secondmeal} style={Styles.excersiceimage}/>
                                <Text  style={Styles.workname}>Oatmeal With{"\n"}Peanut Butter</Text>
                                <Text  style={Styles.worktime}>10 mins</Text>
                            </TouchableOpacity>

                            
                            <TouchableOpacity style={Styles.slidescrollcontent}
                                onPress={() => navigation.navigate('Mealfour')}
                            >
                                <Image source={secondmeal3} style={Styles.excersiceimage}/>
                                <Text  style={Styles.workname}>Double Bean {"\n"}Quinoa Salad</Text>
                                <Text  style={Styles.worktime}>10 mins</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.slidescrollcontent}
                                onPress={() => navigation.navigate('Shakeone')}
                            >
                                <Image source={shake} style={Styles.excersiceimage}/>
                                <Text  style={Styles.workname}>High Calourie{"\n"}Shake</Text>
                                <Text  style={Styles.worktime}>10 mins</Text>
                            </TouchableOpacity>
                        </ScrollView>                  
                </ScrollView>

                    

            </View>
            

        </KeyboardAvoidingView>
    )
}

export default DashboardusersScreen

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
    calculator: {
        marginTop: 30,
        maxWidth: 370,
        width: 345,
        height: 140,
        maxHeight: 450,
        backgroundColor: '#1d1d1d',
        borderRadius: 12,

    },
    startbuttonx: {
        marginLeft: 145,
        top: -130,
    },
    maintext: { 
        color: 'white',
        fontSize: 40,
        fontWeight: '600',
        marginBottom: 20,
        paddingTop: 120,
        textAlign: 'left'
    },
    calcehck: {
        color: 'white',
        fontSize: 25,
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
        marginTop: 20,
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
        maxWidth: 370,
        width: 345,
        height: 170,
        maxHeight: 450,
        borderRadius: 12,
    },

    wokouttext5: {
        position: "absolute",
        fontSize: 35,
        fontWeight: '500',
        color: 'white',
        marginTop: 0,
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
        fontSize: 18,
        color: 'white',
        marginTop: 20,
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
    profile3: {
        position: 'absolute',
        marginTop: 8,
        marginLeft: 145,
        width: 30,
        height: 30,
    },

});



import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backsquart from '../assets/bcrunch.jpg';
import backtohome from '../assets/left.png';
import leg from '../assets/abs.png';
import barbell from '../assets/barbell.png';
import clock from '../assets/clock.png';




const Bcrunchtwo = ({ navigation }) => {
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
                        <Text style={Styles.titletext}>Bicycle Crunch</Text>
                        <Text style={Styles.titletext2}>20 minutes</Text>
                        <View style={Styles.musclegroup}>
                            <Image source={leg} style={Styles.legimage}/>
                            <Text style={Styles.muscletext}>Six Packs</Text>
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
                The muscles used for bicycle crunches may change slightly based on the your trained range of motion and technique, but in the most general case, the muscles used for bicycle crunches are
                </Text>

               

                <View>
                    <Text style={Styles.note01}>
                    Core Strength
                    </Text>

                    <Text style={Styles.note02}>
                    No Equipments
                    </Text>

                  
                </View>


                <View style={Styles.maincontent}>
                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>Set 01</Text>
                            <Text style={Styles.setsand3}>12 Reps</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>30 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>Set 02</Text>
                            <Text style={Styles.setsand3}>12 Reps</Text>
                        </View>

                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>30 Second Rest</Text>
                        </View>

                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>Set 03</Text>
                            <Text style={Styles.setsand3}>12 Reps</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>30 Second Rest</Text>
                        </View>
                        <View style={Styles.setsand}>
                            <Text style={Styles.setsand2}>Set 04</Text>
                            <Text style={Styles.setsand3}>12 Reps</Text>
                        </View>
                </View>

                <Text style={Styles.titletext}>How To Do</Text>
                <Text></Text>

                <ScrollView
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                     
                >
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 01</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>Lie on your back with your legs straight up to the ceiling and your feet softly pointed.</Text>
                       
                        
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Swip to see more</Text>
                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 02</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>Draw the legs over the body and peel the spine up off the floor one vertebrae at a time.</Text>

                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 03</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>Place your hands on the back of your pelvis, your upper arms and elbows are on the floor supporting the pelvis.</Text>

                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 04</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>Reach your legs up to the ceiling so the are at 90 degrees to the floor. You are now in the start position.</Text>

                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 05</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>Simultaneously stretch your right leg towards the floor and draw your left leg towards your chest.</Text>

                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 06</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>bend the right knee dropping the heel towards the buttock.</Text>

                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 07</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>Taking the bent right leg forward and stretching the left leg back.</Text>

                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 08</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>Dropping the left heel towards the buttock – as if you were riding a bike upside down</Text>

                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 09</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>Pedal you invisible upside down bike forward 12 times</Text>

                    </View>
                    <View style={Styles.stepbox}>
                        <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>Step 10</Text>
                        <Text></Text>
                        <Text style={{fontSize: 26, fontWeight: '600', color: 'black'}}>and then reverse the movement to backpedal 12 times.</Text>

                    </View>
                   
                </ScrollView>

                

                
              
            </ScrollView>

            
            

        </KeyboardAvoidingView>
    )
}

export default Bcrunchtwo

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
    stepbox: {
        width: 330,
        height: 310,
        backgroundColor: 'white',
        marginHorizontal: 25,
        borderRadius: 13,
        marginTop: 10,
        paddingTop: 40,
        paddingHorizontal: 35,
        
    },


});
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import backimage from '../assets/geels.jpg';
import backtohome from '../assets/left.png';
import leg from '../assets/leg.png';
import barbell from '../assets/barbell.png';
import clock from '../assets/clock.png';

 


const Mealthreetwo = ({ navigation }) => {

    return(

        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding">
                
                <Image source={backimage} style={Styles.backsquart}/>

                <TouchableOpacity style={Styles.backbutton}
                        onPress={() => navigation.navigate('DashboardforGuests')}
                >
                    <Image source={backtohome} style={Styles.back}/>
                </TouchableOpacity>

                <View style={Styles.secondframe}>
                        <View>
                            <Text style={Styles.titletext}>Oatmeal With Peanut Butter</Text>
                            <Text style={Styles.titletext2}>15 minutes  |  1 Serving</Text>
                            
                        </View>
                    </View>


                <ScrollView
                    showsVerticalScrollIndicator={false}
                >


               


                <View style={Styles.maincontent}>
                        <View style={Styles.setsandcal}>
                            <Text style={Styles.setsand2}>Protein             Carbs             Fat</Text>
                            <Text style={Styles.setsand35}>11g            49g          12g</Text>

                            <Text style={Styles.setsand2}>Calories</Text>
                            <Text style={Styles.setsand36}>323 Cal</Text>
                        </View>

                        <Text style={Styles.titletext25}>Ingredients</Text>
                        <Text></Text>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>1-3/4 cups water</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>1 cup old-fashioned oats</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>2 tablespoons creamy peanut butter</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>2 tablespoons honey</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>2 teaspoons ground flaxseed</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>1/2 to 1 teaspoon ground cinnamon</Text>
                        </View>
                        <View style={Styles.setsand4}>
                            <Text style={Styles.setsand5}>Chopped apple, optional</Text>
                        </View>
                        
                        
                        <Text style={Styles.titletext25}>Process</Text>

                        <Text></Text>
                        <View style={Styles.setsand45}>
                            <Text style={Styles.number}>01</Text>
                            <Text style={Styles.number2}>bring water and salt to a boil. Stir in oats</Text>
                        </View>

                        <View style={Styles.setsand45}>
                            <Text style={Styles.number}>02</Text>
                            <Text style={Styles.number2}>Cook 5 minutes over medium heat. stirring occasionally.</Text>
                        </View>

                        <View style={Styles.setsand45}>
                            <Text style={Styles.number}>03</Text>
                            <Text style={Styles.number2}>Transfer oatmeal to 2 bowls</Text>
                        </View>

                        <View style={Styles.setsand46}>
                            <Text style={Styles.number}>04</Text>
                            <Text style={Styles.number2}>in each bowl, stir half each peanut butter, honey, flaxseed, cinnamon</Text>
                        </View>

                        <View style={Styles.setsand45}>
                            <Text style={Styles.number}>05</Text>
                            <Text style={Styles.number2}>If desired, apple. Serve immediately.</Text>
                        </View>                       
                </View>              
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Mealthreetwo

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
        height: 100,
        backgroundColor: '#141414',
    },
    titletext: {
        color: 'white',
        fontSize: 26,
        fontWeight: '700',
        marginHorizontal: 25,
        top: 16,
    },
    titletext2: {
        color: 'white',
        fontSize: 17,
        marginTop: 10,
        fontWeight: '300',
        marginHorizontal: 25,
        top: 18,
    },
    number: {
        marginTop: 15,
        marginLeft: 25,
        color: 'white',
        fontSize: 17,
    },
    number2: {
        marginTop: 5,
        marginLeft: 25,
        color: 'white',
        fontSize: 17,
        
    },
    titletext25: {
        color: 'white',
        fontSize: 22,
        marginTop: 10,
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
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginHorizontal: 25,
        top: 18,
    },
    setsand3: {
        fontSize: 25,
        fontWeight: '500', 
        color: 'white',
        
    },
    setsand35: {
        fontSize: 25,
        fontWeight: '500', 
        color: 'chartreuse',
        marginTop: 15,
        marginHorizontal: 25,
    },
    setsand36: {
        fontSize: 25,
        fontWeight: '500', 
        color: 'gold',
        marginTop: 15,
        marginHorizontal: 25,
    },
    setsand4: {
        width: 330,
        height: 50,
        backgroundColor: '#171717',
        marginHorizontal: 25,
        borderRadius: 13,
        marginTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    setsand45: {
        width: 330,
        height: 110,
        backgroundColor: '#171717',
        marginHorizontal: 25,
        borderRadius: 13,
        marginTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 6,
    },
    setsand46: {
        width: 330,
        height: 130,
        backgroundColor: '#171717',
        marginHorizontal: 25,
        borderRadius: 13,
        marginTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 6,
    },
    setsand47: {
        width: 350,
        height: 140,
        backgroundColor: '#FF9100',
        marginHorizontal: 15,
        borderRadius: 13,
        marginTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 6,
    },
    setsand5: {
        marginLeft: 25,
        fontSize: 17,
        fontWeight: '300',
        color: 'gold'
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
    setsandcal: {
        width: 330,
        height: 170,
        backgroundColor: '#252525',
        marginHorizontal: 25,
        borderRadius: 13,
        marginTop: 10,
        
    },


});
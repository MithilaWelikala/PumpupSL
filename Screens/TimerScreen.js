import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, TouchableHighlight, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

import backgroundfortime from '../assets/backgroundfortime.jpg';
import backtohome from '../assets/left.png';
import leg from '../assets/leg.png';
import barbell from '../assets/barbell.png';
import clock from '../assets/clock.png';




const TimerScreen = ({ navigation }) => {
    const [isTimerStart, setIsTimerStart] = React.useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = React.useState(false);
    const [timerDuration, setTimerDuration] = React.useState(90000);
    const [resetTimer, setResetTimer] = React.useState(false);
    const [resetStopwatch, setResetStopwatch] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <SafeAreaView style={styles.container2}>
            <Image source={backgroundfortime} style={styles.background}/>
        <View style={styles.container}>
            <View style={styles.textarea}>
                    <Text style={styles.title}>Let's Start !</Text>
            </View>

            <View style={styles.textarea}>
                    <Text style={styles.title2}>Start your workout and monitor your perfomance</Text>
            </View>
            
          
          <View style={styles.sectionStyle}>
            <Stopwatch
              laps
              
              start={isStopwatchStart}
              // To start
              reset={resetStopwatch}
              // To reset
              options={options}
              // Options for the styling
              getTime={(time) => {
                console.log(time);
              }}
            />
            <TouchableHighlight style={styles.buttonmain}
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}>
              <Text style={styles.buttonText}>
                {!isStopwatchStart ? 'Start' : 'Stop'}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.reset}
              onPress={() => {
                setIsStopwatchStart(false);
                setResetStopwatch(true);
              }}>
              <Text style={styles.buttonText2}>Reset now</Text>
            </TouchableHighlight>
          </View>
          
        </View>
      </SafeAreaView>
       )
}

export default TimerScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      position: 'absolute',
      
    },
    title: {
      top: 350,
      fontSize: 40,
      fontWeight: '500',
      color: 'white',
     

     
    },
    title2: {
        top: 350,
        fontSize: 20,
        fontWeight: '300',
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 25,

        
      
        
        
    },
    sectionStyle: {
      
      

    },
    textarea: {
        alignItems: 'center',
        marginLeft: 15,
    },
    buttonText: {
      fontSize: 20,
      
    },
    buttonText2: {
        color: 'white',
        fontSize: 20,
    },
    background: {
        width: 400,
        height: 850,
    },
    buttonmain: {
        top: 530,
        marginHorizontal: 120,
        left: 5,
        backgroundColor: 'greenyellow',
        justifyContent: 'center',
        width: 120,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
    },
    reset: {
        top: 530,
        marginHorizontal: 120,
        left: 5,
        backgroundColor: 'none',
        justifyContent: 'center',
        width: 120,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
    },
  });
   
  const options = {
    container: {
      position: 'absolute',
 
      borderRadius: 5,
      width: 200,
      
    },
    text: {
      width: 350,
      fontSize: 55,
      color: '#FFF',
      textAlign: 'center',
      left: 10,
      top: 420
      
    },
    buttonmain: {
        backgroundColor: 'greenyellow',
        justifyContent: 'center',
        width: 120,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
    },
    
  };
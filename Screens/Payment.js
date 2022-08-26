import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import backimage from '../assets/payment.jpg';
import food from '../assets/food.jpg';
import arrowright from '../assets/ar.png';
import babelshoulderpress from '../assets/babellshoulderpress.jpg';
import backsquart from '../assets/backsq.jpg';
import benchpress from '../assets/benchpress.jpg';
import bcrunch from '../assets/bcrunch.jpg';
import absworkout from '../assets/absworkout.jpg';
import twist from '../assets/twist.jpg';
import workout from '../assets/mmm.jpg';
import secondmeal3 from '../assets/secondmeal3.jpg';
import profile from '../assets/pcomunity.jpg';
import backtohome from '../assets/left.png';
import payment from '../assets/payment.png';
import help from '../assets/help.png';
import community from '../assets/community.png';
import { User } from 'firebase/auth';
import payment2 from '../assets/opay.jpg';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { database } from '../fir/firebase-config';
const Payment = ({ navigation }) => {
    const [ email, setEmail] = React.useState('');
    // Storing User Data
     const [userDoc, setUserDoc] = useState(null)
    // Update Text
     const [text, setText] = useState("")

     const Read = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Invoice")
    
        getDoc(myDoc)
          // Handling Promises
          .then((snapshot) => {
            // MARK: Success
            if (snapshot.exists) {
              setUserDoc(snapshot.data())
            }
            else {
              alert("No Doc Found")
            }
          })
          .catch((error) => {
            // MARK: Failure
            alert(error.message)
          })
      }

 
    return(
        <KeyboardAvoidingView style={Styles.contentbox}
            behavior="padding"
        >
            <ScrollView 
                showsHorizontalScrollIndicator={false}

            >
                    <View style={Styles.searchcontent}>
                        <Image source={workout} style={{width: 350, height: 240, borderRadius: 20,}}/>
                        <View style={Styles.Content}>
                            <Text style={Styles.searchtexxt}>Enter your email and see{"\n"}and pay the bill</Text>

                        <Text></Text>
                        
                        
                        <TextInput
                          placeholder={'Enter Your Email'}
                          value={email}
                          onChangeText={(email) => setEmail(email)}
                          style={Styles.textinput}
                          >
                        </TextInput>

                        <Text></Text>

                        <TouchableOpacity
                            style={Styles.buttonadd}
                            onPress={Read}
                        >
                            <Text style={Styles.texts}>   Show Invoice</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                    {
                    userDoc != null &&

                        <View style={Styles.bill}>
                                 
                                 <Text style={{fontSize: 35, fontWeight: '700', color: 'yellow' }}>Invoice</Text>
                                 <Text style={{fontSize: 15, fontWeight: '700', color: 'white' }}>PumpupSL Personal Training</Text>
                                 <Text></Text>
                                 <Text style={{fontSize: 15, fontWeight: '700', color: 'white' }}>---------------------------------------------------</Text>

                                 <Text></Text>

                                 <Text style={{fontSize: 20, fontWeight: '700', color: 'white' }}>{userDoc.description}</Text>

                                 <Text style={{fontSize: 15, fontWeight: '700', color: 'white' }}>---------------------------------------------------</Text>
                                 <Text></Text>
                                 <Text style={{fontSize: 17, fontWeight: '700', color: 'white' }}>Total Amount</Text>
                                 <Text style={{fontSize: 35, fontWeight: '700', color: 'white' }}>{userDoc.amount}</Text>
                                 <Text></Text>
                                 <Text style={{fontSize: 15, fontWeight: '700', color: 'white' }}>---------------------------------------------------</Text>
                                 <Text></Text>
                                 <Text style={{fontSize: 17, fontWeight: '700', color: 'white' }}>Due Date</Text>
                                 <Text style={{fontSize: 20, fontWeight: '700', color: 'white' }}>{userDoc.date}</Text>
                        </View> 
                           
                        
                    }


                    <Text style={Styles.paymenttx}>Payment Methods</Text>
                    <View style={Styles.mainboxed}>
               

                            <Text style={Styles.paymentt}>Bank Transfer</Text>
                            <Text></Text>
                            <Text style={Styles.paymenttd}>AC No : 8222003435</Text>
                            <Text style={Styles.paymenttd}>Malindu Abeygunasekara</Text>
                            <Text style={Styles.paymenttd}>Commercial bank mini matara</Text>
               
                    </View>
                    <Text></Text>
                    <View>
                        <Image source={payment2} style={Styles.mainboxed}/>
           
               
                        <View style={{position: 'absolute', marginHorizontal: 25, paddingHorizontal: 17, marginTop: 20,}}>
                            <Text style={Styles.paymentt}>Online Transaction</Text>
                            <Text></Text>
                            <Text style={Styles.paymenttd}>Pay online using high secured payment gateway</Text>
                            <Text style={Styles.paymenttd}>Comming Soon</Text>
                            <Text style={Styles.paymenttd}></Text>
                       </View>

                    </View>

            </ScrollView>
               
              
           
           
            <View>
                
            </View>
            
           
        </KeyboardAvoidingView>
    )
}

export default Payment

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
    mainboxed: {
        width: 350,
        height: 200,
        marginHorizontal: 15,
        backgroundColor: '#181818',
        borderRadius: 15,
        paddingLeft:25,
        paddingTop: 20,
    },
    mainboxedd: {
        width: 350,
        height: 200,
        backgroundColor: '#181818',
        borderRadius: 15,
       
    },
    paymenttx: {
        color: 'white',
        fontSize: 24,
        marginHorizontal: 25,
        marginTop: 30,
        marginBottom: 15,

    },
    paymentt: {
        color: 'white',
        fontSize: 24,

    },
    paymenttd: {
        color: 'white',
        fontSize: 18,
        marginTop: 10,
        fontWeight: '200',

    },
    Mainscroll: {
        width: 345,
        height: 5000,
        marginHorizontal: 20,
        
    },
    text: {
        fontSize: 40,
        color: 'white',
        fontWeight: '600',
    },
    searchcontent: {
       marginHorizontal: 15,
       marginTop: 30,
    },
    Content: {
        position: 'absolute',
        marginLeft: 25,
        marginTop: 25,
    },
    searchtexxt: {
        fontSize: 17,
        fontWeight: '500',
        color: 'white',

    },
    textinput: {
        width: 300,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 20,
        
    },
    buttonadd: {
        width: 166,
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    texts: {
        fontSize: 17,
        marginVertical: 13,

    },
    Fullname: {
        color: 'white',
        fontSize: 17,
        color: 'yellow',
        position: 'absolute',
        paddingBottom: 6,
        paddingRight: 20,
    },
    Fullnames: {
        position: 'absolute',
        alignSelf: 'flex-start',
        paddingLeft: 30,
        fontSize: 17,
        color: 'yellow',
    },
    Fullnamesss: {
        position: 'absolute',
        alignSelf: 'flex-start',
        paddingLeft: 30,
        fontSize: 16,
        color: 'white',
    },
    workoutfday: {
        width: 335,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#252525',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    Fullnamed: {
        color: 'white',
        fontSize: 17,
        paddingHorizontal: 90,
        paddingVertical: 12,
        marginTop: 15,
        backgroundColor: 'yellowgreen',
        width: 330,
        borderRadius: 15,

    },
    Fullnamedf: {
        color: 'white',
        fontSize: 17,
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: 'grey',
        width: 330,
        borderRadius: 15,
    },
    Fullnamedfs: {
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        paddingHorizontal: 10,
        paddingVertical: 12,
       
        width: 330,
        borderRadius: 15,
    },
    Fullnamedfsd: {
        color: 'white',
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 20,
        fontSize: 17,
        paddingHorizontal: 10,
        paddingVertical: 12,
       
        width: 330,
        borderRadius: 15,
    },
    bill: {
        width: 350,
        height: 420,
        backgroundColor: '#1B1B1B',
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingTop: 20,
    },

   
});

































































































































































































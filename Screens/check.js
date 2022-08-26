import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export const AuthContext = React.createContext();
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import backimage from '../assets/mainworkout.jpg';
import { database } from '../fir/firebase-config';
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
import food from '../assets/backgroundg.jpg';
import search from '../assets/search.png';
import { useState } from 'react';

const Check = ({ navigation }) => {

    const [ sname, setSname] = React.useState('');
    // Storing User Data
     const [userDoc, setUserDoc] = useState(null)
    // Update Text
     const [text, setText] = useState("")

     const Read = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, "Userlist", sname)
    
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


            <View>

                <ScrollView
                style = {Styles.scrollmain}
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator={false}
                >
                        
                        <Text style={Styles.maintextt}>Search Client Details</Text>
           
           <View style={Styles.searchx}>

               <TouchableOpacity
                   onPressOut={Read}
               >
               <Image source={search} style={Styles.searchicon}/>
               </TouchableOpacity>
              
            
               
               <TextInput
                   placeholder='Search Client Details'
                   style={Styles.search}
                   placeholderTextColor={"white"}
                   value={sname}
                   onChangeText={(sname) => setSname(sname)}
                   
               >
                  
               </TextInput>
               <Text></Text>
               
               <View>
               <TouchableOpacity>
                   <Image source={food} style={Styles.mainboxedds}/>
      
          
                    <View style={{position: 'absolute', marginHorizontal: 25, paddingHorizontal: 5, marginTop: 20, color: 'black',}}>
                        <Text style={Styles.paymentt}>Search using{"\n"}Advance search</Text>
                        <Text></Text>
                        <Text style={Styles.paymenttd}>Search Client details using their gmails and telephone numbers</Text>
                        <Text style={Styles.paymenttd}></Text>
                        <Text style={Styles.paymenttd}></Text>
                   </View>
          
         
      
                </TouchableOpacity>

               <View>
               {
               userDoc != null &&
               <Text style={{color: 'white'}}>{userDoc.email}</Text>
               }
               </View>
               
              
               </View>
               
             
         
           </View>

          
 
       
       
                </ScrollView>

                    

            </View>
            

        </KeyboardAvoidingView>
    )
}

export default Check

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
    scrollmain: {
        marginTop: 40,
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
    scrollmain: {
        height: 4600,
        width: 350,
    },
    search: {
        width: 280,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#222222',
        paddingHorizontal: 25,
        justifyContent: 'center',
        color: 'white',
       

    },
    searchx: {
        width: 350,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#222222',
        color: 'white',
        marginHorizontal: 15,

    },
    imageforuse: {
        width: 350,
        height: 200,
        borderRadius: 10,
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
        paddingLeft:20,
        paddingTop: 20,
    },
    mainboxedds: {
        width: 350,
        height: 190,
        
        backgroundColor: '#181818',
        borderRadius: 15,
        paddingLeft:20,
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
 
    paymenttxx: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 15,
        marginTop: 30,
        marginBottom: 15,

    },
    paymentt: {
        color: 'white',
        fontSize: 24,

    },
    paymenttx: {
        color: 'white',
        fontSize: 19,


    },
    paymenttd: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        fontWeight: '400',

    },

});
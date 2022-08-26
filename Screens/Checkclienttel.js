import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet,  SafeAreaView, ScrollView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView, ScrollViewBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorageStatic } from 'react-native';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, reauthenticateWithPhoneNumber } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../fir/firebase-config';
export const AuthContext = React.createContext();
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { database } from '../fir/firebase-config';
import clientimages from '../assets/pcomunity.jpg';
import workout from '../assets/backgroundg.jpg';
import search from '../assets/search.png';
import profiepic from '../assets/user.png';
import food from '../assets/ssssss.jpg';



const Checkclienttel = ({ navigation }) => {

    const [ telephone, setTelephone] = React.useState('');
    // Storing User Data
     const [userDoc, setUserDoc] = useState(null)
    // Update Text
     const [text, setText] = useState("")

     const Read = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, "Userlist", telephone)
    
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
           
            <Text style={Styles.maintextt}>Search Client Details</Text>
           
                <View style={Styles.searchx}>

                    <TouchableOpacity
                        onPressOut={Read}
                    >
                    <Image source={search} style={Styles.searchicon}/>
                    </TouchableOpacity>
                   
                 
                    
                    <TextInput
                        placeholder='Client Telephone number'
                        style={Styles.search}
                        placeholderTextColor={"white"}
                        value={telephone}
                        onChangeText={(telephone) => setTelephone(telephone)}
                        
                    >
                       
                    </TextInput>
                    <Text></Text>
                    
                    <View>
                    <View style={Styles.mainboxedds}>
                        
           
               
                         <View style={{position: 'absolute', marginHorizontal: 25, paddingHorizontal: 5, marginTop: 20, color: 'black',}}>
                             <Text style={Styles.paymentt}>Search using Advance search</Text>
                             <Text></Text>
                             <View>
                             <TouchableOpacity style={Styles.tel}
                                 onPressIn={() => navigation.navigate('Checkclient')}
                             >
                             <Text style={Styles.paymenttd}>Use Name</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={Styles.tel2}
                                 onPressIn={() => navigation.navigate('Checkclientemail')}
                             >
                             <Text style={Styles.paymenttd}>Use Email</Text>
                             </TouchableOpacity>

                             </View>
                            
                             
                             <Text style={Styles.paymenttd}></Text>
                             <Text style={Styles.paymenttd}></Text>
                        </View>
               
              
           
                     </View>
                    <Text></Text>
                    <View>
                    
                    {


                    userDoc != null &&
                    <View style={Styles.emailaddress}>
                    <View>
                    <Image source={profiepic} style={Styles.profilepic}/>
                    <Text style={Styles.Fullname}>{userDoc.sname}</Text>
                    <Text style={Styles.Fullnamee}>{userDoc.email}</Text>
                    </View>
                    </View>
                    }

                    <Text></Text>
                    <View>
                        {


                        userDoc != null &&
                        <View style={Styles.emailaddresss}>
                        <View>
                        <Text style={Styles.Fullnames} >Phone Number</Text>
                        <Text style={Styles.Fullnamei}>{userDoc.ccode}</Text>
                        <Text style={Styles.Fullnameii}>{userDoc.telephone}</Text>
                        <Text></Text>
                        <Text style={Styles.Fullnames} >Password</Text>
                        <Text style={Styles.Fullnamei}>{userDoc.password}</Text>
                      
                        </View>
                        </View>
                        }

                            {


                            userDoc != null &&
                             <View style={Styles.emailaddressss}>
                                <Image source={food} style={Styles.imagep}/>
                                <Text style={Styles.Fullnames} >Pay Day</Text>
                                <Text></Text>
                                <Text style={Styles.Fullnamess}>{userDoc.Payyear}</Text>
                                <Text style={Styles.Fullnamess}>{userDoc.date}</Text>
                                <TouchableOpacity>
                                     
                                </TouchableOpacity>
                            </View>
                            }

                        </View>
                       
                    </View>
                    <Text></Text>
                            
                            {


                            userDoc != null &&
                            <TouchableOpacity>
                                <Image source={workout} style={Styles.workout}/>
                                <Text style={Styles.Fullnamessw}>Check {userDoc.name}'s{"\n"}Fitness Activity</Text>
                                <Text style={Styles.Fullnamessws}>View Activities</Text>
                            </TouchableOpacity>
                            }
                        
                    </View>
                    
                  
              
                </View>

               
      
            
            
          
            
           
        </KeyboardAvoidingView>
    )
}

export default Checkclienttel

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
    profilepic: {
        width: 50,
        height: 50,
        marginHorizontal: 25,
        position: 'absolute',
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
        height: 130,
        
        backgroundColor: '#181818',
        borderRadius: 15,
        paddingLeft:20,
        paddingTop: 20,
    },
    workout: {
        width: 350,
        height: 150,
        borderRadius: 15,
    },
    tel: {
        width: 120,
        height: 40,
        backgroundColor: 'chartreuse',
        borderRadius: 20,
        paddingHorizontal: 22,
        justifyContent: 'center',
    },
    tel2: {
        position: 'absolute',
        marginLeft: 130,
        width: 120,
        height: 40,
        backgroundColor: 'chartreuse',
        borderRadius: 20,
        paddingHorizontal: 22,
        justifyContent: 'center',
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
        fontSize: 19,

    },
    paymenttx: {
        color: 'white',
        fontSize: 19,


    },
    paymenttd: {
        color: 'black',
        fontSize: 15,
        
        fontWeight: '500',

    },
    emailaddress: {
        width: 350,
        height: 90,
        backgroundColor: '#121212',
        borderRadius: 10,
        paddingVertical: 20,
    },
    emailaddresss: {
        width: 200,
        height: 150,
        backgroundColor: '#121212',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        
    },
    emailaddressss: {
        position: 'absolute',
        width: 135,
        height: 150,
        backgroundColor: '#121212',
        borderRadius: 10,
        marginLeft: 210,
        paddingVertical: 15,
        paddingHorizontal: 25,
        
    },
    Fullname: {
        position: 'absolute',
        color: 'white',
        fontSize: 22,
        marginLeft: 110,
        fontWeight: '600',
    },
    Fullnamei: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    Fullnameii: {
        position: 'absolute',
        marginTop: 20,
        marginLeft: 40,
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    Fullnames: {
        color: 'white',
        fontSize: 15,
        fontWeight: '300',
    },
    Fullnamess: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
    },
    Fullnamessw: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        position: 'absolute',
        marginTop: 20,
        marginHorizontal: 25,
    },
    Fullnamessws: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        position: 'absolute',
        marginTop: 100,
        marginHorizontal: 25,
    },
    Fullnamee: {
        position: 'absolute',
        color: 'white',
        fontSize: 12,
        marginLeft: 110,
        paddingTop: 30,
    },
    imagep: {
        position: 'absolute',
        width: 135,
        height: 150,
        backgroundColor: '#121212',
        borderRadius: 10,
     
    },
    
   
   
   
});






















































































































































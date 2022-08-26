import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import profile from '../assets/pcomunity.jpg';
import { database } from '../fir/firebase-config';
import payment from '../assets/payment.png';
import help from '../assets/help.png';
import privacypo from '../assets/privacypo.png';
import community from '../assets/opay.jpg';
import { User } from 'firebase/auth';
import payment2 from '../assets/bcrunch.jpg';



const Editphone = ({ navigation }) => {

    


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [sname, setSname] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [ccode, setCcode] = React.useState('');

     // Storing User Data
  const [userDoc, setUserDoc] = useState(null)
  // Update Text
  const [text, setText] = useState("")

  // MARK: CRUD Functions
  const Create = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    
    const myDoc23 = doc(database, "Adminaccount", "Contact")
    
    // Your Document Goes Here
    const docData = {
      
      "telephone": telephone
      
    }

    setDoc(myDoc23, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Update your Phone Number successfully")
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
            
           

            <ScrollView style={Styles.scrollfoef}>

                <View style={Styles.viewfor}>
                    <Text style={{fontSize: 30, color: 'white', fontWeight: '700'}}
                    
                    >Update PhoneNumber{name}</Text>
                    <Text style={{fontSize: 15, color: 'white', fontWeight: '400'}}>Add or Edit Admin phone</Text>
                </View>

           

                <Text></Text>
                <KeyboardAvoidingView style={Styles.viewforinput}>

                

             
                <TextInput
                        placeholder={'Enter Telephone Number'}
                        value={telephone}
                        onChangeText={(telephone) => setTelephone(telephone)}
                        style={Styles.textinoneee}
                        keyboardType={'number-pad'}>
                </TextInput>
                </KeyboardAvoidingView>
                <TouchableOpacity style={Styles.buttonback}
                    onPress={Create}
                        >
                        <Text style={Styles.buttontext}>Update</Text>
                </TouchableOpacity>
                
               

         
            </ScrollView>              

            
            

        </KeyboardAvoidingView>
    )
}

export default Editphone

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#181818',
        
        alignContent: 'center'
    },
    backsquart: {
        height: 210,
        width: 380, 
    },
    backbutton: {
        position: 'absolute',
        width: 50,
        height: 30,
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
    icon: {
        width: 25,
        height: 25,
    },
    taskone: {
        marginHorizontal: 35,
        marginTop: 20,
    },
    icontext: {
        color: 'white',
        position: 'absolute',
        paddingVertical: 0,
        fontSize: 15,
        marginLeft: 50,
    },
    maintext: {
        color: 'white',
        fontSize: 17,
        marginHorizontal: 25,
        marginTop: 30,
    },
    viewfor: {
        marginHorizontal: 25,
        top: 20,
    },
    textinone: {
        width: 320,
        height: 60,
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        marginBottom: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 18,
    },
    viewforinput: {
        marginHorizontal: 25,
    },
    scrollfoef: {
        height: 700,
    },
    textinonee: {
        width: 70,
        height: 60,
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        marginBottom: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 18,
    },
    buttonback: {
        flex: 0,
        width: 180,
        height: 60,
        backgroundColor: '#FFD703',
        marginHorizontal: 25,
        borderRadius: 45,
        TouchableOpacity: 2,
        alignItems: 'center',
        
    },
    buttontext: {
        fontSize: 20,
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    textinoneee: {
        width: 320,
        height: 60,
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        marginBottom: 20,
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 18,
    }, 
    taskdevice: {
        borderBottomColor: 'grey',
        width: 325,
        marginHorizontal: 35,
        borderBottomWidth: 1,
        top: -9,
    },
    payment2: {
        width: 325,
        height: 150,
        borderRadius: 20,
        
    },
    payments23: {
        position: 'absolute',
        zIndex: 10,
        marginHorizontal: 20,
        marginTop: 30
    },
    paycard: {
        marginHorizontal: 25,
        marginTop: 20,
    },
    textform1: {
        fontSize: 20,
        fontWeight: '600',
    },
    paycardt: {
        marginHorizontal: 25,
        marginTop: 40,
    },
    payment23: {
        width: 325,
        height: 250,
        borderRadius: 20,
    }, 

});
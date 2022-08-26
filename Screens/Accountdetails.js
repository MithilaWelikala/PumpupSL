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
import community from '../assets/community.png';
import { User } from 'firebase/auth';
import payment2 from '../assets/payment.jpg';



const Accountdetails = ({ navigation }) => {

    


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
    const myDoc = doc(database, email, name)
    const myDoc2 = doc(database, "Userlist", sname)
    const myDoc3 = doc(database, "Userlist", telephone)
    const myDoc4 = doc(database, "Userlist", email)
    // Your Document Goes Here
    const docData = {
      "email": email,
      "password": password,
      "name": name,
      "sname": sname,
      "telephone": telephone,
      "ccode": ccode
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Update your information successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    setDoc(myDoc2, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Update your information successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
    setDoc(myDoc3, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Update your information successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
    setDoc(myDoc4, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Update your information successfully")
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
                    
                    >Hello {name}</Text>
                    <Text style={{fontSize: 15, color: 'white', fontWeight: '400'}}>Mealplans/Workouts</Text>
                </View>

                <TouchableOpacity style={Styles.paycardt}
                    onPress={() => navigation.navigate('Payment')}
                >
                                            <Image source={payment2} style={Styles.payment2}/>
                                            <View style={Styles.payments23}>
                                                <Text style={Styles.textform1}>
                                                    Pay Now!
                                                </Text>
                                                <Text></Text>
                                                <Text>Click here to pay your{"\n"}monthly fee</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={Styles.paycard}>
                                            <Image source={profile} style={Styles.payment23}/>
                                            <View style={Styles.payments23}>
                                                <Text style={Styles.textform1}>
                                                    PumpUpSL{"\n"}Community
                                                </Text>
                                                <Text></Text>
                                                <Text>Join with Our{"\n"}Community</Text>
                                            </View>
                                        </TouchableOpacity>
               
                <Text style={Styles.maintext}>Add or Update Your Account Details</Text>

                <Text></Text>
                <KeyboardAvoidingView style={Styles.viewforinput}>

                

                   
                
                    <TextInput
                        placeholder={'Email Address'}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        style={Styles.textinone}>
                    </TextInput>
               
                
                
                <TextInput
                        placeholder={'Password'}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        style={Styles.textinone}
                        secureTextEntry>
                        
                </TextInput>
                <TextInput
                        placeholder={'First Name'}
                        value={name}
                        onChangeText={(name) => setName(name)}
                        style={Styles.textinone}>
                </TextInput>
                <TextInput
                        placeholder={'Full Name'}
                        value={sname}
                        onChangeText={(sname) => setSname(sname)}
                        style={Styles.textinone}>
                </TextInput>
                <TextInput
                        placeholder={'+94'}
                        value={ccode}
                        onChangeText={(ccode) => setCcode(ccode)}
                        style={Styles.textinonee}>
                </TextInput>
                <TextInput
                        placeholder={'Telephone'}
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
                
                <Text>

                </Text>

                <View style={{borderBottomEndRadius: 20, borderBottomColor: 'grey', borderBottomWidth: 0.5, marginHorizontal: 25,}}></View>

                <TouchableOpacity style={Styles.taskone}
                                        onPress={() => navigation.navigate('ChangePackage')}
                                        >
                                            <Image source={payment} style={Styles.icon}/>
					                        <Text style={Styles.icontext}>Our Packages</Text>
                                        </TouchableOpacity>
                                        <Text></Text>
                                       

                                        <TouchableOpacity style={Styles.taskone}
                                  
                                        >
                                            <Image source={help} style={Styles.icon}/>
					                        <Text style={Styles.icontext}>Support : +94 71 868 6655</Text>
                                        </TouchableOpacity>
                                        <Text></Text>
                                        

                                        <TouchableOpacity style={Styles.taskone}
                                        onPress={() => navigation.navigate('Adminaccount')}
                                        >
                                            <Image source={privacypo} style={Styles.icon}/>
					                        <Text style={Styles.icontext}>Admin Accounts</Text>
                                        </TouchableOpacity>
                                        <Text></Text>

                                        

                                        <View style={{borderBottomEndRadius: 20, borderBottomColor: 'grey', borderBottomWidth: 0.5, marginHorizontal: 25,}}></View>
                                        <Text></Text>
                                        <Text style={{color: 'white', marginHorizontal: 25,}}>PumpSl | © Developed by Grapcreate. 2022</Text>
            </ScrollView>              

            
            

        </KeyboardAvoidingView>
    )
}

export default Accountdetails

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
        width: 240,
        height: 60,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        marginBottom: 20,
        marginTop: 320,
        marginLeft: 80,
        backgroundColor: '#F5F5F5',
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
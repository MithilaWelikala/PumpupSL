

import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import profile from '../assets/pcomunity.jpg';
import { database } from '../fir/firebase-config';
import payment from '../assets/payment.png';
import help from '../assets/weee.jpg';
import privacypo from '../assets/mmm.jpg';
import community from '../assets/bin.png';
import { User } from 'firebase/auth';
import payment2 from '../assets/backgroundsec.jpg';



const PrivacyPolicy = ({ navigation }) => {

    


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [Payyear, setPayyear] = React.useState('');
    const [date, setDate] = React.useState('');
    const [datep, setDatep] = React.useState('');

     // Storing User Data
  const [userDoc, setUserDoc] = useState(null)
  // Update Text
  const [text, setText] = useState("")

  // MARK: CRUD Functions
  const Create = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Payment")
 
    
    // Your Document Goes Here
    const docData = {
      "email": email,
      "datep": datep,
      "payreminder": "We’d like to remind you that your payment is overdue. please pay the bill within 10 days",
     
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

    
  }

  const Createt = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Paymentdue")
    const myDoc3 = doc(database, "Userlist", email)
 
    
    // Your Document Goes Here
    const docData = {
      "email": email,
      "Payyear": Payyear,
      "date": date,
     
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


    
  }

  const Invoices = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Invoice")
    const myDoc3 = doc(database, "Userlist", email)
 
    
    // Your Document Goes Here
    const docData = {
      "email": email,
      "amount": amount,
      "date": date,
     
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


    
  }

  const Delete = () => {
    // MARK: Deleting Doc
    const myDoc = doc(database, email, "Payment")

    deleteDoc(myDoc)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Deleted Successfully!")
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
                    <Text style={Styles.maintext}>Privacy Policy</Text>

                    <Text style={Styles.paragraph}>At PumpupSL, one of our main priorities is the privacy 
                    of our visitors. This Privacy Policy document contains types of information that is 
                    collected and recorded by PumpupSL and how we use it</Text>
                    <Text></Text>
                    <Text style={Styles.paragraph}>If you have additional questions or require more 
                    information about our Privacy Policy, do not hesitate to contact us</Text>
                    <Text></Text>
                    <Text></Text>

                    <Text style={Styles.maintext}>Log Files</Text>
                    <Text></Text>
                    <Text style={Styles.paragraph}>If you have additional questions or require more 
                    information about our Privacy Policy, do not hesitate to contact us</Text>

            </ScrollView>              

            
            

        </KeyboardAvoidingView>
    )
}

export default PrivacyPolicy

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#181818',      
    },
    scrollfoef: {
        height: 1900,
        marginHorizontal: 15,
        paddingHorizontal: 20,
        paddingTop: 25,

    },
    maintext: {
        color: 'white',
        fontSize: 25,
        fontWeight: '600',
    },
    maintext2: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    paragraph: {
        fontSize: 15,
        color: 15,
        
    },

    


});
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
import workout from '../assets/mmm.jpg';
import search from '../assets/search.png';
import profiepic from '../assets/user.png';
import food from '../assets/drop.png';
import iconone from '../assets/salad.png';
import backtohome from '../assets/left.png';
import GridView from 'react-native-gridview';


const Checkclientemail = ({ navigation }) => {

    const [ email, setEmail] = React.useState('');
    // Storing User Data
     const [userDoc, setUserDoc] = useState(null)
    // Update Text
     const [text, setText] = useState("")

     const Read2 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "mondaymeal02")
    
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

      const Read1 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "mondaymeal01")
    
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

      const Read3 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "mondaymeal03")
    
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

      const Read4 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "mondaymeal04")
    
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


      const Read5 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "mondaymeal05")
    
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

      const Read6 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "mondaymeal06")
    
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

      const Read7 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "tuesdaymeal01")
    
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

      const Read8 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "tuesdaymeal02")
    
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

      const Read9 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "tuesdaymeal03")
    
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

      const Read10 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "tuesdaymeal04")
    
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


      const Read11 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "tuesdaymeal05")
    
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

      const Read12 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "tuesdaymeal06")
    
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

      const Read13 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "wensdaymeal01")
    
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

      const Read14 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "wensdaymeal02")
    
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

      const Read15 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "wensdaymeal03")
    
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

      const Read16 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "wensdaymeal04")
    
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


      const Read17 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "wensdaymeal05")
    
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

      const Read18 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "wensdaymeal06")
    
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

      const Read19 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "thursdaymeal01")
    
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

      const Read20 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "thursdaymeal02")
    
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

      const Read21 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "thursdaymeal03")
    
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

      const Read22 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "thursdaymeal04")
    
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


      const Read23 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "thursdaymeal05")
    
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

      const Read24 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "thursdaymeal06")
    
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


      const Read25 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "fridaymeal01")
    
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

      const Read26 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "fridaymeal02")
    
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

      const Read27 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "fridaymeal03")
    
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

      const Read28 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "fridaymeal04")
    
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


      const Read29 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "fridaymeal05")
    
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

      const Read30 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "fridaymeal06")
    
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
      const Read31 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "saturdaymeal01")
    
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

      const Read32 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "saturdaymeal02")
    
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

      const Read33 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "saturdaymeal03")
    
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

      const Read34 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "saturdaymeal04")
    
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


      const Read35 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "saturdaymeal05")
    
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

      const Read36 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "saturdaymeal06")
    
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

      const Read37 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "sundaymeal01")
    
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

      const Read38 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "sundaymeal02")
    
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

      const Read39 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "sundaymeal03")
    
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

      const Read40 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "sundaymeal04")
    
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


      const Read41 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "sundaymeal05")
    
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

      const Read42 = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "sundaymeal06")
    
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



      const Readpay = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Payment")
    
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
           
                <ScrollView style={Styles.Mainscroll}>

                
                    
                    <Text></Text>
                    
                    <View style={Styles.searchcontent}>
                        <Image source={workout} style={{width: 335, height: 190, borderRadius: 20,}}/>
                        <View style={Styles.Content}>
                            <Text style={Styles.searchtexxt}>Verify with your email and explore{"\n"}your personalized meal plan</Text>

                        <Text></Text>
                        
                        
                        <TextInput
                          placeholder={'Enter Your Email'}
                          value={email}
                          onChangeText={(email) => setEmail(email)}
                          style={Styles.textinput}
                          >
                        </TextInput>

                        <Text></Text>

                        </View>
                    </View>
                    <Text></Text>

                    <View style={{width: 335, height: 400, borderRadius: 20, backgroundColor: 'white', borderRadius: 15}}>
                
                        <View style={Styles.Content}>
                            <Text style={Styles.searchtexxtss}>Select Day and Meal Number{"\n"}meal plan will be appear{"\n"}automatically.</Text>

                       
                        
                        <ScrollView
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              automaticallyAdjustContentInsets={true}
                              centerContent={true}
                        >
                            <View style={Styles.dayselector}>
                                <Text style={{fontSize: 23, fontWeight: '600'}}>Monday</Text>
                                <View>
                                    <Text>Swip to see other Days</Text>
                                </View>
                                <Text></Text>
                                <View>
                                <View>
                                <TouchableOpacity style={Styles.button}
                                        onPress={Read1}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 01</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read2}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 02</Text>
                                </TouchableOpacity>
                                </View>

                                <View style={{position: 'absolute', marginLeft: 100,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read3}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 03</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read4}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 04</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{position: 'absolute', marginLeft: 200,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read5}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 05</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read6}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 06</Text>
                                </TouchableOpacity>
                                </View>
                                </View>



                              
                                
                            </View>

                            <View style={Styles.dayselector}>
                                <Text style={{fontSize: 23, fontWeight: '600'}}>Tuesday</Text>
                                <View>
                                    <Text>Swip to see other Days</Text>
                                </View>
                                <Text></Text>
                                <View>
                                <View>
                                <TouchableOpacity style={Styles.button}
                                        onPress={Read7}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 01</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read8}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 02</Text>
                                </TouchableOpacity>
                                </View>

                                <View style={{position: 'absolute', marginLeft: 100,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read9}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 03</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read10}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 04</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{position: 'absolute', marginLeft: 200,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read11}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 05</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read12}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 06</Text>
                                </TouchableOpacity>
                                </View>
                                </View>



                              
                                
                            </View>
                            <View style={Styles.dayselector}>
                                <Text style={{fontSize: 23, fontWeight: '600'}}>Wensday</Text>
                                <View>
                                    <Text>Swip to see other Days</Text>
                                </View>
                                <Text></Text>
                                <View>
                                <View>
                                <TouchableOpacity style={Styles.button}
                                        onPress={Read13}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 01</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read14}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 02</Text>
                                </TouchableOpacity>
                                </View>

                                <View style={{position: 'absolute', marginLeft: 100,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read15}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 03</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read16}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 04</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{position: 'absolute', marginLeft: 200,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read17}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 05</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read18}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 06</Text>
                                </TouchableOpacity>
                                </View>
                                </View>



                              
                                
                            </View>

                            <View style={Styles.dayselector}>
                                <Text style={{fontSize: 23, fontWeight: '600'}}>Thursday</Text>
                                <View>
                                    <Text>Swip to see other Days</Text>
                                </View>
                                <Text></Text>
                                <View>
                                <View>
                                <TouchableOpacity style={Styles.button}
                                        onPress={Read19}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 01</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read20}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 02</Text>
                                </TouchableOpacity>
                                </View>

                                <View style={{position: 'absolute', marginLeft: 100,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read21}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 03</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read22}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 04</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{position: 'absolute', marginLeft: 200,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read23}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 05</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read24}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 06</Text>
                                </TouchableOpacity>
                                </View>
                                </View>



                              
                                
                            </View>

                            <View style={Styles.dayselector}>
                                <Text style={{fontSize: 23, fontWeight: '600'}}>Friday</Text>
                                <View>
                                    <Text>Swip to see other Days</Text>
                                </View>
                                <Text></Text>
                                <View>
                                <View>
                                <TouchableOpacity style={Styles.button}
                                        onPress={Read25}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 01</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read26}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 02</Text>
                                </TouchableOpacity>
                                </View>

                                <View style={{position: 'absolute', marginLeft: 100,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read27}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 03</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read28}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 04</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{position: 'absolute', marginLeft: 200,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read29}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 05</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read30}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 06</Text>
                                </TouchableOpacity>
                                </View>
                                </View>



                              
                                
                            </View>
                            <View style={Styles.dayselector}>
                                <Text style={{fontSize: 23, fontWeight: '600'}}>Saturday</Text>
                                <View>
                                    <Text>Swip to see other Days</Text>
                                </View>
                                <Text></Text>
                                <View>
                                <View>
                                <TouchableOpacity style={Styles.button}
                                        onPress={Read31}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 01</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read32}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 02</Text>
                                </TouchableOpacity>
                                </View>

                                <View style={{position: 'absolute', marginLeft: 100,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read33}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 03</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read34}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 04</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{position: 'absolute', marginLeft: 200,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read35}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 05</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read36}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 06</Text>
                                </TouchableOpacity>
                                </View>
                                </View>



                              
                                
                            </View>

                            <View style={Styles.dayselector}>
                                <Text style={{fontSize: 23, fontWeight: '600'}}>Sunday</Text>
                                <View>
                                    <Text>Swip to see other Days</Text>
                                </View>
                                <Text></Text>
                                <View>
                                <View>
                                <TouchableOpacity style={Styles.button}
                                        onPress={Read37}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 01</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read38}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 02</Text>
                                </TouchableOpacity>
                                </View>

                                <View style={{position: 'absolute', marginLeft: 100,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read39}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 03</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read40}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 04</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{position: 'absolute', marginLeft: 200,}}>
                                <TouchableOpacity style={Styles.button}
                                    onPress={Read41}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 05</Text>
                                </TouchableOpacity>
                                <Text></Text>

                                <TouchableOpacity style={Styles.button}
                                    onPress={Read42}
                                >
                                    <Image source={iconone} style={{width: 40, height: 40, marginBottom: 10}}/>
                                    <Text>Meal 06</Text>
                                </TouchableOpacity>
                                </View>
                                </View>



                              
                                
                            </View>


                        </ScrollView>
                       

                        </View>
                    </View>



                    <View>

                    <Text></Text>
                    <Text></Text>
                    
                    {
                    userDoc != null &&
                    <View style={Styles.workoutone}>

                        <View style={Styles.dayview}>
                        <Text style={Styles.Fullname}>{userDoc.workoutday}</Text>
                        <Text style={Styles.Fullnames}>{userDoc.meal}</Text> 
                        </View>
                        <Text></Text>
                        
                        
                        
                        <Text style={Styles.Fullnamei}>{userDoc.foodplateone}</Text>
                        <Text style={Styles.Fullnamei}>{userDoc.foodplatetwo}</Text>
                        <Text style={Styles.Fullnamei}>{userDoc.foodplatethree}</Text>
                        <Text style={Styles.Fullnamei}>{userDoc.foodplatefour}</Text>
                        <Text style={Styles.Fullnamei}>{userDoc.foodplatefive}</Text>
                        
                        <View style={Styles.dayviews}>
                        <Image source={food} style={{width: 30,height: 30, position: 'absolute', marginTop: 20, marginLeft: 280,}}/>
                        <Text style={Styles.Fullnamess}>Today Water Intake</Text>
                        <Text style={Styles.Fullname}>{userDoc.water}</Text> 
                        </View>
                        
                        <Text style={Styles.Fullnamedf}
                        onPress={Readpay}
                        >Can't see the mealplan? click here</Text>

                        <Text></Text>

                        <Text style={Styles.Fullnamedfs}>{userDoc.payreminder}</Text>
                        <Text style={Styles.Fullnamedfsd}>{userDoc.datep}</Text>
                     
                    </View>
                    }

                  

                  

                    </View>


                   

              
                


                  
                </ScrollView>
                    
            
           
        </KeyboardAvoidingView>
    )
}

export default Checkclientemail

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: 'black',
        alignContent: 'center'
    },
    Mainscroll: {
        width: 345,
        height: 5000,
        marginHorizontal: 20,
        
    },
    text: {
        marginTop: 10,
        fontSize: 40,
        color: 'white',
        fontWeight: '600',
    },
    searchcontent: {
       
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
    searchtexxtss: {
        fontSize: 17,
        fontWeight: '500',
        color: 'black',

    },
    textinput: {
        width: 285,
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
        fontWeight: '600',
        paddingLeft: 10,
        fontSize: 29,
        paddingBottom: 6,
        paddingRight: 20,
    },
    Fullnamess: {
        color: 'white',
        fontWeight: '600',
        paddingLeft: 10,
        fontSize: 20,
        paddingBottom: 6,
        paddingRight: 20,
    },
    Fullnamei: {
        color: 'white',
        fontWeight: '400',
        fontSize: 19,
        color: '#F2FF00',
        backgroundColor: '#161616',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15,
        marginBottom: 15,
    },
    Fullnames: {
        
        
        paddingLeft: 10,
        fontSize: 19,
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
        paddingHorizontal: 38,
        paddingVertical: 12,
        marginTop: 20,
        backgroundColor: 'grey',
        width: 335,
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
    dayselector: {
        width: 280,
        height: 290,
     
        borderRadius: 15,
        marginRight: 30,
        paddingTop: 10,
      
    },
    button: {
        width: 80,
        height: 90,
        borderRadius: 15,
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',

    },
    dayview: {
        width: 340,
        height: 120,
        backgroundColor: '#161616',
        borderRadius: 15,
        paddingTop: 20,
        paddingLeft: 15,
    },
    dayviews: {
        width: 340,
        height: 120,
        backgroundColor: '#00A6FF',
        borderRadius: 15,
        paddingTop: 20,
        paddingLeft: 15,
    },
    foodcontent: {
        width: 290,
        height: 60,
        marginTop: 10,
        marginLeft: 5,
        borderRadius: 15,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

   
   
   
});






















































































































































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
import food from '../assets/ssssss.jpg';
import backtohome from '../assets/left.png';


const Checkclientemail = ({ navigation }) => {

    const [ email, setEmail] = React.useState('');
    // Storing User Data
     const [userDoc, setUserDoc] = useState(null)
    // Update Text
     const [text, setText] = useState("")

     const Read = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Workoutsweek")
    
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


      const Readmon = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Workoutmonday")
    
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

      const Readtue = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Workouttue")
    
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



      const Readwed = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Workoutwed")
    
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

      const Readthu = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Workoutthu")
    
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

      const Readfri = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Workoutfri")
    
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


      
      const Readsat = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Workoutsat")
    
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


      const Readsun = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(database, email, "Workoutsun")
    
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
                    <Text></Text>

                    <View>
                        <Text style={Styles.text}>Workout</Text>
                    </View>
                    <Text></Text>
                    
                    <View style={Styles.searchcontent}>
                        <Image source={workout} style={{width: 335, height: 240, borderRadius: 20,}}/>
                        <View style={Styles.Content}>
                            <Text style={Styles.searchtexxt}>Verify with your email and explore{"\n"}your personalized workout plan</Text>

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
                            <Text style={Styles.texts}>Explore Workout</Text>
                        </TouchableOpacity>
                        </View>
                    </View>



                    <View>

                    <Text></Text>
                    <Text></Text>
                    
                    {
                    userDoc != null &&
                    <View style={Styles.workoutone}>

                   
                

                   
                    <View>
                    <TouchableOpacity style={Styles.workoutfday}
                        onPress={Readmon}
                    >
                        <Text style={Styles.Fullnames}>{userDoc.Monday}</Text>
                        <Text style={Styles.Fullnames}>{userDoc.Monday2}</Text>
                        <Text style={Styles.Fullnames}>{userDoc.Tuesday2}</Text>
                        <Text style={Styles.Fullnames}>{userDoc.Wensday2}</Text>
                        <Text style={Styles.Fullnames}>{userDoc.Thursday2}</Text>
                        <Text style={Styles.Fullnames}>{userDoc.Friday2}</Text>
                        <Text style={Styles.Fullnames}>{userDoc.Saturday2}</Text>
                        <Text style={Styles.Fullnames}>{userDoc.Sunday2}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamemon}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamemon2}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnametue2}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamewed2}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamethu2}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamefri2}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamesat2}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamesun2}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Styles.workoutfday}
                        onPress={Readtue}
                    >
                        <Text style={Styles.Fullnames}>{userDoc.Tuesday}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnametue}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisemon1}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisetue}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisewed1}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisethu}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisefri}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesat}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesun}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.workoutfday}
                        onPress={Readwed}
                    >
                        <Text style={Styles.Fullnames}>{userDoc.Wensday}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamewed}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisemon2}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisetue1}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisewed2}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisethu1}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisefri1}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesat1}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesun1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.workoutfday}
                        onPress={Readthu}
                    >
                        <Text style={Styles.Fullnames}>{userDoc.Thursday}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamethu}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisemon3}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisetue2}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisewed3}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisethu2}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisefri2}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesat2}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesun2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.workoutfday}
                        onPress={Readfri}
                    >
                        <Text style={Styles.Fullnames}>{userDoc.Friday}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamefri}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisemon4}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisetue3}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisewed4}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisethu3}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisefri3}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesat3}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesun3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.workoutfday}
                        onPress={Readsat}
                    >
                        <Text style={Styles.Fullnames}>{userDoc.Saturday}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamesat}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisemon5}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisetue4}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisewed5}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisethu4}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisefri4}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesat4}</Text>
                        <Text style={Styles.Fullnamesss}>{userDoc.excercisesun4}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.workoutfday}
                        onPress={Readsun}
                    >
                        <Text style={Styles.Fullnames}>{userDoc.Sunday}</Text>
                        <Text style={Styles.Fullname}>{userDoc.workoutnamesun}</Text>
                    </TouchableOpacity>
                    
                    <Text style={Styles.Fullnamed}
                        onPress={Read}
                    >Show All workouts</Text>
                    <Text></Text>

                    <Text style={Styles.Fullnamedf}
                        onPress={Readpay}
                    >Can't see the workout? click here</Text>

                    <Text></Text>

                    <Text style={Styles.Fullnamedfs}>{userDoc.payreminder}</Text>
                    <Text style={Styles.Fullnamedfsd}>{userDoc.datep}</Text>
                   
                    
                    </View>
                  
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

   
   
   
});
























































































































































import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import profile from '../assets/wed.jpg';
import { database } from '../fir/firebase-config';
import payment from '../assets/peee.jpg';
import help from '../assets/weee.jpg';
import privacypo from '../assets/mmm.jpg';
import community from '../assets/adadd.jpg';
import { User } from 'firebase/auth';
import payment2 from '../assets/backgroundg.jpg';
import frid from '../assets/fri.jpg';
import sat from '../assets/qweeq.jpg';
import suns from '../assets/aefefaef.jpg';




const Adworkout = ({ navigation }) => {

    


    const [email, setEmail] = React.useState('');
    const [workoutnamemon, setWorkoutnamemon] = React.useState('');
    const [workoutnametue, setWorkoutnametue] = React.useState('');
    const [workoutnamewed, setWorkoutnamewed] = React.useState('');
    const [workoutnamethu, setWorkoutnamethu] = React.useState('');
    const [workoutnamefri, setWorkoutnamefri] = React.useState('');
    const [workoutnamesat, setWorkoutnamesat] = React.useState('');
    const [workoutnamesun, setWorkoutnamesun] = React.useState('');
    const [excercisemon1, setExcercisemon1] = React.useState('');
    const [excercisemon2, setExcercisemon2] = React.useState('');
    const [excercisemon3, setExcercisemon3] = React.useState('');
    const [excercisemon4, setExcercisemon4] = React.useState('');
    const [excercisemon5, setExcercisemon5] = React.useState('');
    const [excercisemon6, setExcercisemon6] = React.useState('');
    const [excercisetue, setExcercisetue] = React.useState('');
    const [excercisetue1, setExcercisetue1] = React.useState('');
    const [excercisetue2, setExcercisetue2] = React.useState('');
    const [excercisetue3, setExcercisetue3] = React.useState('');
    const [excercisetue4, setExcercisetue4] = React.useState('');
    const [excercisewed1, setExcercisewed1] = React.useState('');
    const [excercisewed2, setExcercisewed2] = React.useState('');
    const [excercisewed3, setExcercisewed3] = React.useState('');
    const [excercisewed4, setExcercisewed4] = React.useState('');
    const [excercisewed5, setExcercisewed5] = React.useState('');
    const [excercisethu, setExcercisethu] = React.useState('');
    const [excercisethu1, setExcercisethu1] = React.useState('');
    const [excercisethu2, setExcercisethu2] = React.useState('');
    const [excercisethu3, setExcercisethu3] = React.useState('');
    const [excercisethu4, setExcercisethu4] = React.useState('');
    const [excercisefri, setExcercisefri] = React.useState('');
    const [excercisefri1, setExcercisefri1] = React.useState('');
    const [excercisefri2, setExcercisefri2] = React.useState('');
    const [excercisefri3, setExcercisefri3] = React.useState('');
    const [excercisefri4, setExcercisefri4] = React.useState('');
    const [excercisesat, setExcercisesat] = React.useState('');
    const [excercisesat1, setExcercisesat1] = React.useState('');
    const [excercisesat2, setExcercisesat2] = React.useState('');
    const [excercisesat3, setExcercisesat3] = React.useState('');
    const [excercisesat4, setExcercisesat4] = React.useState('');
    const [excercisesun, setExcercisesun] = React.useState('');
    const [excercisesun1, setExcercisesun1] = React.useState('');
    const [excercisesun2, setExcercisesun2] = React.useState('');
    const [excercisesun3, setExcercisesun3] = React.useState('');
    const [excercisesun4, setExcercisesun4] = React.useState('');
   






    
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
    const myDoc = doc(database, email, "Workoutmonday")
 
    
    // Your Document Goes Here
    const docData = {
      "workoutnamemon2": workoutnamemon,
      "excercisemon1": excercisemon1,
      "excercisemon2": excercisemon2,
      "excercisemon3": excercisemon3,
      "excercisemon4": excercisemon4,
      "excercisemon5": excercisemon5,
    
      "Monday2": "Monday",
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Workout for Monday added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Createtue = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Workouttue")
 
    
    // Your Document Goes Here
    const docData = {
      "workoutnametue2": workoutnametue,
      "excercisetue": excercisetue,
      "excercisetue1": excercisetue1,
      "excercisetue2": excercisetue2,
      "excercisetue3": excercisetue3,
      "excercisetue4": excercisetue4,
     
      "Tuesday2": "Tuesday",
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Workout for Tuesday added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Creatwed = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Workoutwed")
 
    
    // Your Document Goes Here
    const docData = {
      "workoutnamewed2": workoutnamewed,
      "excercisewed1": excercisewed1,
      "excercisewed2": excercisewed2,
      "excercisewed3": excercisewed3,
      "excercisewed4": excercisewed4,
      "excercisewed5": excercisewed5,
     
      "Wensday2": "Wensday",
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Workout for Wensday added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Createthu = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Workoutthu")
 
    
    // Your Document Goes Here
    const docData = {
      "workoutnamethu2": workoutnamethu,
      "excercisethu": excercisethu,
      "excercisethu1": excercisethu1,
      "excercisethu2": excercisethu2,
      "excercisethu3": excercisethu3,
      "excercisethu4": excercisethu4,
      
      "Thursday2": "Thursday",
 
      
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Workout for Thursday added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  
  const Createfri = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Workoutfri")
 
    
    // Your Document Goes Here
    const docData = {
      "workoutnamefri2": workoutnamefri,
      "excercisefri": excercisefri,
      "excercisefri1": excercisefri1,
      "excercisefri2": excercisefri2,
      "excercisefri3": excercisefri3,
      "excercisefri4": excercisefri4,
      
      "Friday2": "Friday",
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Workout for Friday added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Createsat = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Workoutsat")
 
    
    // Your Document Goes Here
    const docData = {
      "workoutnamesat2": workoutnamesat,
      "excercisesat": excercisesat,
      "excercisesat1": excercisesat1,
      "excercisesat2": excercisesat2,
      "excercisesat3": excercisesat3,
      "excercisesat4": excercisesat4,
      
      "Saturday2": "Saturday",
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Workout for Saturday added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Createsun = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Workoutsun")
 
    
    // Your Document Goes Here
    const docData = {
      "workoutnamesun2": workoutnamesun,
      "excercisesun": excercisesun,
      "excercisesun1": excercisesun1,
      "excercisesun2": excercisesun2,
      "excercisesun3": excercisesun3,
      "excercisesun4": excercisesun4,
      
      "Sunday2": "Sunday",
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Workout for Sunday added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Createworkout = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Workoutsweek")
 
    
    // Your Document Goes Here
    const docData = {
      "workoutnamemon": workoutnamemon,
      "workoutnametue": workoutnametue,
      "workoutnamewed": workoutnamewed,
      "workoutnamethu": workoutnamethu,
      "workoutnamefri": workoutnamefri,
      "workoutnamesat": workoutnamesat,
      "workoutnamesun": workoutnamesun,
      "Monday": "Monday",
      "Tuesday": "Tuesday",
      "Wensday": "Wensday",
      "Thursday": "Thursday",
      "Friday": "Friday",
      "Saturday": "Saturday",
      "Sunday": "Sunday",
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Workout added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })  
  }




  



  const Createt = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "Workout")
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
    const myDoc = doc(database, email, "Workout")
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
    const myDoc = doc(database, email, "Workout")

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


                <KeyboardAvoidingView style={Styles.Add}>
                    <Image source={payment2} style={Styles.Adds}/>
                    <View style={Styles.contentbooo}>
                      <Text></Text>
                      
                      <Text></Text>
                      <Text style={Styles.maintitle}>Add Workout For your Clients</Text>
                      <Text></Text>
                      <Text style={Styles.maintitles}>You can send custom Workout plans{"\n"}and special exercises for your clients</Text>
                  
                     
                     

                    </View>
                   


                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={Styles.Addsds}>
                    <Image source={privacypo} style={Styles.Addsx}/>
                    <View style={Styles.contentbooos}>
                      <Text style={Styles.maintitle}>Enter Client Email</Text>
                      <Text></Text>
                      <Text style={Styles.maintitles}>Enter Client email to{"\n"}send workout shcedule</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Enter Client Email'}
                          value={email}
                          onChangeText={(email) => setEmail(email)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>

                      <Text></Text>
                      <Text></Text>

                      <Text style={Styles.maintitles}>Enter Workout names for a week.{"\n"}Please read the introductions before adding workouts.</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamemon}
                          onChangeText={(workoutnamemon) => setWorkoutnamemon(workoutnamemon)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnametue}
                          onChangeText={(workoutnametue) => setWorkoutnametue(workoutnametue)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamewed}
                          onChangeText={(workoutnamewed) => setWorkoutnamewed(workoutnamewed)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamethu}
                          onChangeText={(workoutnamethu) => setWorkoutnamethu(workoutnamethu)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamefri}
                          onChangeText={(workoutnamefri) => setWorkoutnamefri(workoutnamefri)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamesat}
                          onChangeText={(workoutnamesat) => setWorkoutnamesat(workoutnamesat)}
                          style={Styles.textinoneee}
                          >
                      </TextInput> 
                      <Text></Text>
                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamesun}
                          onChangeText={(workoutnamesun) => setWorkoutnamesun(workoutnamesun)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TouchableOpacity style={Styles.buttonback}
                              onPress={Createworkout}
                      >
                          <Text style={Styles.buttontext}>  Set Workouts</Text>
                      </TouchableOpacity>
                      
                      <Text></Text>
                     
                    </View>


                   


                </KeyboardAvoidingView>




                <KeyboardAvoidingView style={Styles.Addsdse}>
                    <Image source={community} style={Styles.Addsxh}/>
                    <View style={Styles.contentbooos}>

                    <Text style={Styles.day}>Day 01 | Monday</Text>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamemon}
                          onChangeText={(workoutnamemon) => setWorkoutnamemon(workoutnamemon)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <Text style={Styles.day}>Excercises for Monday</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 01 for Monday'}
                          
                          value={excercisemon1}
                          onChangeText={(excercisemon1) => setExcercisemon1(excercisemon1)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 02 for Monday'}
                          
                          value={excercisemon2}
                          onChangeText={(excercisemon2) => setExcercisemon2(excercisemon2)}
                          style={Styles.textinoneee}
                        
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 03 for Monday'}
                          
                          value={excercisemon3}
                          onChangeText={(excercisemon3) => setExcercisemon3(excercisemon3)}
                          style={Styles.textinoneee}
                        
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 04 for Monday'}
                          
                          value={excercisemon4}
                          onChangeText={(excercisemon4) => setExcercisemon4(excercisemon4)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                       <TextInput
                          placeholder={'Excercise no 05 for Monday'}
                          
                          value={excercisemon5}
                          onChangeText={(excercisemon5) => setExcercisemon5(excercisemon5)}
                          style={Styles.textinoneee}
                          
                        
                          >
                      </TextInput>
                      <Text></Text>

                      
                      

                      
                    <TouchableOpacity style={Styles.buttonback}
                              onPress={Create}
                      >
                          <Text style={Styles.buttontext}>  Add Workout</Text>
                      </TouchableOpacity>
                    </View>


                </KeyboardAvoidingView>
                <Text></Text>



                <KeyboardAvoidingView style={Styles.Addsdsedf}>
                    <Image source={profile} style={Styles.Addsxh}/>
                    <View style={Styles.contentbooos}>

                      <Text style={Styles.day}>Day 02 | Tuesday</Text>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnametue}
                          onChangeText={(workoutnametue) => setWorkoutnametue(workoutnametue)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <Text style={Styles.day}>Excercises for Tuesday</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 01 for Tuesday'}
                          
                          value={excercisetue}
                          onChangeText={(excercisetue) => setExcercisetue(excercisetue)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 02 for Tuesday'}
                          
                          value={excercisetue1}
                          onChangeText={(excercisetue1) => setExcercisetue1(excercisetue1)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 03 for Tuesday'}
                          
                          value={excercisetue2}
                          onChangeText={(excercisetue2) => setExcercisetue2(excercisetue2)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 04 for Tuesday'}
                          
                          value={excercisetue3}
                          onChangeText={(excercisetue3) => setExcercisetue3(excercisetue3)}
                          style={Styles.textinoneee}
                          multiline
                          editable
                          >
                      </TextInput>
                      <Text></Text>
                       <TextInput
                          placeholder={'Excercise no 05 for Tuesday'}
                          
                          value={excercisetue4}
                          onChangeText={(excercisetue4) => setExcercisetue4(excercisetue4)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                    <TouchableOpacity style={Styles.buttonback}
                              onPress={Createtue}
                      >
                          <Text style={Styles.buttontext}>  Add Workout</Text>
                      </TouchableOpacity>
                    </View>


                </KeyboardAvoidingView>
                <Text></Text>

                <KeyboardAvoidingView style={Styles.Addsdsed}>
                    <Image source={payment} style={Styles.Addsxh}/>
                    <View style={Styles.contentbooos}>
                     
                     
                      

                      <Text style={Styles.day}>Day 03 | Wensday</Text>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamewed}
                          onChangeText={(workoutnamewed) => setWorkoutnamewed(workoutnamewed)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <Text style={Styles.day}>Excercises for Wensday</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 01 for Wensday'}
                          
                          value={excercisewed1}
                          onChangeText={(excercisewed1) => setExcercisewed1(excercisewed1)}
                          style={Styles.textinoneee}
                     
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 02 for Wensday'}
                          
                          value={excercisewed2}
                          onChangeText={(excercisewed2) => setExcercisewed2(excercisewed2)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 03 for Wensday'}
                          
                          value={excercisewed3}
                          onChangeText={(excercisewed3) => setExcercisewed3(excercisewed3)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 04 for Wensday'}
                          
                          value={excercisewed4}
                          onChangeText={(excercisewed4) => setExcercisewed4(excercisewed4)}
                          style={Styles.textinoneee}
                          multiline
                          editable
                          >
                      </TextInput>
                      <Text></Text>
                       <TextInput
                          placeholder={'Excercise no 05 for Wensday'}
                          
                          value={excercisewed5}
                          onChangeText={(excercisewed5) => setExcercisewed5(excercisewed5)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>

                      
                      

                      
                    <TouchableOpacity style={Styles.buttonback}
                              onPress={Creatwed}
                      >
                          <Text style={Styles.buttontext}>  Add Workout</Text>
                      </TouchableOpacity>
                    </View>


                   


                </KeyboardAvoidingView>
                <Text></Text>

                
                <KeyboardAvoidingView style={Styles.Addsdsed}>
                    <Image source={community} style={Styles.Addsxh}/>
                    <View style={Styles.contentbooos}>
                     
                     
                      

                      <Text style={Styles.day}>Day 04 | Thursday</Text>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamethu}
                          onChangeText={(workoutnamethu) => setWorkoutnamethu(workoutnamethu)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <Text style={Styles.day}>Excercises for Thursday</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 01 for Thursday'}
                          
                          value={excercisethu}
                          onChangeText={(excercisethu) => setExcercisethu(excercisethu)}
                          style={Styles.textinoneee}
                     
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 02 for Thursday'}
                          
                          value={excercisethu1}
                          onChangeText={(excercisethu1) => setExcercisethu1(excercisethu1)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 03 for Thursday'}
                          
                          value={excercisethu2}
                          onChangeText={(excercisethu2) => setExcercisethu2(excercisethu2)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 04 for Thursday'}
                          
                          value={excercisethu3}
                          onChangeText={(excercisethu3) => setExcercisethu3(excercisethu3)}
                          style={Styles.textinoneee}
                          multiline
                          editable
                          >
                      </TextInput>
                      <Text></Text>
                       <TextInput
                          placeholder={'Excercise no 05 for Thursday'}
                          
                          value={excercisethu4}
                          onChangeText={(excercisethu4) => setExcercisethu4(excercisethu4)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>

                      
                      

                      
                    <TouchableOpacity style={Styles.buttonback}
                              onPress={Createthu}
                      >
                          <Text style={Styles.buttontext}>  Add Workout</Text>
                      </TouchableOpacity>
                    </View>


                   


                </KeyboardAvoidingView>
                <Text></Text>

                <KeyboardAvoidingView style={Styles.Addsdsed}>
                    <Image source={frid} style={Styles.Addsxh}/>
                    <View style={Styles.contentbooos}>
                     
                     
                      

                      <Text style={Styles.day}>Day 05 | Friday</Text>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamefri}
                          onChangeText={(workoutnamefri) => setWorkoutnamefri(workoutnamefri)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <Text style={Styles.day}>Excercises for Friday</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 01 for Friday'}
                          
                          value={excercisefri}
                          onChangeText={(excercisefri) => setExcercisefri(excercisefri)}
                          style={Styles.textinoneee}
                     
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 02 for Friday'}
                          
                          value={excercisefri1}
                          onChangeText={(excercisefri1) => setExcercisefri1(excercisefri1)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 03 for Friday'}
                          
                          value={excercisefri2}
                          onChangeText={(excercisefri2) => setExcercisefri2(excercisefri2)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 04 for Friday'}
                          
                          value={excercisefri3}
                          onChangeText={(excercisefri3) => setExcercisefri3(excercisefri3)}
                          style={Styles.textinoneee}
                          multiline
                          editable
                          >
                      </TextInput>
                      <Text></Text>
                       <TextInput
                          placeholder={'Excercise no 05 for Friday'}
                          
                          value={excercisefri4}
                          onChangeText={(excercisefri4) => setExcercisefri4(excercisefri4)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>

                      
                      

                      
                    <TouchableOpacity style={Styles.buttonback}
                              onPress={Createfri}
                      >
                          <Text style={Styles.buttontext}>  Add Workout</Text>
                      </TouchableOpacity>
                    </View>


                   


                </KeyboardAvoidingView>
                <Text></Text>


                <KeyboardAvoidingView style={Styles.Addsdsed}>
                    <Image source={sat} style={Styles.Addsxh}/>
                    <View style={Styles.contentbooos}>
                     
                     
                      

                      <Text style={Styles.day}>Day 06 | Saturday</Text>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamesat}
                          onChangeText={(workoutnamesat) => setWorkoutnamesat(workoutnamesat)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <Text style={Styles.day}>Excercises for Saturday</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 01 for Saturday'}
                          
                          value={excercisesat}
                          onChangeText={(excercisesat) => setExcercisesat(excercisesat)}
                          style={Styles.textinoneee}
                     
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 02 for Saturday'}
                          
                          value={excercisesat1}
                          onChangeText={(excercisesat1) => setExcercisesat1(excercisesat1)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 03 for Saturday'}
                          
                          value={excercisesat2}
                          onChangeText={(excercisesat2) => setExcercisesat2(excercisesat2)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 04 for Saturday'}
                          
                          value={excercisesat3}
                          onChangeText={(excercisesat3) => setExcercisesat3(excercisesat3)}
                          style={Styles.textinoneee}
                          multiline
                          editable
                          >
                      </TextInput>
                      <Text></Text>
                       <TextInput
                          placeholder={'Excercise no 05 for Saturday'}
                          
                          value={excercisesat4}
                          onChangeText={(excercisesat4) => setExcercisesat4(excercisesat4)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>

                      
                      

                      
                    <TouchableOpacity style={Styles.buttonback}
                              onPress={Createsat}
                      >
                          <Text style={Styles.buttontext}>  Add Workout</Text>
                      </TouchableOpacity>
                    </View>


                   


                </KeyboardAvoidingView>
                <Text></Text>

                
                <KeyboardAvoidingView style={Styles.Addsdsed}>
                    <Image source={suns} style={Styles.Addsxh}/>
                    <View style={Styles.contentbooos}>
                     
                     
                      

                      <Text style={Styles.day}>Day 07 | Sunday</Text>
                      <Text></Text>

                      <TextInput
                          placeholder={'Enter Workout Name'}
                          value={workoutnamesun}
                          onChangeText={(workoutnamesun) => setWorkoutnamesun(workoutnamesun)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <Text style={Styles.day}>Excercises for Sunday</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 01 for Sunday'}
                          
                          value={excercisesun}
                          onChangeText={(excercisesun) => setExcercisesun(excercisesun)}
                          style={Styles.textinoneee}
                     
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 02 for Sunday'}
                          
                          value={excercisesun1}
                          onChangeText={(excercisesun1) => setExcercisesun1(excercisesun1)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 03 for Sunday'}
                          
                          value={excercisesun2}
                          onChangeText={(excercisesun2) => setExcercisesun2(excercisesun2)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Excercise no 04 for Sunday'}
                          
                          value={excercisesun3}
                          onChangeText={(excercisesun3) => setExcercisesun3(excercisesun3)}
                          style={Styles.textinoneee}
                          multiline
                          editable
                          >
                      </TextInput>
                      <Text></Text>
                       <TextInput
                          placeholder={'Excercise no 05 for Sunday'}
                          
                          value={excercisesun4}
                          onChangeText={(excercisesun4) => setExcercisesun4(excercisesun4)}
                          style={Styles.textinoneee}
                         
                          >
                      </TextInput>
                      <Text></Text>

                      
                      

                      
                    <TouchableOpacity style={Styles.buttonback}
                              onPress={Createsun}
                      >
                          <Text style={Styles.buttontext}>  Add Workout</Text>
                      </TouchableOpacity>
                    </View>


                   


                </KeyboardAvoidingView>
                <Text></Text>



                <KeyboardAvoidingView style={Styles.Addsdsssd}>
                    <Image source={help} style={Styles.Addsx}/>
                    <View style={Styles.contentbooos}>
                      <Text style={Styles.maintitle}>Create Invoices</Text>
                      <Text></Text>
                      <Text style={Styles.maintitles}>Create Invoices and{"\n"}get payments from clients</Text>
                      <Text></Text>
                      <TextInput
                          placeholder={'Enter Client Email'}
                          value={email}
                          onChangeText={(email) => setEmail(email)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'Total Amount'}
                          value={amount}
                          onChangeText={(amount) => setAmount(amount)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>
                      <Text></Text>
                      <TextInput
                          placeholder={'MM/DD'}
                          value={date}
                          onChangeText={(date) => setDate(date)}
                          style={Styles.textinoneee}

                          >
                      </TextInput>
                   
                     

                      <Text></Text>
                      <TouchableOpacity style={Styles.buttonback}
                              onPress={Invoices}
                      >
                          <Text style={Styles.buttontext}>  Send Invoice</Text>
                      </TouchableOpacity>


                    </View>
                   
                    <Text></Text>
                <Text></Text>
                <Text></Text>


                </KeyboardAvoidingView>


                <Text></Text>
                <Text></Text>
                <Text></Text>

               
            </ScrollView>              

            
            

        </KeyboardAvoidingView>
    )
}

export default Adworkout

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#181818',      
    },
    scrollfoef: {
        height: 1900,
    },
    textinoneee: {
        width: 305,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingHorizontal: 25,
        
        color: 'black',
    },
    textinoneees: {
      width: 305,
      height: 90,
      borderRadius: 20,
      backgroundColor: 'white',
      paddingHorizontal: 25,
      paddingVertical: 5,
      justifyContent: 'flex-start',
      
      color: 'black',
  },
    bin: {
      width: 20,
      height: 20,
    },
    buttonback: {
        height: 50,
        width: 150,
        borderRadius: 45,
        backgroundColor: 'greenyellow',
        paddingHorizontal: 17,
        paddingVertical: 13,
    },
    buttonbackk: {
      position: 'absolute',
      height: 50,
      width: 50,
      borderRadius: 45,
      backgroundColor: 'red',
      paddingHorizontal: 25,
      
      
      alignItems: 'center',
     
      marginLeft: 160,
  },
    buttontext: {
        color: 'black',
        fontSize: 17,
    },
    Add: {
        width: 350,
        height: 280,
     
    },
    Addsd: {
      width: 350,
      height: 400,
     
    },
    Addsdsss: {
      width: 350,
      height: 400,
      marginTop: 900,
     
    },
    Addsdsssd: {
      width: 350,
      height: 400,
      marginTop: 240,
     
    },
    Adds: {
        width: 350,
        height: 250,
        marginHorizontal: 15,
        
        borderRadius: 15,
    },
    Addsx: {
      width: 350,
      height: 900,
      marginHorizontal: 15,
      borderRadius: 15,
      
  },
  Addsxh: {
    width: 350,
    height: 620,
    marginHorizontal: 15,
    borderRadius: 15,
    
},

Addsxh: {
    width: 350,
    height: 620,
    marginHorizontal: 15,
    borderRadius: 15,
    
},
  Addsds: {
    width: 350,
    height: 400,
    
   
  },
  Addsdse: {
    width: 350,
    height: 400,
    marginTop: 530,
  },
  Addsdsedf: {
    width: 350,
    height: 400,
    marginTop: 230,
  },
  Addsdsed: {
    width: 350,
    height: 400,
    marginTop: 230,
  },
    maintitle: {
        
        fontSize: 23,
        fontWeight: '700',
        color: 'white',
    },
    maintitles: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
    },
    contentbooo: {
        position: 'absolute',
        marginHorizontal: 40,
     
    },
    contentbooos: {
      position: 'absolute',
      marginHorizontal: 40,
      marginTop: 30,
     
  },
  day: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },



});
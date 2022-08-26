

import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, Picker, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import profile from '../assets/wed.jpg';
import { database } from '../fir/firebase-config';
import payment from '../assets/foooood.jpg';
import help from '../assets/weee.jpg';
import privacypo from '../assets/mmm.jpg';
import community from '../assets/adadd.jpg';
import { User } from 'firebase/auth';
import payment2 from '../assets/backgroundg.jpg';
import frid from '../assets/fri.jpg';
import sat from '../assets/qweeq.jpg';
import suns from '../assets/aefefaef.jpg';




const Addmealplan = ({ navigation }) => {

    


    const [email, setEmail] = React.useState('');
    const [foodplateone, setFoodplateone] = React.useState('');
    const [foodplatetwo, setFoodplatetwo] = React.useState('');
    const [foodplatethree, setFoodplatethree] = React.useState('');
    const [foodplatefour, setFoodplatefour] = React.useState('');
    const [foodplatefive, setFoodplatefive] = React.useState('');
    const [advice, setAdvice] = React.useState('');
    const [water, setWater] = React.useState('');

 
    

    






  
     // Storing User Data
  const [userDoc, setUserDoc] = useState(null)
  // Update Text
  const [text, setText] = useState("")

  // MARK: CRUD Functions
  const Create = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "mondaymeal01")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Monday",
      "meal": "Meal 01",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create2 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "mondaymeal02")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Monday",
      "meal": "Meal 02",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create3 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "mondaymeal03")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Monday",
      "meal": "Meal 03",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Create4 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "mondaymeal04")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Monday",
      "meal": "Meal 04",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create5 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "mondaymeal05")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Monday",
      "meal": "Meal 05",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  
  const Create6 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "mondaymeal06")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Monday",
      "meal": "Meal 06",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }



  const Create7 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "tuesdaymeal01")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Tuesday",
      "meal": "Meal 01",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create8 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "tuesdaymeal02")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Tuesday",
      "meal": "Meal 02",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create9 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "tuesdaymeal03")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Tuesday",
      "meal": "Meal 03",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Create10 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "tuesdaymeal04")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Tuesday",
      "meal": "Meal 04",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create11 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "tuesdaymeal05")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Tuesday",
      "meal": "Meal 05",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  
  const Create12 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "tuesdaymeal06")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Tuesday",
      "meal": "Meal 06",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create13 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "wensdaymeal01")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Wensday",
      "meal": "Meal 01",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create14 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "wensdaymeal02")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Wensday",
      "meal": "Meal 02",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create15 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "wensdaymeal03")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Wensday",
      "meal": "Meal 03",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Create16 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "wensdaymeal04")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Wensday",
      "meal": "Meal 04",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create17 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "wensdaymeal05")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Wensday",
      "meal": "Meal 05",
    
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  
  const Create18 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "wensdaymeal06")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Wensday",
      "meal": "Meal 06",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Create19 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "thursdaymeal01")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Thursday",
      "meal": "Meal 01",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create20 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "thursdaymeal02")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Thursday",
      "meal": "Meal 02",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create21 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "thursdaymeal03")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Thursday",
      "meal": "Meal 03",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Create22 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "thursdaymeal04")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Thursday",
      "meal": "Meal 04",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create23 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "thursdaymeal05")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Thursday",
      "meal": "Meal 05",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  
  const Create24 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "thursdaymeal06")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Thursday",
      "meal": "Meal 06",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }



  const Create25 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "fridaymeal01")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Friday",
      "meal": "Meal 01",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create26 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "fridaymeal02")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Friday",
      "meal": "Meal 02",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create27 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "fridaymeal03")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Friday",
      "meal": "Meal 03",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Create28 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "fridaymeal04")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Friday",
      "meal": "Meal 04",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create29 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "fridaymeal05")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Friday",
      "meal": "Meal 05",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  
  const Create30 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "fridaymeal06")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Friday",
      "meal": "Meal 06",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create31 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "saturdaymeal01")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Saturday",
      "meal": "Meal 01",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create32 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "saturdaymeal02")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Saturday",
      "meal": "Meal 02",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create33 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "saturdaymeal03")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Saturday",
      "meal": "Meal 03",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Create34 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "saturdaymeal04")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Saturday",
      "meal": "Meal 04",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create35 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "saturdaymeal05")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Saturday",
      "meal": "Meal 05",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  
  const Create36 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "saturdaymeal06")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Saturday",
      "meal": "Meal 06",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create37 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "sundaymeal01")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Sunday",
      "meal": "Meal 01",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create38 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "sundaymeal02")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Sunday",
      "meal": "Meal 02",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create39 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "sundaymeal03")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Sunday",
      "meal": "Meal 03",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  const Create40 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "sundaymeal04")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Sunday",
      "meal": "Meal 04",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }

  const Create41 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "sundaymeal05")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Sunday",
      "meal": "Meal 05",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

    
  }


  
  const Create42 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, "sundaymeal06")
 
    
    // Your Document Goes Here
    const docData = {
      "foodplateone": foodplateone,
      "foodplatetwo": foodplatetwo,
      "foodplatethree": foodplatethree,
      "foodplatefour": foodplatefour,
      "advice": advice,
      "foodplatefive": foodplatefive,
      "water": water,
      "workoutday": "Sunday",
      "meal": "Meal 06",
   
      
     
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Meal added successfully")
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
                    <Image source={payment} style={Styles.Adds}/>
                    <View style={Styles.contentbooo}>
                      <Text></Text>
                      
                      <Text></Text>
                      <Text style={Styles.maintitle}>Add Meal Plans For your Clients</Text>
                      <Text></Text>
                      <Text style={Styles.maintitles}>You can send custom meal plans{"\n"}and special nutritional advices for your clients</Text>
                  
                     
                     

                    </View>
                   


                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={Styles.Addsds}>

                <View style={Styles.watere}>


                        <Text style={Styles.textsett}>Enter client email address</Text>
                        <Text></Text>
                        <TextInput
                            placeholder={'Client Email address'}
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            style={Styles.textinoneee}
                        >
                        </TextInput>


                </View>
                <Text></Text>

                
                   
                        <View style={Styles.monday}>
                                <Text style={Styles.textsett}>Add Foods</Text>
                                <Text></Text>
                                <TextInput
                                        placeholder={'Food Plate 01'}
                                        value={foodplateone}
                                        onChangeText={(foodplateone) => setFoodplateone(foodplateone)}
                                        style={Styles.textinoneee}
                                >
                                 </TextInput>
                                 <Text></Text>
                                <TextInput
                                        placeholder={'Food Plate 02'}
                                        value={foodplatetwo}
                                        onChangeText={(foodplatetwo) => setFoodplatetwo(foodplatetwo)}
                                        style={Styles.textinoneee}
                                >
                                 </TextInput>
                                 <Text></Text>
                                <TextInput
                                        placeholder={'Food Plate 03'}
                                        value={foodplatethree}
                                        onChangeText={(foodplatethree) => setFoodplatethree(foodplatethree)}
                                        style={Styles.textinoneee}
                                >
                                 </TextInput>
                                 <Text></Text>
                                <TextInput
                                        placeholder={'Food Plate 04'}
                                        value={foodplatefour}
                                        onChangeText={(foodplatefour) => setFoodplatefour(foodplatefour)}
                                        style={Styles.textinoneee}
                                >
                                 </TextInput>
                                 <Text></Text>
                                 <TextInput
                                        placeholder={'Food Plate 05'}
                                        value={foodplatefive}
                                        onChangeText={(foodplatefive) => setFoodplatefive(foodplatefive)}
                                        style={Styles.textinoneee}
                                >
                                 </TextInput>
                                 <Text></Text>
                                 <Text></Text>
                                 <TextInput
                                        placeholder={'Special Advices'}
                                        value={advice}
                                        onChangeText={(advice) => setAdvice(advice)}
                                        style={Styles.textinoneees}
                                >
                                 </TextInput>
                                 
                                 <Text></Text>
                                 
                            

                        </View>
                        
                        <View style={Styles.water}>

                                 <Text style={Styles.textsett}>Water Intake | Only add for meal 01</Text>
                                 <Text></Text>
                                 <TextInput
                                        placeholder={'Daily Water Intake'}
                                        value={water}
                                        onChangeText={(water) => setWater(water)}
                                        style={Styles.textinoneee}
                                        multiline
                                >
                                 </TextInput>


                        </View>
                      
                        <View style={Styles.waterd}>
                        <Text style={Styles.textsettw}>Send Meal</Text>
                        <Text></Text>
                        <Text style={Styles.textsetttf}>You can select the meal number and it will automatically send to the client. aslo if you{"\n"}want to the add same meal for another day{"\n"}you can swip right and select other day and meal number.</Text>

                        </View>
                        
                        <Text></Text>
                        <ScrollView
                             horizontal={true}
                             showsHorizontalScrollIndicator={false}
                             
                        >
                        <View style={Styles.waterea}>


                            <Text style={Styles.textsetta}>Monday</Text>
                            
                           <Text></Text>
                            <Text style={Styles.textsett}>Select Meal number and send</Text>
                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create}
                            >
                                <Text style={Styles.textinn}>Send as Monday Meal No 01</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create2}
                            >
                                <Text style={Styles.textinn}>Send as Monday Meal No 02</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create3}
                            >
                                <Text style={Styles.textinn}>Send as Monday Meal No 03</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create4}
                            >
                                <Text style={Styles.textinn}>Send as Monday Meal No 04</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create5}
                            >
                                <Text style={Styles.textinn}>Send as Monday Meal No 05</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create6}
                            >
                                <Text style={Styles.textinn}>Send as Monday Meal No 06</Text>
                            </TouchableOpacity>



                        </View>
                        <View style={Styles.watereaff}>


                            <Text style={Styles.textsetta}>Tuesday</Text>
                            
                           <Text></Text>
                            <Text style={Styles.textsett}>Select Meal number and send</Text>
                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create7}
                            >
                                <Text style={Styles.textinn}>Send as Tuesday Meal No 01</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create8}
                            >
                                <Text style={Styles.textinn}>Send as Tuesday Meal No 02</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create9}
                            >
                                <Text style={Styles.textinn}>Send as Tuesday Meal No 03</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create10}
                            >
                                <Text style={Styles.textinn}>Send as Tuesday Meal No 04</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create11}
                            >
                                <Text style={Styles.textinn}>Send as Tuesday Meal No 05</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create12}
                            >
                                <Text style={Styles.textinn}>Send as Tuesday Meal No 06</Text>
                            </TouchableOpacity>



                        </View>
                        <View style={Styles.watereaff2}>


                            <Text style={Styles.textsetta}>Wensday</Text>
                            
                           <Text></Text>
                            <Text style={Styles.textsett}>Select Meal number and send</Text>
                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create13}
                            >
                                <Text style={Styles.textinn}>Send as Wensday Meal No 01</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create14}
                            >
                                <Text style={Styles.textinn}>Send as Wensday Meal No 02</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create15}
                            >
                                <Text style={Styles.textinn}>Send as Wensday Meal No 03</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create16}
                            >
                                <Text style={Styles.textinn}>Send as Wensday Meal No 04</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create17}
                            >
                                <Text style={Styles.textinn}>Send as Wensday Meal No 05</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create18}
                            >
                                <Text style={Styles.textinn}>Send as Wensday Meal No 06</Text>
                            </TouchableOpacity>



                        </View>

                        <View style={Styles.waterea}>


                            <Text style={Styles.textsetta}>Thursday</Text>
                            
                           <Text></Text>
                            <Text style={Styles.textsett}>Select Meal number and send</Text>
                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create19}
                            >
                                <Text style={Styles.textinn}>Send as Thursday Meal No 01</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create20}
                            >
                                <Text style={Styles.textinn}>Send as Thursday Meal No 02</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create21}
                            >
                                <Text style={Styles.textinn}>Send as Thursday Meal No 03</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create22}
                            >
                                <Text style={Styles.textinn}>Send as Thursday Meal No 04</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create23}
                            >
                                <Text style={Styles.textinn}>Send as Thursday Meal No 05</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create24}
                            >
                                <Text style={Styles.textinn}>Send as Thursday Meal No 06</Text>
                            </TouchableOpacity>



                        </View>
                        <View style={Styles.watereaff}>


                            <Text style={Styles.textsetta}>Friday</Text>
                            
                           <Text></Text>
                            <Text style={Styles.textsett}>Select Meal number and send</Text>
                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create25}
                            >
                                <Text style={Styles.textinn}>Send as Friday Meal No 01</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create26}
                            >
                                <Text style={Styles.textinn}>Send as Friday Meal No 02</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create27}
                            >
                                <Text style={Styles.textinn}>Send as Friday Meal No 03</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create28}
                            >
                                <Text style={Styles.textinn}>Send as Friday Meal No 04</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create29}
                            >
                                <Text style={Styles.textinn}>Send as Friday Meal No 05</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create30}
                            >
                                <Text style={Styles.textinn}>Send as Friday Meal No 06</Text>
                            </TouchableOpacity>



                        </View>
                        <View style={Styles.watereaff2}>


                            <Text style={Styles.textsetta}>Saturday</Text>
                            
                           <Text></Text>
                            <Text style={Styles.textsett}>Select Meal number and send</Text>
                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create31}
                            >
                                <Text style={Styles.textinn}>Send as Saturday Meal No 01</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create32}
                            >
                                <Text style={Styles.textinn}>Send as Saturday Meal No 02</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create33}
                            >
                                <Text style={Styles.textinn}>Send as Saturday Meal No 03</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create34}
                            >
                                <Text style={Styles.textinn}>Send as Saturday Meal No 04</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create35}
                            >
                                <Text style={Styles.textinn}>Send as Saturday Meal No 05</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create36}
                            >
                                <Text style={Styles.textinn}>Send as Saturday Meal No 06</Text>
                            </TouchableOpacity>



                        </View>

                        <View style={Styles.watereaff3}>


                            <Text style={Styles.textsetta}>Sunday</Text>
                            
                           <Text></Text>
                            <Text style={Styles.textsett}>Select Meal number and send</Text>
                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create37}
                            >
                                <Text style={Styles.textinn}>Send as Sunday Meal No 01</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create38}
                            >
                                <Text style={Styles.textinn}>Send as Sunday Meal No 02</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create39}
                            >
                                <Text style={Styles.textinn}>Send as Sunday Meal No 03</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create40}
                            >
                                <Text style={Styles.textinn}>Send as Sunday Meal No 04</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create41}
                            >
                                <Text style={Styles.textinn}>Send as Sunday Meal No 05</Text>
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity
                                    style={Styles.button}
                                    onPress={Create42}
                            >
                                <Text style={Styles.textinn}>Send as Sunday Meal No 06</Text>
                            </TouchableOpacity>



                        </View>

                        



                        </ScrollView>
                        
                        <Text></Text>

                        

                   

                </KeyboardAvoidingView>


                <Text></Text>
                <Text></Text>
                <Text></Text>

               
            </ScrollView>              

            
            

        </KeyboardAvoidingView>
    )
}

export default Addmealplan

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#181818',      
    },
    scrollfoef: {
        height: 2800,
    },
    Add: {
        width: 350,
        height: 280,
     
    },
    Adds: {
        width: 350,
        height: 250,
        marginHorizontal: 15,
        
        borderRadius: 15,
    },
    Addsds: {
        width: 350,
        height: 1820,
        marginHorizontal: 15,
        
        borderRadius: 15,
    },
    contentbooo: {
        position: 'absolute',
        marginHorizontal: 40,
     
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
    monday: {
        width: 350,
        height: 550,
        backgroundColor: '#2C2C2C',
        borderRadius: 15,
        marginRight: 15,
        paddingTop: 25,
        paddingLeft: 25,
      
    },
    textset: {
        fontSize: 30,
        color: 'white',
        fontWeight: '600',
    },
    textsett: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    textsetta: {
        fontSize: 30,
        color: 'white',
        fontWeight: '600',
    },
    textsettw: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
    },
    textsettt: {
        fontSize: 15,
        color: 'white',
        fontWeight: '600',
    },

    textsetttf: {
        fontSize: 15,
        color: 'black',
        fontWeight: '600',
    },
    
    
    textinoneee: {
        width: 300,
        backgroundColor: 'white',
        height: 45,
        borderRadius: 15,
        paddingLeft: 15,
    },
    textinoneees: {
        width: 300,
        backgroundColor: 'white',
        height: 100,
        borderRadius: 15,
        paddingLeft: 15,
    },
    watere: {
        width: 350,
        height: 150,
        backgroundColor: '#E3714B',

        paddingTop: 20,
        paddingLeft: 20,
        borderRadius: 15,
    },
    waterea: {
        width: 350,
        height: 620,
        backgroundColor: '#4C54E4',
        paddingTop: 20,
        paddingLeft: 20,
        borderRadius: 15,
        marginRight: 20,
    },
    watereaff: {
        width: 350,
        height: 620,
        backgroundColor: '#E3714B',
        paddingTop: 20,
        paddingLeft: 20,
        borderRadius: 15,
        marginRight: 20,
    },
    watereaff2: {
        width: 350,
        height: 620,
        backgroundColor: '#ACE655',
        paddingTop: 20,
        paddingLeft: 20,
        borderRadius: 15,
        marginRight: 20,
    },
    watereaff3: {
        width: 350,
        height: 620,
        backgroundColor: '#E6AC55',
        paddingTop: 20,
        paddingLeft: 20,
        borderRadius: 15,
    },
    water: {
        width: 350,
        height: 150,
        backgroundColor: '#66D7EE',
        marginTop: 30,
        paddingTop: 20,
        paddingLeft: 20,
        borderRadius: 15,
    },
    waterd: {
        width: 350,
        height: 200,
        backgroundColor: '#D3D3D3',
        marginTop: 30,
        paddingTop: 20,
        paddingLeft: 20,
        borderRadius: 15,
    },
    mealsend: {
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: 'white',
        width: 158,
        borderRadius: 19,
    },
    mealsends: {
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: 'white',
        width: 158,
        borderRadius: 19,
        position: 'absolute',

    },
    button: {
        width: 300,
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    textinn: {
        color: 'black',
        fontWeight: '600',
        fontSize: 17,
    },


});
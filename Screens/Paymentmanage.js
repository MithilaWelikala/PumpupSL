

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



const Paymentmanage = ({ navigation }) => {

    


    const [email, setEmail] = React.useState('');
    const [description, setDescription] = React.useState('');
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
      "description": description,
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


                <KeyboardAvoidingView style={Styles.Add}>
                    <Image source={payment2} style={Styles.Adds}/>
                    <Text></Text>
                    <View style={Styles.contentbooo}>
                    <Text></Text>
                    <Text></Text>
                      <Text style={Styles.maintitle}>Send Payment Reminder</Text>
                      <Text></Text>
                      <Text style={Styles.maintitles}>Please Add Client details and send{"\n"}payment reminder to target client</Text>
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
                          placeholder={'Enter Due Date'}
                          value={datep}
                          onChangeText={(datep) => setDatep(datep)}
                          style={Styles.textinoneee}
                          >
                      </TextInput>

                      <Text></Text>
                      <TouchableOpacity style={Styles.buttonback}
                              onPress={Create}
                      >
                          <Text style={Styles.buttontext}>Send Reminder</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={Styles.buttonbackk}
                              onPress={Delete}
                      >
                          <Image source={community} style={Styles.bin}/>
                      </TouchableOpacity>

                    </View>
                   


                </KeyboardAvoidingView>

                <Text></Text>

                <KeyboardAvoidingView style={Styles.Addsd}>
                    <Image source={privacypo} style={Styles.Addsx}/>
                    <View style={Styles.contentbooos}>
                      <Text style={Styles.maintitle}>Set Payment Due Date</Text>
                      <Text></Text>
                      <Text style={Styles.maintitles}>Add Client email address and{"\n"}set Due date</Text>
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
                          placeholder={'Year'}
                          value={Payyear}
                          onChangeText={(Payyear) => setPayyear(Payyear)}
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
                              onPress={Createt}
                      >
                          <Text style={Styles.buttontext}>  Set Due Date</Text>
                      </TouchableOpacity>


                    </View>
                   


                </KeyboardAvoidingView>
                <Text></Text>
                <KeyboardAvoidingView style={Styles.Addsd}>
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
                          placeholder={'Description'}
                          value={description}
                          onChangeText={(description) => setDescription(description)}
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
                   


                </KeyboardAvoidingView>


                <Text></Text>
                <Text></Text>
                <Text></Text>

               
            </ScrollView>              

            
            

        </KeyboardAvoidingView>
    )
}

export default Paymentmanage

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
        justifyContent: 'center',
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
      paddingVertical: 13,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: 288,
      marginLeft: 160,
  },
    buttontext: {
        color: 'black',
        fontSize: 17,
    },
    Add: {
        width: 350,
        height: 400,
        marginTop: 20,
    },
    Addsd: {
      width: 350,
      height: 500,
     
    },
    Adds: {
        width: 350,
        height: 350,
        marginHorizontal: 15,
        marginTop: 50,
        borderRadius: 15,
    },
    Addsx: {
      width: 350,
      height: 470,
      marginHorizontal: 15,
      marginTop: 5,
      borderRadius: 15,
  },
    maintitle: {
        
        fontSize: 23,
        fontWeight: '700',
        color: 'white',
    },
    maintitles: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
    },
    contentbooo: {
        position: 'absolute',
        marginHorizontal: 40,
        marginTop: 40,
    },
    contentbooos: {
      position: 'absolute',
      marginHorizontal: 40,
      marginTop: 20,
  },



});
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import profile from '../assets/pcomunity.jpg';
import { database } from '../fir/firebase-config';
import payment from '../assets/123334454.jpg';
import help from '../assets/fri.jpg';
import privacypo from '../assets/123334.jpg';
import community from '../assets/pushh.jpg';
import { User } from 'firebase/auth';
import payment2 from '../assets/payment.jpg';



const Packages2 = ({ navigation }) => {

    


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
    const myDocp = doc(database, "Packages1", email)
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
    setDoc(myDocp, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Update your information successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
    navigation.navigate('DashboardusersScreen')
    


    
  }
  

  const Create2 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, name)
    const myDoc2 = doc(database, "Userlist", sname)
    const myDoc3 = doc(database, "Userlist", telephone)
    const myDoc4 = doc(database, "Userlist", email)
    const myDocp = doc(database, "Packages2", email)
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
    setDoc(myDocp, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Update your information successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
    navigation.navigate('DashboardusersScreen')
    


    
  }
  

  const Create3 = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(database, email, name)
    const myDoc2 = doc(database, "Userlist", sname)
    const myDoc3 = doc(database, "Userlist", telephone)
    const myDoc4 = doc(database, "Userlist", email)
    const myDocp = doc(database, "Packages3", email)
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
    setDoc(myDocp, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Update your information successfully")
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })
    navigation.navigate('DashboardusersScreen')
    


    
  }
  


   const Read2 = () => {
      // MARK: Reading Doc
      // You can read what ever document by changing the collection and document path here
      const myDoc = doc(database, "plansforpacks", "kiveM2mIaFBjKQf5AVXy")
  
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
        const myDoc = doc(database, "plansforpacks", "plan01111")
    
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
            
           

            <ScrollView style={Styles.scrollfoef}>


         
                
                <Text></Text>

                <View style={Styles.viewfor}>
                    <Text style={{fontSize: 30, color: 'white', fontWeight: '700'}}
                    
                    >Change Package</Text>
                    <Text style={{fontSize: 15, color: 'white', fontWeight: '400'}}>Add your informations and select the plan</Text>
                </View>

             
              
                <Text></Text>
                

                <Text></Text>
                <View style={Styles.viewforinput}>

                

                   
                
                    <TextInput
                        placeholder={'Email Address'}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        style={Styles.textinone}
                        placeholderTextColor="white"
                        >
                    </TextInput>
               
                
                
                <TextInput
                        placeholder={'Password'}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        style={Styles.textinone}
                        secureTextEntry
                        placeholderTextColor="white"
                        >
                        
                </TextInput>
                <TextInput
                        placeholder={'First Name'}
                        value={name}
                        onChangeText={(name) => setName(name)}
                        style={Styles.textinone}
                        placeholderTextColor="white"
                        >
                </TextInput>
                <TextInput
                        placeholder={'Full Name'}
                        value={sname}
                        onChangeText={(sname) => setSname(sname)}
                        style={Styles.textinone}
                        placeholderTextColor="white">
                </TextInput>
                <TextInput
                        placeholder={'+94'}
                        value={ccode}
                        onChangeText={(ccode) => setCcode(ccode)}
                        style={Styles.textinonee}
                        placeholderTextColor="white"
                        >
                </TextInput>
                <TextInput
                        placeholder={'Telephone'}
                        value={telephone}
                        onChangeText={(telephone) => setTelephone(telephone)}
                        style={Styles.textinoneee}
                        keyboardType={'number-pad'}
                        placeholderTextColor="white"
                        >
                </TextInput>
                </View>
              


                <View>
                    <Image source={community} style={Styles.plansad}/>
                    <View style={{position: 'absolute', marginHorizontal: 50, marginTop: 20, }}>
                        <Text style={{fontSize: 24, color: 'white', fontWeight: '600'}}>Select Your Best{"\n"}For You</Text>
       
                        <Text style={{fontSize: 16, color: 'white',}}>You can select the most{"\n"}suitable personal training{"\n"}plan for your journey.</Text>
                        <Text></Text>
                        <TouchableOpacity
                            onPress={Read2}
                        >
                            <Text style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white', width: 120, borderRadius: 15,}}> Show Plans</Text>
                        </TouchableOpacity>
                    </View>
                    <Text></Text>
                </View>

                {
                    userDoc != null &&

                    <View>
                        <Text style={{fontSize: 24, color: 'white', fontWeight: '600', marginLeft: 25,}}>Personal Training Plans</Text>
                        <View
                      
                        >
                    <Image source={privacypo} style={Styles.plansadd}/>
                    <View style={{position: 'absolute', marginHorizontal: 50, marginTop: 25, }}>
                        <Text style={{fontSize: 28, color: 'white', fontWeight: '800'}}>{userDoc.Plan01name}</Text>
                        <Text></Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan01Service1}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan01Service2}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan01Service3}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan01Service4}</Text>
                        <Text></Text>
                        <Text style={{fontSize: 28, color: 'white', fontWeight: '800'}}>{userDoc.Plan01price}</Text>
                        <Text></Text>
                        <TouchableOpacity
                            onPress={Create}
                        >
                            <Text style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white', width: 120, borderRadius: 15, fontWeight: '600', fontSize: 16,}}>  Continue</Text>
                        </TouchableOpacity>
                    </View>
                 
                   
              
                    
                    </View>
                    <Text></Text>
                    <View>
                    <Image source={help} style={Styles.plansadd}/>
                    <View style={{position: 'absolute', marginHorizontal: 50, marginTop: 25, }}>
                        <Text style={{fontSize: 28, color: 'white', fontWeight: '800'}}>{userDoc.Plan02name}</Text>
                        <Text></Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan02Service1}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan02ervice2}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan02Service3}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan02Service4}</Text>
                        <Text></Text>
                        <Text style={{fontSize: 28, color: 'white', fontWeight: '800'}}>{userDoc.Plan01price}</Text>
                        <Text></Text>
                        <TouchableOpacity
                            onPress={Create2}
                        >
                            <Text style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white', width: 120, borderRadius: 15, fontWeight: '600', fontSize: 16,}}>  Continue</Text>
                        </TouchableOpacity>
                    </View>
                  
                  
              
                    
                    </View>
                    <Text></Text>
                    <View>
                    <Image source={payment} style={Styles.plansadd}/>
                    <View style={{position: 'absolute', marginHorizontal: 50, marginTop: 25, }}>
                        <Text style={{fontSize: 28, color: 'white', fontWeight: '800'}}>{userDoc.Plan02name}</Text>
                        <Text></Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan03Service1}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan03Service2}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan03Service3}</Text>
                        <Text style={{fontSize: 16, color: 'white',}}>{userDoc.Plan03Service4}</Text>
                        <Text></Text>
                        <Text style={{fontSize: 28, color: 'white', fontWeight: '800'}}>{userDoc.Plan03price}</Text>
                        <Text></Text>
                        <TouchableOpacity
                            onPress={Create3}
                        >
                            <Text style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white', width: 120, borderRadius: 15, fontWeight: '600', fontSize: 16,}}>  Continue</Text>
                        </TouchableOpacity>
                    </View>
                    <Text></Text>
                    
                   
                    
                    </View>
                    <View style={{width: 330, backgroundColor: '#141414', height: 120, borderRadius: 15, marginHorizontal: 25, paddingHorizontal: 20, paddingTop: 20,}}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>Have any Question?</Text>
                        <Text></Text>
                        <Text style={{fontSize: 17, color: 'white', fontWeight: '400'}}>feel free to call {userDoc.Phonenumber}</Text>
                        
                    </View>

                    

                    

                    <TouchableOpacity>
                        <Text></Text>
                    </TouchableOpacity>
                    </View>
                    
                }
                
              
            </ScrollView>              

            
            

        </KeyboardAvoidingView>
    )
}

export default Packages2

const Styles = StyleSheet.create({
    contentbox: {
        flex: 1,
        backgroundColor: '#000000',
        
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
        width: 330,
        height: 55,
        borderWidth: 0,
        marginBottom: 20,
        backgroundColor: '#111010',
        borderRadius: 15,
        paddingLeft: 18,
        color: 'white',
        
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
        backgroundColor: '#111010',
        borderRadius: 15,
        padding: 18,
        color: 'white',
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
        width: 250,
        height: 60,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        marginBottom: 20,
        marginTop: 300,
        marginLeft: 80,
        backgroundColor: '#111010',
        color: 'white',
        borderRadius: 15,
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
    plansad: {
        width: 330,
        height: 210,
        marginHorizontal: 25,
        marginTop: 10,
        borderRadius: 15,
    },
    plansadd: {
        width: 330,
        height: 305,
        marginHorizontal: 25,
        marginTop: 10,
        borderRadius: 15,
    },
    plansadds: {
        width: 330,
        height: 45,
        marginHorizontal: 25,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#66FF00',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },


});
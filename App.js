import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, Alert } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import WelcomeScreen from './Screens/WelcomeScreen';
import SigninScreen from './Screens/SigninScreen';
import SignupScreen from './Screens/SignupScreen';
import DashboardusersScreen from './Screens/DashboardusersScreen';
import SigninformScreen from './Screens/SigninformScreen';
import Backsquart from './Screens/Backsquart';
import TimerScreen from './Screens/TimerScreen';
import MealOne from './Screens/MealOne';
import Packages from './Screens/Packages';
import DashboardforGuests from './Screens/DashboardforGuests';
import Profile from './Screens/Profile';
import MealPlan from './Screens/MealPlan';
import WorkoutPlan from './Screens/WorkoutPlan';
import Absworkout from './Screens/Absworkout';
import MealTwo from './Screens/MealTwo';
import Mealthree from './Screens/Mealthree';
import Mealfour from './Screens/Mealfour';
import Shakeone from './Screens/Shakeone';
import BarbellShoulder from './Screens/BarbellShoulder';
import Bcrunch from './Screens/Bcrunch';
import Benchpress from './Screens/Benchpress';
import Signupsecond from './Screens/Signupsecond';
import Accountdetails from './Screens/Accountdetails';
import Payment from './Screens/Payment';
import Secondwe from './Screens/Secondwe';
import Adminaccount from './Screens/Adminaccoun';
import Newadmin from './Screens/Newadmin';
import Admindashboard from './Screens/Admindashboard';
import Checkclient from './Screens/Checkclient';
import Check from './Screens/check';
import Checkclienttel from './Screens/Checkclienttel';
import Checkclientemail from './Screens/Checkclientemail';
import Manage from './Screens/Manage';
import Editphone from './Screens/Editphone';
import Paymentmanage from './Screens/Paymentmanage';
import Adworkout from './Screens/Addworkout';
import Addmealplan from './Screens/Addmealplan';
import PrivacyPolicy from './Screens/Privacypolicy';
import Setupaccount from './Screens/Setupaccount';
import Changepackage from './Screens/Changepackage';
import BarbellShouldertwo from './Screens/BarbellShoulder2';
import Backsquarttwo from './Screens/Backsquattwo';
import Benchpresstwo from './Screens/Benchpresstwo';
import Bcrunchtwo from './Screens/Bcrunchtwo';
import Abstwo from './Screens/Abstwo';
import MealOnetwo from './Screens/Mealonetwo';
import Mealfourt from './Screens/Mealfourtwo';
import MealOnetwotwo from './Screens/Mealtwotwo';
import Mealthreetwo from './Screens/Mealthreetwo';
import Shakeonetwo from './Screens/Shakeonetwo';



const Stack = createNativeStackNavigator();



export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen options={{headerShown: false}} name="SigninScreen" component={SigninScreen}/> 
          <Stack.Screen options={{headerShown: false}} name="SignupScreen" component={SignupScreen}/>
          <Stack.Screen options={{headerShown: false}} name="DashboardusersScreen" component={DashboardusersScreen}/>
          <Stack.Screen options={{headerShown: false}} name="SigninformScreen"  component={SigninformScreen}/>
          <Stack.Screen options={{headerShown: false}} name="Backsquart" component={Backsquart}/>
          <Stack.Screen options={{headerShown: false}} name="Backsquarttwo" component={Backsquarttwo}/>
          <Stack.Screen options={{headerShown: false}} name="TimerScreen" component={TimerScreen}/>
          <Stack.Screen options={{headerShown: false}} name="MealOne" component={MealOne}/>
          <Stack.Screen options={{headerShown: false}} name="MealOnet" component={MealOnetwo}/>
          <Stack.Screen options={{headerShown: false}} name="Packages" component={Packages}/>
          <Stack.Screen options={{headerShown: false}} name="DashboardforGuests" component={DashboardforGuests}/>
          <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile}/>
          <Stack.Screen name="MealPlan" component={MealPlan}/>
          <Stack.Screen name="WorkoutPlan" component={WorkoutPlan}/>
          <Stack.Screen options={{headerShown: false}} name="Absworkout" component={Absworkout}/>
          <Stack.Screen options={{headerShown: false}} name="Abstwo" component={Abstwo}/>
          <Stack.Screen options={{headerShown: false}} name="MealTwo" component={MealTwo}/>
          <Stack.Screen options={{headerShown: false}} name="MealTwotwo" component={MealOnetwotwo}/>
          <Stack.Screen options={{headerShown: false}} name="Mealthree" component={Mealthree}/>
          <Stack.Screen options={{headerShown: false}} name="Mealthreetwo" component={Mealthreetwo}/>
          <Stack.Screen options={{headerShown: false}} name="Mealfour" component={Mealfour}/>
          <Stack.Screen options={{headerShown: false}} name="Mealfourt" component={Mealfourt}/>
          <Stack.Screen options={{headerShown: false}} name="Shakeone" component={Shakeone}/>
          <Stack.Screen options={{headerShown: false}} name="Shakeonetwo" component={Shakeonetwo}/>
          <Stack.Screen options={{headerShown: false}} name="BarbellShoulder" component={BarbellShoulder}/>
          <Stack.Screen options={{headerShown: false}} name="BarbellShouldertwo" component={BarbellShouldertwo}/>
          <Stack.Screen options={{headerShown: false}} name="Benchpress" component={Benchpress}/>
          <Stack.Screen options={{headerShown: false}} name="Benchpresstwo" component={Benchpresstwo}/>
          <Stack.Screen options={{headerShown: false}} name="Bcrunch" component={Bcrunch}/>
          <Stack.Screen options={{headerShown: false}} name="Bcrunchtwo" component={Bcrunchtwo}/>
          <Stack.Screen options={{headerShown: false}} name="Signupsecond" component={Signupsecond}/>
          <Stack.Screen options={{headerShown: false}} name="Secondwe" component={Secondwe}/>
          <Stack.Screen options={{headerShown: false}} name="Admindashboard" component={Admindashboard}/>
          <Stack.Screen  name="Checkclient" component={Checkclient}/>
          <Stack.Screen  name="Check" component={Check}/>
          <Stack.Screen  name="Checkclienttel" component={Checkclienttel}/>
          <Stack.Screen  name="Checkclientemail" component={Checkclientemail}/>
          <Stack.Screen name="Accountdetails" component={Accountdetails}/>
          <Stack.Screen name="Manage" component={Manage}/>          
          <Stack.Screen name='Payment' component={Payment}/>
          <Stack.Screen  name="Adminaccount" component={Adminaccount}/>
          <Stack.Screen  name="Newadmin" component={Newadmin}/>
          <Stack.Screen  name="Editphone" component={Editphone}/>
          <Stack.Screen  name="Manage Payments" component={Paymentmanage}/>
          <Stack.Screen  name="Add Workout" component={Adworkout}/>
          <Stack.Screen  name="Add mealplan" component={Addmealplan}/>
          <Stack.Screen name="Privacy Policy" component={PrivacyPolicy}/>
          <Stack.Screen name='Setup Account' component={Setupaccount}/>
          <Stack.Screen name='ChangePackage' component={Changepackage}/>
          
          

         



          
        </Stack.Navigator>
      </NavigationContainer>
      
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

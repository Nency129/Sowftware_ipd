// import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../Screen/SignUp/SignUpScreen';
import ConfirmEmailScreen from '../Screen/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screen/ForgotpasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../Screen/NewPasswordScreen';
import SignInScreen from '../Screen/signIn/SignInscreen';
import HomeScreen from '../Screen/HomeScreen';
import Form from '../Screen/HomeScreen/Form';
import Scanner from '../../Components/Scanner';
import TimeStamp from '../../Components/TimeStamp';
import CustomButton from '../../Components/CustomButton';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="Newpassword" component={NewPasswordScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Form" component={Form}/>
                <Stack.Screen name="Scanner" component={Scanner}/>
                <Stack.Screen name="TimeStamp" component={TimeStamp}/>
                <Stack.Screen name="Custom" component={CustomButton}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
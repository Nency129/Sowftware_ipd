import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";  
// import client from '../../../api/client';



const SignUpScreen = () => {
    const navigation =useNavigation();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailId, setEmailId] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const user = JSON.stringify({ username: username, email: emailId , password: password, cpassword: passwordRepeat });
        console.log("Hewlloosfdf")

       try{
        // const res =await client.post('/user/signup',{user});
        const config = {
            headers:{
                'Content-Type': 'application/json',
            }
          };
            console.log("Hewlloo")
            const url='http://192.168.43.125:8000/api/user/signup';
            console.log("sending Request to ",url)
            console.log("user is ",{ username: username, email: emailId , password: password, cpassword: passwordRepeat });
            const res =await axios.post(url,{ username: username, email: emailId , password: password, cpassword: passwordRepeat },config).catch((e)=>{
                console.log(e);
            });
            
            // const res =await client.post('/user/signup',user);
            console.log("after post req");
            console.log("user is ",user);
            console.log("Data is ",res.data);
       }
       catch(e) {
        console.log(e.message)
       }
        setUsername("");
        setPassword("");
        setEmailId("");
        setPasswordRepeat("");
    };

    
//     // const onRegisterPressed = () => {
//     //     navigation.navigate('ConfirmEmail');
//     // };

    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn('Read trems and condition carfully');
    }

    const onPrivacyPolicyPressed = () => {
        console.warn('privacy Policy')
    }
    return (
        <View style={styles.root}>
            <Text style={styles.title}>
                Create an account
            </Text>

            <Text style={styles.label}>Username*</Text>
            <CustomInput
                placeholder="Username"
                name="Username"
                value={username}
                // onChangeText={setUsername}
                setValue={setUsername}
            />

            <Text style={styles.emaillabel}>Email*</Text>
            <CustomInput
                placeholder="Email"
                name="EmailId"
                value={emailId}
                setValue={setEmailId}
            />


            <Text style={styles.label}>Password*</Text>
            <CustomInput
                placeholder="Password"
                name="password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <Text style={styles.confirmpasslabel}>Confirm Password</Text>
            <CustomInput
                placeholder=" Confirm Password"
                name="passwordRepeat"
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry={true}
                // setValue={setPasswordRepeat}
            />

            <CustomButton text="Register"  onPress={SubmitHandler}/>  
        
            <Text style={styles.text}>By Registering, you confirm that you accept our
                <Text style={styles.link} onPress={onTermsOfUsePressed}>{' '}Terms of Use{' '}</Text><Text>{' '}and{' '}</Text>
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy </Text>
            </Text>

            <CustomButton text="Sign In with Google"
                onPress={onSignInGoogle}
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
            />

            <CustomButton
                text="Have an account? Sign In"
                onPress={onSignInPress}
                type="TERTIARY"
            />

        </View>

    );
};

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        marginBottom: 10,
    },
    link: {
        color: '#FDB075',
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    label: {
        color: 'gray',
        fontSize: 15,
        marginRight: 275,
        marginTop: 10,
        marginBottom: 2,
    },

    confirmpasslabel: {
        color: 'gray',
        fontSize: 15,
        marginRight: 280,
        marginTop: 10,
        marginBottom: 2,
    },
    emaillabel:{
        color: 'gray',
        fontSize: 15,
        marginRight: 294,
        marginTop: 10,
        marginBottom: 2,
    },
});
export default SignUpScreen;
 {/* onPress={onRegisterPressed} */}
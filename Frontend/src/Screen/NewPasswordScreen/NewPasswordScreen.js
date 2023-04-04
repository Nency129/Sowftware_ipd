import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newpassword, setNewPassword] = useState('');

    const navigation=useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    return (

        <View style={styles.root}>
            <Text style={styles.title}>
                Reset your password
            </Text>

            <Text style={styles.label1}>Code</Text>
            <CustomInput
                placeholder="Code"
                value={code}
                setValue={setCode}
            />
            <Text style={styles.label}>New Password</Text>
            <CustomInput
                placeholder="Enter new password"
                value={newpassword}
                setValue={setNewPassword}
            />

            <CustomButton
                text="Submit"
                onPress={onSubmitPressed}
            />

            <CustomButton
                text="Back to Sign In"
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
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
        marginRight: 270,
        marginTop: 10,
        marginBottom: 2,
    },
    label1: {
        color: 'gray',
        fontSize: 15,
        marginRight: 310,
        marginTop: 10,
        marginBottom: 2,
    },

});

export default NewPasswordScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('Newpassword');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    return (

        <View style={styles.root}>
            <Text style={styles.title}>
                Reset Password
            </Text>

            <Text style={styles.label}>
                Username*
            </Text>

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

            <CustomButton
                text="Send"
                onPress={onSendPressed}
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
        marginVertical: 12,
    },
    label: {
        color: 'gray',
        fontSize: 15,
        marginRight: 275,
        marginTop: 15,
        marginBottom: 2,
    },
});

export default ForgotPasswordScreen;
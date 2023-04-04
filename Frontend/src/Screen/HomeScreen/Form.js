import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Form = () => {

    const navigation = useNavigation();

    const [Name, setName] = useState('');
    const [DOB, setDOB] = useState('');
    const [phone, setPhone] = useState('');    
    const [add, setAdd] = useState('');    
    const [aadhar, setAadhar] = useState(''); 
    const onSavePressed = () => {
        navigation.navigate('Home');
    }   ;


    return (
        <View style={styles.root}>

            <Text style={styles.title}>
                Build Your Profile
                </Text>
            

            <Text style={styles.label}>Name*</Text>
            <CustomInput
                placeholder="Enter your Name:"
                value={Name}
                setValue={setName}
            />

            <Text style={styles.label}>DOB*</Text>
            <CustomInput
                placeholder="e.g. 12/1/2000"
                value={DOB}
                setValue={setDOB}
                secureTextEntry={true}
                type={Date}
            />

            <Text style={styles.addlabel}>Address*</Text>
            <CustomInput
                value={phone}
                setValue={setPhone}
                secureTextEntry={true}
            />

            <Text style={styles.label}>Phone*</Text>
            <CustomInput
                value={add}
                setValue={setAdd}
                secureTextEntry={true}
            />
            
            <Text style={styles.text}>Aadhar Number*</Text>
            <CustomInput
                value={aadhar}
                setValue={setAadhar}
                secureTextEntry={true}
            />

            <CustomButton
                text="Save"
                onPress={onSavePressed}
                
            />
        </View>
    );
};
const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '50%',
        maxWidth: 250,
        maxheight: 150,
        height: '40%',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
      },
    addlabel: {
        color: 'gray',
        fontSize: 15,
        marginRight: 285,
        marginTop: 10,
        marginBottom: 2,
    },
    label: {
        color: 'gray',
        fontSize: 15,
        marginRight: 290,
        marginTop: 10,
        marginBottom: 2,
    },
    text: {
        color: 'gray',
        fontSize: 15,
        marginRight: 280,
        marginTop: 10,
        marginBottom: 2,
    },

});

export default Form;
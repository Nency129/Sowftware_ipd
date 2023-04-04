import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();

    const onProfilePressed = () => {
      navigation.navigate('Form');
   
    };

    const onScanPressed = () => {
      navigation.navigate('Scanner');
   
    };
  return (

    
    <View style={styles.root}>

    <Text style={styles.title}>
       Home Page
    </Text>
    <CustomButton
    text="Create Your Profile"
    onPress={onProfilePressed}
    />
    

    <CustomButton
    text="Scan QR"
    onPress={onScanPressed}
    />
</View>
  );
};
const styles = StyleSheet.create({
  root: {
      alignItems: 'center',
      padding: 20,
  },
text: {
  // marginTop:15,
  color: 'gray',
  marginVertical:20,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#051C60',
  margin: 10,
},
});
export default HomeScreen;
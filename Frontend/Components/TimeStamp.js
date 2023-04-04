import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import CustomButton from './CustomButton';

const TimeStamp = () => {
  const [date, setDate] = useState('');
  const [track, setTrack] = useState('');
  useEffect(() => {}, []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Click to get your Visit History</Text>
      <CustomButton
        title="Click here"
        color="#1eb900"
        //onPressFunction={setData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 30,
    color: '#000000',
    marginBottom: 100,
    marginTop: 50,
  },
});
export default TimeStamp;

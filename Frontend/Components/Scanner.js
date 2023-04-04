import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
const Scanner = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  return (
    <View style={styles.body}>
      <Text></Text>
      <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={styles.text}>
           Scan Your QR Code here
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
           
          </TouchableOpacity>
        }
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
  },
});

export default Scanner;

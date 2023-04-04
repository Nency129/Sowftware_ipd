/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet} from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';
import Scanner from './Components/Scanner';
import TimeStamp from './Components/TimeStamp';
import { SafeAreaView} from 'react-native';
import Navigation from './src/Navigation';

const Drawer = createDrawerNavigator();


const App = () => {
  return (
      <SafeAreaView style={styles.root}>
        <Navigation/>
{/* 
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Qr Scanner"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="#00000090"
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250,
        }}>
        <Drawer.Screen
          name="Qr Scanner"
          component={Scanner}
          options={{
            title: 'Qr Scanner',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="TimeStamp"
          component={TimeStamp}
          options={{
            title: 'TimeStamp',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer> */}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'F9FBFC',
  },
});
export default App;

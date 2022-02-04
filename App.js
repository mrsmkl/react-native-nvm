import './shim.js'
import crypto from 'crypto'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import nvm from '@nevermined-io/nevermined-sdk-js';
import { zeroX, KeyTransfer } from "@nevermined-io/nevermined-sdk-js/dist/node/utils";

import { NativeModules } from 'react-native'
const { RNRandomBytes } = NativeModules

// NativeModules.RNRandomBytes = {}
/*
RNRandomBytes.randomBytes(32, (err, bytes) => {
  // bytes is a base64string
})
*/

export default function App() {
  const keyTransfer = new KeyTransfer()
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{zeroX("12334")}</Text>
      <StatusBar style="auto" />
    </View>
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

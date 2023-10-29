import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Platform,
  Alert,
  Linking,
  TouchableOpacity,
} from 'react-native';
import NfcManager, { NfcEvents, NfcTech } from 'react-native-nfc-manager';
import { Button, Icon, Popover } from '@ui-kitten/components';
import Dialog from "react-native-dialog";
import NfcProxy from './NfcProxy';

export default function HomeScreen({ navigation }) {
  const padding = 40;
  const width = Dimensions.get('window').width - 2 * padding;

  _cleanUp = () => {
    NfcManager.cancelTechnologyRequest().catch(() => 0);
  }

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);

      /*
      // the NFC uid can be found in tag.id
      if (Platform.OS === 'ios') {
        resp = await NfcManager.sendMifareCommandIOS([0x30, 0x00]);
      } else {
        resp = await NfcManager.transceive([0x30, 0x00]);
      }

      console.warn(resp);
      */

      if (tag) {
        navigation.navigate('Profile', { screen: 'Member', params: { tag } });
      }

    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  function dialogReadNfc() {
    console.warn('Ready to scan card');
  }

  function renderNfcButtons() {
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}>
        <Button
          mode="contained"
          onPress={async () => {
            dialogReadNfc();
            readNdef();
            /*
            const tag = await NfcProxy.readTag();
            if (tag) {
              navigation.navigate('Profile', { screen: 'Member', params: { tag } });
            }*/

          }}
          style={{ width }}>
          SCAN CARD
            </Button>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <View style={{ flex: 1, padding }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/nfc-icon.png')}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

          {renderNfcButtons()}

        </View>


      </View>


    </>
  );
}

const styles = StyleSheet.create({
  settingIcon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 20 : 0,
    right: 20,
  },
});

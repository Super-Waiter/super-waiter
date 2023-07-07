import {Alert, Linking, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import {ScannerScreenNavigationProp} from '../../../navigation/types';
import {AppButton} from '../../../components/AppButton';
import {Colors, Utils} from '../../../style';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {LoadingBackdrop} from '../../../components/LoadingBackdrop';

const ScannerScreen = () => {
  const navigation = useNavigation<ScannerScreenNavigationProp>();

  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    const handleCameraPermission = async () => {
      try {
        const cameraPermission = await Camera.getCameraPermissionStatus();

        if (cameraPermission === 'not-determined') {
          await Camera.requestCameraPermission();
        } else if (cameraPermission === 'denied') {
          Alert.alert(
            'Camera permission',
            'Please enable camera access in your settings',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Open settings',
                onPress: () => Linking.openSettings(),
              },
            ],
          );
        } else if (cameraPermission === 'authorized') {
          console.log('authorized');
        } else if (cameraPermission === 'restricted') {
          console.log('restricted');
        } else {
          console.log('unknown');
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleCameraPermission();
  }, [device]);

  const handleGoToWaiter = () => {
    navigation.navigate('Waiter');
  };
  const handleGoToClient = () => {
    navigation.navigate('Client');
  };

  if (device == null) {
    return <LoadingBackdrop />;
  }

  return (
    <SafeAreaView style={styles.main} edges={['top']}>
      <AppHeader
        title="Welcome"
        titleColor={Colors.White}
        backgroundColor={Colors.Primary}
      />

      <View style={styles.cameraView}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      </View>

      <ScrollView>
        <AppButton title="Client" onPress={handleGoToWaiter} />
        <AppButton title="Waiter" onPress={handleGoToClient} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  cameraView: {
    width: Utils.DEVICE_WIDTH * 0.9,
    height: Utils.DEVICE_WIDTH * 0.9,
    margin: Utils.DEVICE_WIDTH * 0.05,
  },
});

export default ScannerScreen;

import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

// navigations
import {useNavigation} from '@react-navigation/native';
import {ScannerScreenNavigationProp} from '../../../../navigation/types';

// styles
import {Colors, Utils} from '../../../../style';

// components
// import {AppHeader} from '../../../components/AppHeader';
import {AppButton} from '../../../../components/AppButton';
import {Spacing} from '../../../../components/Spacing';
import {AppText} from '../../../../components/AppText';

// react-native-camera-kit
import {CameraScreen} from 'react-native-camera-kit';

// icons
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScannerScreen = () => {
  const navigation = useNavigation<ScannerScreenNavigationProp>();

  const [qrcodeValue, setQrcodeValue] = useState<string>('');

  // const handleGoToWaiter = () => {
  //   navigation.navigate('Waiter');
  // };

  const handleGoToClient = () => {
    navigation.navigate('Client');
  };

  const onReadCode = (event: any) => {
    setQrcodeValue(event.nativeEvent.codeStringValue);
  };

  return (
    <SafeAreaView style={styles.main} edges={['top']}>
      <ScrollView>
        {/* <AppHeader
          title="Welcome"
          titleColor={Colors.White}
          backgroundColor={Colors.Primary}
        /> */}

        <View style={styles.scrollView}>
          <Spacing vertical={40} />
          <View style={styles.cameraView}>
            <CameraScreen
              scanBarcode={true}
              onReadCode={onReadCode} // optional
              showFrame={false} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
              laserColor="red" // (default red) optional, color of laser in scanner frame
              frameColor="white" // (default white) optional, color of border of scanner frame
              cameraRatioOverlay={undefined}
              onBottomButtonPressed={() => {}}
              captureButtonImage={undefined}
              cameraFlipImage={undefined}
              hideControls={undefined}
              torchOnImage={undefined}
              torchOffImage={undefined}
              captureButtonImageStyle={{}}
              cameraFlipImageStyle={{}}
              torchImageStyle={{}}
            />
          </View>

          <Spacing vertical={10} />
          {!qrcodeValue && (
            <View style={styles.textView}>
              <AppText
                text="Scan the QR Code from waiter's phone."
                color={Colors.Primary}
                numberOfLines={2}
                textAlign="center"
              />
            </View>
          )}

          {qrcodeValue && (
            <AppButton
              width={Utils.DEVICE_WIDTH * 0.6}
              title="Continue"
              onPress={handleGoToClient}
            />
          )}

          <Spacing vertical={100} />
          <AppButton
            title="Are you waiter?"
            onPress={() => navigation.navigate('Login')}
            isTextButton
            color={Colors.Primary}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
  },
  cameraView: {
    width: Utils.DEVICE_WIDTH * 0.6,
    height: Utils.DEVICE_WIDTH * 0.6,
  },
  textView: {
    width: Utils.DEVICE_WIDTH * 0.6,
    padding: 5,
  },
});

export default ScannerScreen;

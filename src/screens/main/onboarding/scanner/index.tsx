import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
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

// react-native-camera-kit
import {CameraScreen} from 'react-native-camera-kit';
import socket from '../../../../socket';
import {AppText} from '../../../../components/AppText';

// icons
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScannerScreen = () => {
  const navigation = useNavigation<ScannerScreenNavigationProp>();
  const [value, setValue] = useState({
    room: '',
    // firebaseToken: '',
    waiter: '',
    organisation: '',
  });

  const handleGoToClient = () => {
    const data = {
      organisation: '06d3802c-2e77-47ec-be94-6d935c209cda',
      room: 'e314fc2d-bd23-4d45-8d7f-09816a6a1632',
      waiter: '429ab135-2b7f-4b99-9168-8b8c13423f39',
    };

    socket.emit('check-qrCode', data);
  };

  const onReadCode = (event: any) => {
    const qrcodeValue = event.nativeEvent.codeStringValue as string;
    // console.log(qrcodeValue);

    setValue(JSON.parse(qrcodeValue));
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
          {value.room.length === 0 && (
            <View style={styles.textView}>
              <AppText
                text="Scan the QR Code from waiter's phone."
                color={Colors.Primary}
                numberOfLines={2}
                textAlign="center"
              />
            </View>
          )}

          {/* {value.room.length !== 0 && ( */}
          <AppButton
            width={Utils.DEVICE_WIDTH * 0.6}
            title="Continue"
            onPress={handleGoToClient}
          />
          {/* )} */}

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

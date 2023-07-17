import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

// navigations
import {useNavigation} from '@react-navigation/native';
import {SignupWaiterScreenNavigationProp} from '../../../navigation/types';

// styles
import {Colors, Utils} from '../../../style';

// components
// import {AppHeader} from '../../../components/AppHeader';
import {AppButton} from '../../../components/AppButton';
import {Spacing} from '../../../components/Spacing';
import {AppText} from '../../../components/AppText';
import {AppInput} from '../../../components/AppInput';

// icons
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignupWaiterScreen = () => {
  const navigation = useNavigation<SignupWaiterScreenNavigationProp>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

          <AppText
            color={Colors.Primary}
            textAlign="center"
            text={'Sign up'}
            fontWeight="bold"
            fontSize={20}
          />
          <Spacing vertical={10} />

          <AppInput
            value={email}
            onChange={v => setEmail(v)}
            placeholder="Email"
            keyboardType="email-address"
            label="Email"
            width={Utils.DEVICE_WIDTH * 0.7}
          />
          <Spacing vertical={10} />

          <AppInput
            value={password}
            onChange={v => setPassword(v)}
            placeholder="Password"
            secureTextEntry
            label="Password"
            width={Utils.DEVICE_WIDTH * 0.7}
          />
          <Spacing vertical={10} />

          <AppButton
            title="Enter"
            onPress={() => {}}
            textAlign="center"
            width={Utils.DEVICE_WIDTH * 0.5}
          />
          <Spacing vertical={100} />

          <AppButton
            title="Are you client?"
            onPress={() => {
              navigation.navigate('Scanner');
            }}
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
});

export default SignupWaiterScreen;

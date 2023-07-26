import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../../components/AppHeader';
import {AppInput} from '../../../components/AppInput';
import {AppButton} from '../../../components/AppButton';
import {BackIcon} from '../../../components/BackIcon';
import {Colors, Utils} from '../../../style';
import {useNavigation} from '@react-navigation/native';
import {EditProfileScreenNavigationProp} from '../../../navigation/types';
import {Spacing} from '../../../components/Spacing';
import {useAppSelector} from '../../../store/hooks';

import PhoneInput from 'react-native-phone-number-input';
import {Shadowed} from '../../../style/shadow';

export default function EditProfileScreen() {
  const navigation = useNavigation<EditProfileScreenNavigationProp>();
  const waiter = useAppSelector(state => state.currentUser);
  const [newFirstName, setNewFirstName] = useState<string>(waiter.firstName);
  const [newLastName, setNewLastName] = useState<string>(waiter.lastName);
  const [newEmail, setNewEmail] = useState<string>(waiter.email);
  const [newPhone, setNewPhone] = useState<string>(waiter.phone);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const phoneInput = useRef<PhoneInput>(null);
  return (
    <SafeAreaView edges={['top']} style={styles.safeAreaView}>
      <AppHeader
        leftIcon={{
          children: <BackIcon color={Colors.White} />,
          onPress: () => navigation.goBack(),
        }}
        title={'Edit profile'}
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
      />
      <ScrollView>
        <Spacing vertical={Utils.DEVICE_HEIGHT * 0.05} />
        <View style={styles.main}>
          <AppInput
            onChange={e => setNewFirstName(e)}
            placeholder="First name"
            value={newFirstName}
            width={300}
          />
          <Spacing vertical={10} />
          <AppInput
            onChange={e => setNewLastName(e)}
            placeholder="Last name"
            value={newLastName}
            width={300}
          />
          <Spacing vertical={10} />
          <AppInput
            onChange={e => setNewEmail(e)}
            placeholder="Email"
            keyboardType="email-address"
            value={newEmail}
            width={300}
          />
          <Spacing vertical={10} />
          {newEmail !== waiter.email && (
            <>
              <AppInput
                onChange={e => setPassword(e)}
                placeholder="Password"
                value={password}
                width={300}
                keyboardType="visible-password"
              />
              <Spacing vertical={10} />
              <AppInput
                onChange={e => setConfirmPassword(e)}
                placeholder="Confirm Password"
                value={confirmPassword}
                width={300}
                secureTextEntry
              />
              <Spacing vertical={10} />
            </>
          )}
          <PhoneInput
            value={newPhone}
            onChangeText={e => setNewPhone(e)}
            onChangeFormattedText={e => setNewPhone(e)}
            defaultCode="UZ"
            placeholder="Phone number"
            containerStyle={{width: 300, borderRadius: 5, ...Shadowed}}
            defaultValue={newPhone}
            ref={phoneInput}
            layout="first"
            autoFocus
          />
          <Spacing vertical={10} />
          {(newEmail !== waiter.email ||
            newFirstName !== waiter.firstName ||
            newLastName !== waiter.lastName ||
            newPhone !== waiter.phone) && (
            <AppButton onPress={() => {}} title="Save changes" width={300} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
});

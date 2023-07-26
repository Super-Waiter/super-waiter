import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

// navigations
import {useNavigation} from '@react-navigation/native';
import {LoginWaiterScreenNavigationProp} from '../../../../navigation/types';

// styles
import {Colors, Utils} from '../../../../style';

// components
// import {AppHeader} from '../../../components/AppHeader';
import {AppButton} from '../../../../components/AppButton';
import {Spacing} from '../../../../components/Spacing';
import {AppText} from '../../../../components/AppText';
import {AppInput} from '../../../../components/AppInput';

// firebase
import auth from '@react-native-firebase/auth';
import {getUserByEmail} from '../../../../api/user';
import {useAppDispatch} from '../../../../store/hooks';
import {CurrentUserActions} from '../../../../store/features/currentUser';

// icons
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  const navigation = useNavigation<LoginWaiterScreenNavigationProp>();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async res => {
        const currentUser = res.user;

        if (currentUser) {
          const {ok, user} = await getUserByEmail(currentUser.email!);

          if (ok) {
            dispatch(CurrentUserActions.setCurrentUser(user));
            // navigation.navigate('Waiter');
          }
        }
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
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
          <Spacing vertical={Utils.DEVICE_HEIGHT * 0.1} />

          <AppText
            color={Colors.Primary}
            textAlign="center"
            text={'Sign in'}
            fontWeight="bold"
            fontSize={20}
          />
          <Spacing vertical={10} />

          <AppInput
            value={email}
            onChange={v => setEmail(v)}
            placeholder="Email"
            keyboardType="email-address"
            // label="Email"
            width={Utils.DEVICE_WIDTH * 0.9}
          />
          <Spacing vertical={10} />

          <AppInput
            value={password}
            onChange={v => setPassword(v)}
            placeholder="Password"
            secureTextEntry
            // label="Password"
            width={Utils.DEVICE_WIDTH * 0.9}
          />
          <Spacing vertical={10} />

          <AppButton
            title="Enter"
            onPress={handleLogin}
            textAlign="center"
            width={Utils.DEVICE_WIDTH * 0.9}
          />
          <Spacing vertical={20} />

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
    backgroundColor: Colors.Background,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Login;

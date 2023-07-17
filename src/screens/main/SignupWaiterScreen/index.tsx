import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

// navigations
import {useNavigation} from '@react-navigation/native';
import {SignupWaiterScreenNavigationProp} from '../../../navigation/types';

// styles
import {Colors} from '../../../style';

// components
// import {AppHeader} from '../../../components/AppHeader';
import {AppButton} from '../../../components/AppButton';
import {Spacing} from '../../../components/Spacing';

// icons
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignupWaiterScreen = () => {
  const navigation = useNavigation<SignupWaiterScreenNavigationProp>();

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
          {/*  */}

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

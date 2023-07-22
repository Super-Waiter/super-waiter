/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

// components
import {AppText} from '../../../components/AppText';
import {AppHeader} from '../../../components/AppHeader';
import {AppImage} from '../../../components/AppImage';
import {Spacing} from '../../../components/Spacing';

// styles
import {Shadowed, Shadowed2} from '../../../style/shadow';
import {Colors, Utils} from '../../../style';
import {ROLE} from '../../../model';

// hooks
import {useAppSelector} from '../../../store/hooks';

const uri = Image.resolveAssetSource(
  require('../../../../assets/images/waiter.png'),
).uri;

function WaiterProfileScreen() {
  const waiter = useAppSelector(state => state.currentUser);

  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        title={waiter.role === ROLE.ADMIN ? 'Admin' : 'Waiter'}
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
      />
      <Spacing vertical={10} />

      <View style={styles.imgView}>
        <AppImage
          uri={uri}
          customStyle={{
            width: '100%',
            height: '100%',
            borderRadius: 100,
          }}
        />
      </View>
      <Spacing vertical={10} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textView}>
          <AppText fontWeight="bold" text={'First name:'} />
          <AppText text={waiter.firstName} />
        </View>
        <View style={styles.textView}>
          <AppText fontWeight="bold" text={'Last name:'} />
          <AppText text={waiter.lastName} />
        </View>
        <View style={styles.textView}>
          <AppText fontWeight="bold" text={'Emile:'} />
          <AppText text={waiter.email} />
        </View>
        <View style={styles.textView}>
          <AppText fontWeight="bold" text={'Phone:'} />
          <AppText text={waiter.phone} />
        </View>
      </ScrollView>
      <View style={styles.editIconView}>
        <MaterialIcons size={40} color={Colors.Primary} name="edit" />
      </View>
    </SafeAreaView>
  );
}

export default WaiterProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.Background,
    alignItems: 'center',
  },
  imgView: {
    backgroundColor: Colors.Primary,
    height: Utils.DEVICE_WIDTH * 0.4,
    width: Utils.DEVICE_WIDTH * 0.4,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  textView: {
    flexDirection: 'row',
    width: Utils.DEVICE_WIDTH * 0.8,
    gap: 10,
    marginBottom: 10,
    borderColor: Colors.LightGrey,
    borderWidth: 1,
    ...Shadowed,
    padding: 10,
    borderRadius: 5,
  },
  editIconView: {
    position: 'absolute',
    right: Utils.DEVICE_WIDTH * 0.1,
    bottom: Utils.DEVICE_WIDTH * 0.1,
    ...Shadowed2,
  },
});

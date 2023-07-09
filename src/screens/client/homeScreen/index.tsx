import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import {AppHeader} from '../../../components/AppHeader';
import {AppImage} from '../../../components/AppImage';
import {AppText} from '../../../components/AppText';
import {Spacing} from '../../../components/Spacing';

// Styles
import {Colors, Fonts, Utils} from '../../../style';

// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ClientHomeScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
        title="Asosiy Menu"
      />

      <ScrollView style={styles.body}>
        <View style={styles.imageView}>
          <AppImage
            uri={
              Image.resolveAssetSource(
                require('../../../../assets/images/waiter.png'),
              ).uri
            }
            customStyle={styles.img}
          />

          <Spacing horizontal={10} />

          <AppText
            text="Name of Waiter"
            fontSize={Fonts.xl2}
            fontWeight="semibold"
          />
        </View>
        <View style={styles.optionsView}>
          <View style={styles.cardsRowView}>
            <Card
              Icon={
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={82}
                  color={Colors.White}
                />
              }
              title="Call"
            />

            <Spacing vertical={10} />

            <Card
              Icon={
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={82}
                  color={Colors.White}
                />
              }
              title="Chat"
            />
          </View>

          <Spacing horizontal={10} />
          <View style={styles.cardsRowView}>
            <Card
              Icon={
                <Ionicons
                  name="receipt-outline"
                  size={82}
                  color={Colors.White}
                />
              }
              title="Check"
            />

            <Spacing vertical={10} />

            <Card
              Icon={
                <MaterialCommunityIcons
                  name="food"
                  size={82}
                  color={Colors.White}
                />
              }
              title="Menu"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface CardProps {
  title: string;
  Icon: JSX.Element;
}

const Card = ({title, Icon}: CardProps) => {
  return (
    <View style={styles.cardMain}>
      {Icon}

      <AppText
        text={title}
        fontSize={Fonts.xl2}
        color={Colors.White}
        fontWeight="bold"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {},
  imageView: {
    width: 'auto',
    paddingVertical: 30,
    alignItems: 'center',
  },
  optionsView: {
    padding: 10,
  },
  img: {
    height: Utils.DEVICE_WIDTH * 0.35,
    width: Utils.DEVICE_WIDTH * 0.35,
  },
  cardsRowView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardMain: {
    width: Utils.DEVICE_WIDTH * 0.42,
    height: Utils.DEVICE_WIDTH * 0.42,
    backgroundColor: Colors.Primary,
    borderRadius: 8,
    padding: Utils.DEVICE_WIDTH * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClientHomeScreen;

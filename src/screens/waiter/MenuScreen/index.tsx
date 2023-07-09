/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Accordion from 'react-native-collapsible/Accordion';

// style
import {Colors, Shadows} from '../../../style';

// components
import {AppHeader} from '../../../components/AppHeader';
import {AppText} from '../../../components/AppText';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Food} from '../../../model';
import {tempFoodData} from '../../../tempData/foods';
import {AppImage} from '../../../components/AppImage';
import {Spacing} from '../../../components/Spacing';

// sections
type SECTIONS_TYPE = {
  title: string;
  contents: Food[];
};

const SECTIONS: SECTIONS_TYPE[] = [
  {
    title: 'Toamlar',
    contents: tempFoodData,
  },
  {
    title: 'Ichimliklar',
    contents: tempFoodData,
  },
  {
    title: 'Salatlar',
    contents: tempFoodData,
  },
];

const MenuScreen = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);

  const header = (section: SECTIONS_TYPE, isActive: boolean) => {
    return (
      <View style={styles.title}>
        <AppText fontSize={24} fontWeight="regular">
          {section.title}
        </AppText>
        <AntDesign
          name={isActive ? 'down' : 'right'}
          size={25}
          color={Colors.Black}
        />
      </View>
    );
  };

  const content = (section: SECTIONS_TYPE) => {
    return (
      <View style={styles.title}>
        <FlatList
          data={section.contents}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const updateSections = (activeSections: number[]) => {
    setActiveSections(activeSections);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        title="Menu"
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
        rightIcon={{
          children: <EvilIcons name="search" color={Colors.White} size={30} />,
          onPress: () => {},
        }}
      />

      <Accordion
        underlayColor={Colors.White}
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={(section, i, isActive) => header(section, isActive)}
        renderContent={section => content(section)}
        onChange={activeSections => updateSections(activeSections)}
      />
    </SafeAreaView>
  );
};

export default MenuScreen;

interface ItemProps {
  item: Food;
}

const Item = ({item}: ItemProps) => {
  return (
    <View style={styles.item}>
      <AppImage customStyle={styles.img} uri={item.images[0]} />

      <Spacing horizontal={10} />

      <View style={styles.foodInfoView}>
        <AppText fontWeight="semibold" text={item.title} />

        <Spacing vertical={2} />

        <AppText numberOfLines={3} text={item.description} />

        <Spacing vertical={2} />

        <View style={styles.priceView}>
          <AppText fontWeight="semibold" text={`$${item.price}`} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  title: {
    width: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
  },
  item: {
    padding: 5,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: Colors.White,
    marginBottom: 10,
    margin: 2,
    ...Shadows.Shadowed,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  foodInfoView: {
    flexShrink: 1,
  },
});

import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';

// styles
import {Colors, Fonts, Utils} from '../../../style';
import {AppButton} from '../../../components/AppButton';
import {SearchView} from '../../../components/SearchView';
import {Spacing} from '../../../components/Spacing';
import {tempFoodData} from '../../../tempData/foods';
import {AppText} from '../../../components/AppText';
import {Food} from '../../../model';
import {AppImage} from '../../../components/AppImage';

const category = ['Ovqatlar', 'Salatlar', 'Ichimliklar', 'Nonlar'];

export default function ClientMenuScreen() {
  const [searchText, setSearchText] = useState('');

  const handleChange = (v: string) => {
    setSearchText(v);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <Spacing vertical={10} />
      <SearchView value={searchText} onChange={handleChange} />

      <Spacing vertical={10} />
      {/* Category */}
      <FlatList
        horizontal
        style={styles.categoryList}
        contentContainerStyle={styles.tabViewListContent}
        data={category}
        renderItem={item => {
          return (
            <View style={styles.tabView}>
              <AppButton
                isTextButton
                title={item.item}
                width={120}
                height={30}
                color={Colors.Black}
                onPress={() => {}}
              />
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

      <Spacing vertical={10} />
      {/* FoodCard */}
      <FlatList
        data={tempFoodData}
        renderItem={item => <Card item={item.item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

interface CardProps {
  item: Food;
}

const Card = ({item}: CardProps) => {
  return (
    <View style={styles.cardMainVeiw}>
      <AppImage uri={item.images[0]} customStyle={styles.cardImg} />
      <Spacing vertical={5} />
      <View style={styles.infoCardView}>
        <AppText text={item.title} fontSize={Fonts.xl} fontWeight="semibold" />
        <AppText
          text={item.description}
          fontSize={Fonts.sm}
          numberOfLines={4}
        />
        <View style={styles.priceView}>
          <AppText text={`$ ${item.price}`} fontWeight="semibold" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
  },
  body: {},
  searchView: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  categoryList: {},
  tabViewListContent: {},
  tabView: {
    paddingHorizontal: 10,
    height: 30,
  },
  cardMainVeiw: {
    margin: 5,
    width: Utils.DEVICE_WIDTH * 0.42,
    height: Utils.DEVICE_WIDTH * 0.42 * 1.75,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.LightGrey,
  },
  cardImg: {
    width: '100%',
    height: '50%',
  },
  infoCardView: {
    paddingHorizontal: 10,
    flex: 1,
  },
  priceView: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

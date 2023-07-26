import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../style';
import {Spacing} from './Spacing';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export const SearchView = (props: Props) => {
  const {value, onChange} = props;

  return (
    <View style={styles.main}>
      <AntDesign name="search1" size={20} color={Colors.Black} />

      <Spacing horizontal={5} />

      <TextInput
        placeholder="Search..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.LightGrey,
    paddingHorizontal: '5%',
    marginHorizontal: '5%',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
});

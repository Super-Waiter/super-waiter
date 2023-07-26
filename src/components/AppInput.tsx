import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  DimensionValue,
} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {Colors, Fonts, Shadows} from '../style';
import {PhoneMask} from '../utils/regExp';
import InputLabel from './InputLabel';

interface Props {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number;
  isTextArea?: boolean;
  secureTextEntry?: boolean;
  width?: DimensionValue;
}

export const AppInput = ({
  label,
  onChange,
  placeholder = '',
  value,
  keyboardType,
  maxLength,
  isTextArea = false,
  secureTextEntry = false,
  width,
}: Props) => {
  const [val, setVal] = useState('');

  const customInputStyles: StyleProp<TextStyle> = {
    height: isTextArea ? 100 : 45,
    textAlignVertical: isTextArea ? 'top' : 'center',
    // paddingTop: isTextArea ? 10 : 10,
  };

  if (keyboardType === 'phone-pad') {
    return (
      <View style={[styles.container, {width: width}]}>
        {label && <InputLabel label={label} />}
        <MaskInput
          keyboardType={keyboardType}
          style={styles.input}
          value={val}
          onChangeText={(masked, unmasked) => {
            setVal(masked);
            onChange(unmasked);
          }}
          mask={PhoneMask}
          placeholderTextColor={Colors.Grey}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, {width: width}]}>
      {label && <InputLabel label={label} />}

      <TextInput
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        style={[styles.input, customInputStyles]}
        keyboardType={keyboardType}
        value={value}
        onChangeText={v => onChange(v)}
        placeholder={placeholder}
        placeholderTextColor={Colors.Grey}
        multiline={isTextArea}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
  },
  label: {
    fontSize: Fonts.base,
    color: Colors.Primary,
  },
  input: {
    height: 45,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: Colors.White,
    borderWidth: 0.5,
    borderColor: Colors.LightGrey,
    borderRadius: 5,
    fontFamily: Fonts.primaryRegular,

    ...Shadows.Shadowed,
  },
});

import React from 'react';
import {AppText} from './AppText';
import {Spacing} from './Spacing';

interface Props {
  label: string;
}

const InputLabel = (props: Props) => {
  const {label} = props;

  return (
    <>
      <AppText text={label} fontWeight="bold" fontSize={15} />
      <Spacing vertical={2} />
    </>
  );
};

export default InputLabel;

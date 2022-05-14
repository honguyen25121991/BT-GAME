import {Text as RNText, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes/styles';

const Text = ({
  children,
  color = COLORS.white,
  style,
  header,
  bold,
  subText,
  title,
}) => {
  return (
    <RNText
      style={[
        {color},
        style,
        header && styles.header,
        bold && styles.bold,
        subText && styles.subText,
        title && styles.title,
      ]}>
      {children}
    </RNText>
  );
};

export default Text;
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
  },
  title: {
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  subText: {
    opacity: 0.7,
  },
});

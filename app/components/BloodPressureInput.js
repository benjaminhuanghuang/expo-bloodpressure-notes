import PropTypes from 'prop-types';
import React from 'react';
import {
  View, TextInput, TouchableHighlight, Text,
} from 'react-native';
import color from 'color';
import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    color: '$inputText',
    fontSize: 18,
  },
});


const BloodPressureInput = ({
  editable,
  label,
  ...props
}) => {
  // put styles.container into array. component can accept style array
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <Text style={styles.buttonText}>{label}</Text>
      <View style={styles.separator} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

BloodPressureInput.propTypes = {
  label: PropTypes.string,
  editable: PropTypes.bool,
};

export default BloodPressureInput;
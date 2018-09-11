import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, TouchableOpacity, Image, View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles =  EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$white',
    fontSize: 14,
    paddingVertical: 20,
    fontWeight: '300',
  },
});

const SubmitButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

SubmitButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default SubmitButton;
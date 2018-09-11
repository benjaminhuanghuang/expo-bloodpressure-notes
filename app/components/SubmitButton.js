import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, TouchableOpacity, Image, View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    width:200,
    flexDirection: 'row',
    justifyContent: 'center', 
    borderRadius: 5,
    backgroundColor: '$border',
  },
  wrapperEnabled: {
     backgroundColor: '$primaryOrange',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$white',
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: '600',
  },
});

const SubmitButton = ({ text, enabled, onPress }) => {
  let buttonStyle = [styles.wrapper];
  if (enabled)
  {
    buttonStyle.push(styles.wrapperEnabled);
  }
  return(  
  <TouchableOpacity style={styles.container} onPress={() => enabled && onPress()}
    activeOpacity={enabled ? 0.7 : 1}>
    <View style={buttonStyle}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)
};

SubmitButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default SubmitButton;
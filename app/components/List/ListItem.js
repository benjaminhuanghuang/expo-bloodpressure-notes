import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({record}) => {
  console.log(record);
   return (
    <View style={styles.row} key={record.dateTime}>
      <Text style={styles.text}>{record.lowPressure}</Text>
      <Text style={styles.text}>{record.highPressure}</Text>
      {/* <Text style={styles.text}>{record.dateTime}</Text> */}
    </View>
  );
}

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
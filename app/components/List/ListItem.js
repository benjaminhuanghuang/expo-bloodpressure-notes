import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({data}) => {
  return (
    <View style={styles.row} key={data.dateTime}>
      <Text style={styles.cellDateTime}>{data.dateTime}</Text>
      <Text style={styles.cell}>{data.lowPressure}</Text>
      <Text style={styles.cell}>{data.highPressure}</Text>
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
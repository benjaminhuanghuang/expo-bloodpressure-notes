import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import moment from 'moment';

import styles from './styles';

const ListItem = ({data}) => {
  return (
    <View style={styles.row} key={data._id}>
      <Text style={styles.cellDateTime}>{moment(data.createdAt).format("ddd HH:mm")}</Text>
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
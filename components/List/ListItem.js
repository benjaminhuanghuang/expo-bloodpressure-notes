import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import moment from 'moment';

import styles from './styles';

const ListItem = ({data, dateFormat}) => {
  return (
    <View style={styles.row} key={data._id}>
      <Text style={styles.cellDateTime}>{moment(data.createdTime).format(dateFormat)}</Text>
      <Text style={styles.cell}>{data.lowPressure}</Text>
      <Text style={styles.cell}>{data.highPressure}</Text>
    </View>
  );
}

ListItem.propTypes = {
  data: PropTypes.any,
  dateFormat: PropTypes.string,
};

export default ListItem;
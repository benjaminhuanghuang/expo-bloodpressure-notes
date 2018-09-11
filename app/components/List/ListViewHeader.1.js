
import React from 'react';
import { View } from 'react-native';

const ListViewRow = (data) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{data.dateTime}</Text>
      <Text style={styles.text}>{data.lowPressure}</Text>
      <Text style={styles.text}>{data.highPressure}</Text>
    </View>
  );
}


export default ListViewRow;
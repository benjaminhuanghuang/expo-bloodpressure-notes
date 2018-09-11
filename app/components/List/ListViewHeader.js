
import React from 'react';
import { View } from 'react-native';

const ListViewHeader = (headers) => {
  return (
    <View style={styles.row}>
      headers.map((header)=>(<Text style={styles.text}>{header}</Text>));
    </View>
  );
}


export default ListViewHeader;
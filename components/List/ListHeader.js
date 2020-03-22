
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ListHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.cellDateTime}>时间</Text>
      <Text style={styles.cell}>低压</Text>
      <Text style={styles.cell}>高压</Text>
    </View>
  );
}


export default ListHeader;
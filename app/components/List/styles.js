import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '$white',
  },
  header: {
    marginTop: 5,
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '$white',
    borderBottomColor: '$border',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cell: {
    color: '$darkText',
    fontSize: 16,
    flex: 3,
  },
  cellDateTime: {
    color: '$darkText',
    fontSize: 16,
    flex: 4,
  },
  separator: {
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    flex: 1,
  },
  icon: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
  checkIcon: {
    width: 18,
  },
});
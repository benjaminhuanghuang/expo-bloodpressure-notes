import { Platform } from 'react-native';

let url;
// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (__DEV__) {
  if (Platform.OS !== 'ios') {
    url = 'http://10.0.3.2:8964/api';
  } else {
    url = 'http://localhost:8964/api';
  }
}
else {
  url = 'https://bp-records-api.herokuapp.com/api';
}

export default url;
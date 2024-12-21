import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../../lib/Constant';
import {white} from '../../../lib/Color';

export const styles = StyleSheet.create({
  noDataImage: {
    width: windowWidth * 0.8,
    height: '70%',
    marginTop: -windowHeight * 0.1,
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: white,
  },
  noDataText: {
    fontSize: 16,
    fontWeight: '600',
  },
  noDataText1: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {marginHorizontal: 16},
});

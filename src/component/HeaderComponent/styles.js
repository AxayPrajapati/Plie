import {StyleSheet} from 'react-native';
import {black, grey, white} from '../../lib/Color';

export const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 22,
    backgroundColor: white,
  },
  titleText: {
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 32,
    color: black,
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: grey,
  },
});

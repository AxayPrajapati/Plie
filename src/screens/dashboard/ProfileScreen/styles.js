import {StyleSheet} from 'react-native';
import {grey, white} from '../../../lib/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: white,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: grey,
  },
  username: {
    fontSize: 16,
    color: grey,
    marginBottom: 20,
  },
});

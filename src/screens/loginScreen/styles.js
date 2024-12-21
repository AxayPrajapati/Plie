import {Platform, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../lib/Constant';
import {black, grey, white} from '../../lib/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    width: windowWidth,
    height: windowHeight * 0.3,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ccccccd9',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: black,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  inputContainer: {
    marginVertical: 40,
    marginHorizontal: 32,
  },
  input: {
    backgroundColor: white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 10,
    borderRadius: 4,
    height: 32,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  forgotPassword: {
    color: grey,
    textAlign: 'right',
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#21D393',
    paddingHorizontal: 24,
    borderRadius: 4,
    width: windowWidth * 0.25,
    alignItems: 'center',
    paddingVertical: 8,
    alignSelf: 'flex-end',
    marginRight: 32,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 32,
  },
  signUpText: {
    color: black,
    textDecorationLine: 'underline',
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialButton: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  guestText: {
    marginTop: 20,
    color: grey,
    alignSelf: 'flex-end',
    marginRight: 32,
  },
  inputText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#333333',
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: white,
    height: 32,
    borderRadius: 4,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  passwordInput: {
    width: '90%',
    backgroundColor: white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 10,
    borderRadius: 4,
    height: 32,
  },
  eyeIcon: {
    marginLeft: 0,
  },
  iconSize: {
    height: 20,
    width: 20,
    marginRight: 20,
  },
  fbIcon: {
    marginTop: 7,
  },
  logoStyle: {
    height: 52,
    width: 52,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: black,
    width: '80%',
  },
  signInText: {
    backgroundColor: white,
    color: black,
    marginTop: -10,
    paddingHorizontal: 10,
  },
  lineContainer: {width: '100%', alignItems: 'center'},
});

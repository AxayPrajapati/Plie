import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import Images from '../../lib/Image';
import {POST} from '../../apiService/apiServices';
import {useDispatch} from 'react-redux';
import {login} from '../../reduxToolkit/slice/authSlice';
import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const dispatch = useDispatch();

  const validateEmail = emails => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emails);
  };

  const handleLogin = async () => {
    if (email.length > 0 && password.length > 0) {
      if (!validateEmail(email)) {
        Alert.alert('Warning', 'Please Valid Email');
        return;
      }
      try {
        const url = 'login';
        const params = {
          email: email,
          password: password,
        };
        await POST(url, params)
          .then(response => {
            console.log('response >> ' + JSON.stringify(response));
            if (response.status === 200) {
              if (response.data.success === true) {
                dispatch(login({data: response.data.data}));
              } else {
                Alert.alert('Something went wrong', response.data.message);
              }
            }
          })
          .catch(error => {});
      } catch (error) {
        console.log('Err ::', error);
        Alert.alert('Error', error);
      }
    } else {
      Alert.alert('Warning', 'Please Enter Email and Password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Pliē</Text>
        <Image source={Images.logo} style={styles.logoStyle} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          placeholder="email@email.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text style={styles.inputText}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.passwordInput}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Image
              source={isPasswordVisible ? Images.eye : Images.eyeHide}
              style={styles.iconSize}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={handleLogin}
        activeOpacity={0.7}>
        <Text numberOfLines={1} style={styles.signInButtonText}>
          Sign In
        </Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text>Not a member? </Text>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
          <Text style={styles.signUpText}>Sign Up Here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialLoginContainer}>
        <View style={styles.lineContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.signInText}>or Sign In with:</Text>
        </View>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
            <Image source={Images.google} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
            <Image source={Images.apple} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
            <Image source={Images.facebook} style={styles.fbIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
        <Text style={styles.guestText}>Enter as Guest</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

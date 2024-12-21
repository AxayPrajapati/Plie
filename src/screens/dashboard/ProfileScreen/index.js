import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../../reduxToolkit/slice/authSlice';
import {styles} from './styles';

const ProfileScreen = ({navigation}) => {
  const userData = useSelector(state => state.authSlice.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: userData?.usr_profile_img}}
        style={styles.profileImage}
      />
      {userData?.usr_fname && (
        <Text
          style={
            styles.name
          }>{`${userData?.usr_fname} ${userData?.usr_lname}`}</Text>
      )}
      <Text style={styles.email}>{userData?.usr_email}</Text>
      <Text style={styles.username}>{userData?.usr_username}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

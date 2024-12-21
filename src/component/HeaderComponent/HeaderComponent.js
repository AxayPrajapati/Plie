import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const HeaderComponent = props => {
  const {title} = props;
  return (
    <View style={styles.headerView}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.subText}>Are you ready to dance?</Text>
    </View>
  );
};
export default HeaderComponent;

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Images from '../../lib/Image';
import {styles} from './styles';

const ListComponent = props => {
  const {
    title,
    image,
    danceStyles,
    from_date,
    to_date,
    event_price_from,
    event_price_to,
    address,
    isLiked = false,
    onPressLike,
  } = props;

  const formatDate = () => {
    const date = new Date(Date.now());
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: image}} style={styles.eventImage} />
      <View style={styles.detailsContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={Images.arrowRight} />
          </TouchableOpacity>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {from_date} – {to_date ? to_date : formatDate()}
          </Text>
          <Text style={styles.location}>{address}</Text>
        </View>
        <Text style={styles.price}>
          €{event_price_from} – €{event_price_to}
        </Text>
        <View style={styles.mainView}>
          <View style={styles.tagsContainer}>
            {danceStyles?.map(item => {
              return (
                <Text key={item.ds_id} style={styles.tag}>
                  {item.ds_name}
                </Text>
              );
            })}
          </View>
          <View style={styles.actionRow}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={Images.share} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={onPressLike}>
              <Image
                source={isLiked ? Images.like : Images.unlike}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ListComponent;

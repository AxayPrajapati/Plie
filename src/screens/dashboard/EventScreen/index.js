import React, {useEffect} from 'react';
import {View, Alert, FlatList, Image, Text} from 'react-native';
import HeaderComponent from '../../../component/HeaderComponent/HeaderComponent';
import commonStyles from '../../../styles/CommonStyles';
import ListComponent from '../../../component/ListComponent/ListComponent';
import {POST} from '../../../apiService/apiServices';
import {useDispatch, useSelector} from 'react-redux';
import {
  likeEvent,
  storeEvents,
  unlikeEvent,
} from '../../../reduxToolkit/eventsData/eventSlice';
import Images from '../../../lib/Image';
import {styles} from './styles';

const EventScreen = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.eventSlice.eventData);
  const likedEvents = useSelector(state => state.eventSlice.likedEvents);
  const userData = useSelector(state => state.authSlice.userData);

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [events, likedEvents]);

  const fetchEvents = async () => {
    const url = 'events-listing';
    await POST(url, {})
      .then(res => {
        if (res?.data?.success) {
          dispatch(storeEvents(res.data.data));
        }
      })
      .catch(err => {
        Alert.alert('Error' + err);
      });
  };

  const handleLike = event_id => {
    dispatch(likeEvent(event_id));
  };

  const handleUnlike = event_id => {
    dispatch(unlikeEvent(event_id));
  };

  const renderItem = ({item, index}) => {
    const isLiked =
      likedEvents &&
      likedEvents?.some(
        likedEvent => likedEvent?.event_date_id === item?.event_date_id,
      );
    return (
      <ListComponent
        title={item?.event_name}
        image={item?.event_profile_img}
        from_date={item?.readable_from_date}
        to_date={item?.readable_to_date}
        danceStyles={item?.danceStyles}
        event_price_to={item?.event_price_to}
        event_price_from={item?.event_price_from}
        address={item?.city + ' ' + item?.country}
        onPressLike={() => {
          if (isLiked) {
            handleUnlike(item.event_date_id);
          } else {
            handleLike(item.event_date_id);
          }
        }}
        isLiked={isLiked}
      />
    );
  };

  return (
    <View style={commonStyles.container}>
      <HeaderComponent title={'Hello ' + userData?.usr_fname + '!'} />
      {events && events.length > 0 ? (
        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <View style={styles.mainView}>
            <Image
              source={Images.noData}
              style={styles.noDataImage}
              resizeMode="contain"
            />
            <Text style={styles.noDataText}>No Data Found</Text>
            <View style={styles.textView}>
              <Text style={styles.noDataText1}>
                It looks like we haven't any data.
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
export default EventScreen;

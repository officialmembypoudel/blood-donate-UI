import { Dimensions, FlatList, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Avatar, Button, Divider, Icon, Image, Text } from '@rneui/themed';
import OptionsInMoreOptions from '../components/OptionsInMoreOptions';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomModal from '../components/CustomModal';
import { ImageSourcePropType } from 'react-native';
import ScreenHeader from '../components/ScreenHeader';

interface Notification {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  createdAt?: Date;
}

const DummyNotifications: Notification[] = [
  {
    id: '1',
    title: 'Blood Donation event being organized by Lions Club Itahari',
    description:
      'Blood Donation event being organized by Lions Club Itahari. Event Location: Stadium, Itahari, Sunsari',
    image: require('../assets/images/blood-campaign-2.jpg'),
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Blood Donation event being organized by Red Cross Itahari',
    description:
      'Blood Donation event being organized by Red Cross Itahari. Event Location: Stadium, Itahari, Sunsari',
    image: require('../assets/images/red-cross-campaign.png'),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 74),
  },
];

interface NotificationComponentProps extends Notification {
  onPress?: () => void;
}

const NotificationComponent = ({
  notification,
}: {
  notification: NotificationComponentProps;
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={notification.onPress ?? (() => {})}
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 10,
        }}
      >
        <Avatar rounded source={notification.image} size='medium' />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 12, marginBottom: 2 }}>
            {notification.createdAt?.toLocaleTimeString()}
            {' | '}
            {notification.createdAt?.toDateString()}
          </Text>
          <Text style={{ fontSize: 16 }}>{notification.title}</Text>
        </View>
      </TouchableOpacity>
      <Divider style={{ marginVertical: 10 }} color='#1a1a1a' />
    </View>
  );
};

const Notifications = () => {
  const notificationViewRef = useRef<View>(null);
  const navigation = useNavigation();
  const [selectedNotification, setSelectedNotification] =
    useState<Notification | null>(null);
  return (
    <View
      ref={notificationViewRef}
      style={{
        flex: 1,
        padding: 10,
        paddingTop: 100,
      }}
      // contentContainerStyle={{ flex: 1 }}
      // overScrollMode='never'
    >
      <ScreenHeader header='Notifications' onPress={navigation.goBack} />
      <FlatList
        onScroll={() => {
          if (notificationViewRef.current) {
            notificationViewRef.current.setNativeProps({
              style: {
                paddingTop: 70,
              },
            });
          }
        }}
        data={DummyNotifications}
        renderItem={({ item }: { item: Notification }) => (
          <NotificationComponent
            notification={{
              ...item,
              onPress: () => {
                if (selectedNotification === null) {
                  setSelectedNotification(item);
                } else {
                  setSelectedNotification(null);
                }
              },
            }}
          />
        )}
      />

      <CustomModal
        visible={Boolean(selectedNotification)}
        hideCancelButton
        header={
          selectedNotification?.createdAt?.toLocaleTimeString() +
          ' | ' +
          selectedNotification?.createdAt?.toDateString()
        }
        onDone={() => setSelectedNotification(null)}
        doneClickable={Boolean(selectedNotification)}
      >
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image
            style={{
              width: Dimensions.get('window').width - 30,
              height: ((Dimensions.get('window').width - 30) / 16) * 9,
              // backgroundColor: '#f0f0f0',
              resizeMode: 'cover',
              borderRadius: 16,
            }}
            source={selectedNotification?.image}
          />
          <Text
            style={{
              width: '80%',
              fontSize: 19,
              textAlign: 'center',
              marginTop: 20,
              lineHeight: 30,
            }}
          >
            {selectedNotification?.description}
          </Text>
        </View>
      </CustomModal>
    </View>
  );
};

export default Notifications;

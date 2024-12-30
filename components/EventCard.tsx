import {
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Avatar, Card, Text } from '@rneui/themed';
import { Image } from '@rneui/themed/dist/Image';

interface EventCardProps {
  title?: string;
  image?: ImageSourcePropType;
  from?: Date;
  to?: Date;
  venue?: string;
  description?: string;
  fromTime?: string;
  toTime?: string;
  onPress?: () => void;
  activeIndex: number;
}

const EventCard = (props: EventCardProps) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 10,
        padding: 0,
      }}
    >
      <Image
        style={{
          width: Dimensions.get('window').width - 30,
          height: ((Dimensions.get('window').width - 30) / 16) * 9,
          // backgroundColor: '#f0f0f0',
          resizeMode: 'cover',
          borderRadius: 16,
        }}
        source={props?.image}
      />
    </TouchableOpacity>
  );
};

export default EventCard;

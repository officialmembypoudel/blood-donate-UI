import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon, Text } from '@rneui/themed';

interface ScreenHeaderProps {
  onPress: () => void;
  header: string;
  secondaryIcon?: string;
  secondaryIconType?: string;
  onSecondaryIconPress?: () => void;
}

const ScreenHeader = (props: ScreenHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Icon name='arrow-left-top' size={28} type='material-community' />
        <Text h3>{props.header}</Text>
      </TouchableOpacity>
      {props.secondaryIcon && (
        <TouchableOpacity
          onPress={props.onSecondaryIconPress}
          activeOpacity={0.7}
        >
          <Icon
            name={props?.secondaryIcon}
            type={props.secondaryIconType}
            size={36}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ScreenHeader;

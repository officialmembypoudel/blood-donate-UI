import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Divider, Icon, Text } from '@rneui/themed';

interface OptionsInMoreOptionsProps {
  icon: string;
  option: string;
  onPress?: () => void;
  iconType?: string;
}

const OptionsInMoreOptions = (props: OptionsInMoreOptionsProps) => {
  return (
    <TouchableOpacity onPress={props.onPress ?? (() => {})} activeOpacity={0.7}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Icon name={props.icon} type={props.iconType} size={24} />
          <Text style={{ fontSize: 18 }}>{props.option}</Text>
        </View>
        <Icon name='chevron-right' size={28} />
      </View>
      <Divider
        style={{ marginVertical: 10, marginBottom: 20 }}
        color='#1a1a1a'
      />
    </TouchableOpacity>
  );
};

export default OptionsInMoreOptions;

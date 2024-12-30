import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Icon } from '@rneui/themed';

interface CTAButtonProps {
  onPress: () => void;
}

const CTAButton = (props: CTAButtonProps) => {
  return (
    <Button
      onPress={props.onPress}
      color={'error'}
      icon={<Icon name='add' size={40} color={'#fff'} />}
      containerStyle={{
        width: 'auto',
        // height: 100,
        borderRadius: 80,
        position: 'absolute',
        bottom: 50,
        right: 20,
      }}
    />
  );
};

export default CTAButton;

const styles = StyleSheet.create({});

import { View } from 'react-native';
import React from 'react';
import { Button } from '@rneui/themed';
import OptionsInMoreOptions from '../components/OptionsInMoreOptions';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import ScreenHeader from '../components/ScreenHeader';

const MoreOptions = () => {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingTop: 100,
      }}
    >
      <ScreenHeader
        onPress={navigation.goBack}
        header='More Options'
        secondaryIcon='notifications-outline'
        secondaryIconType='ionicon'
        onSecondaryIconPress={() => navigation.navigate('Notifications')}
      />
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{ flex: 1 }}
        overScrollMode='never'
      >
        <View>
          <OptionsInMoreOptions
            icon='medical-outline'
            option='Medical Information'
            iconType='ionicon'
          />
          <OptionsInMoreOptions
            icon='water-plus-outline'
            option='Your Blood Requests'
            iconType='material-community'
          />
          <OptionsInMoreOptions
            icon='location-outline'
            option='Change Response Location'
            iconType='ionicon'
          />
          <OptionsInMoreOptions
            icon='settings-outline'
            option='Settings'
            iconType='ionicon'
          />
        </View>
      </ScrollView>
      <Button
        // color={'#ff000'}
        buttonStyle={{
          borderRadius: 10,
          padding: 14,
          marginTop: 20,
          backgroundColor: '#FF0000',
        }}
        title='Logout'
        containerStyle={{ marginTop: 'auto', marginBottom: 60 }}
      />
    </View>
  );
};

export default MoreOptions;

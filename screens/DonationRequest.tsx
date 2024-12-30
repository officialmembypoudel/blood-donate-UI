import { View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenHeader from '../components/ScreenHeader';
import { BloodRequest } from '../model/bloodRequest';
import { Button, Text } from '@rneui/themed';

interface DonationRequestProps {
  route?: {
    params: {
      request: BloodRequest;
    };
  };
}

const DonationRequest = (props: DonationRequestProps) => {
  const navigation = useNavigation<any>();
  const request = props?.route?.params?.request;
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
        header={request?.bloodGroup + ' Donation Request'}
      />
      <View
        style={{
          borderColor: '#FF0000',
          borderWidth: 1,
          padding: 16,
          borderRadius: 10,
          backgroundColor: '#ffdad9',
        }}
      >
        <Text
          selectable
          style={{ fontWeight: '600', fontSize: 18, marginBottom: 10 }}
        >
          Blood Group: {request?.bloodGroup}
        </Text>
        <Text
          selectable
          style={{ fontWeight: '600', fontSize: 18, marginBottom: 10 }}
        >
          Hospital Name: {request?.hospital}
        </Text>
        <Text
          selectable
          style={{ fontWeight: '600', fontSize: 18, marginBottom: 10 }}
        >
          Hospital Address: {request?.location}
        </Text>
        <Text
          selectable
          style={{ fontWeight: '600', fontSize: 18, marginBottom: 10 }}
        >
          Contact Details: {request?.phone}
        </Text>
        <Text
          selectable
          style={{ fontWeight: '600', fontSize: 18, marginBottom: 10 }}
        >
          Patient's Name: {request?.name}
        </Text>
        <Text
          selectable
          style={{ fontWeight: '600', fontSize: 18, marginBottom: 10 }}
        >
          Patient's Age: {request?.age}
        </Text>
        <Text
          selectable
          style={{ fontWeight: '600', fontSize: 18, marginBottom: 10 }}
        >
          Needed Within: {request?.deadline}
        </Text>
        <Text selectable style={{ fontWeight: '600', fontSize: 18 }}>
          Request Last Modified: {request?.updatedAt}
        </Text>
      </View>
      <View style={{ marginVertical: 'auto' }}>
        <Button
          buttonStyle={{
            borderRadius: 10,
            padding: 14,
            backgroundColor: '#FF0000',
          }}
          title='Accept Request'
          // onPress={() => navigate('Home')}
        />
        <Button
          // color={'#FF0000'}
          type='outline'
          title='Call Requester!'
          buttonStyle={{
            borderRadius: 10,
            padding: 14,
            borderColor: 'green',
          }}
          containerStyle={{ marginVertical: 20 }}
          titleStyle={{ color: 'green' }}
        />
      </View>
    </View>
  );
};

export default DonationRequest;

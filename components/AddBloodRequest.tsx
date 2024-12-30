import { ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomModal from './CustomModal';
import { Button, Input, Text, useTheme } from '@rneui/themed';

interface AddBloodRequestProps {
  visible: boolean;
  onDone?: () => void;
  onDismiss?: () => void;
}

const AddBloodRequest = (props: AddBloodRequestProps) => {
  const bloodGroups: string[] = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ];

  const {
    theme: { colors },
  } = useTheme();

  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('');

  return (
    <CustomModal
      visible={props.visible}
      onDismiss={props.onDismiss}
      header='Add Blood Request'
      // doneClickable={false}
    >
      <View style={{ paddingTop: 20, paddingBottom: 100 }}>
        <View style={{ margin: 10, marginTop: 0 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#1a1a1a' }}>
            Needed Blood Group
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {bloodGroups.map((group, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                style={{
                  padding: 30,
                  margin: 10,
                  marginRight: index === bloodGroups.length - 1 ? 0 : 10,
                  marginLeft: index === 0 ? 0 : 10,
                  borderRadius: 10,
                  backgroundColor:
                    selectedBloodGroup === group ? '#FF0000' : colors.success,
                }}
                onPress={() => setSelectedBloodGroup(group)}
              >
                <Text h3 h3Style={{ color: '#fff' }}>
                  {group}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <Input
          label='Patient Name'
          // containerStyle={{ backgroundColor: 'pink', padding: 0 }}
          inputContainerStyle={{
            borderWidth: 1,
            padding: 5,
            marginTop: 10,
            borderColor: '#1a1a1a',
            borderRadius: 10,
          }}
          labelStyle={{ color: '#1a1a1a' }}
          // errorMessage='Patient Name is required'
        />
        <Input
          label='Phone Number'
          // containerStyle={{ backgroundColor: 'pink', padding: 0 }}
          inputContainerStyle={{
            borderWidth: 1,
            padding: 5,
            marginTop: 10,
            borderColor: '#1a1a1a',
            borderRadius: 10,
          }}
          labelStyle={{ color: '#1a1a1a' }}
          // errorMessage='Hospital Name is required'
          keyboardType='phone-pad'
        />
        <Input
          label='Hospital Name'
          // containerStyle={{ backgroundColor: 'pink', padding: 0 }}
          inputContainerStyle={{
            borderWidth: 1,
            padding: 5,
            marginTop: 10,
            borderColor: '#1a1a1a',
            borderRadius: 10,
          }}
          labelStyle={{ color: '#1a1a1a' }}
          // errorMessage='Hospital Name is required'
        />
        <Input
          label='Hospital Address'
          // containerStyle={{ backgroundColor: 'pink', padding: 0 }}
          inputContainerStyle={{
            borderWidth: 1,
            padding: 5,
            marginTop: 10,
            borderColor: '#1a1a1a',
            borderRadius: 10,
          }}
          labelStyle={{ color: '#1a1a1a' }}
          // errorMessage='Hospital Name is required'
        />
        <Input
          label='Reason'
          // containerStyle={{ backgroundColor: 'pink', padding: 0 }}
          inputContainerStyle={{
            borderWidth: 1,
            padding: 5,
            marginTop: 10,
            borderColor: '#1a1a1a',
            borderRadius: 10,
          }}
          labelStyle={{ color: '#1a1a1a' }}
          // errorMessage='Hospital Name is required'
        />

        <Button
          // color={'#ff000'}
          buttonStyle={{
            borderRadius: 10,
            padding: 14,
            marginTop: 20,
            backgroundColor: '#FF0000',
          }}
          title='Add Request'
          containerStyle={{ margin: 10 }}
        />
        <Button
          // color={'#FF0000'}
          type='outline'
          title='Clear Form'
          buttonStyle={{
            borderRadius: 10,
            padding: 14,
            // marginTop: 20,
            borderColor: '#FF0000',
          }}
          containerStyle={{ margin: 10 }}
          titleStyle={{ color: '#FF0000' }}
        />
      </View>
    </CustomModal>
  );
};

export default AddBloodRequest;

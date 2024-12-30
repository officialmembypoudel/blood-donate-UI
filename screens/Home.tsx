import {
  View,
  SafeAreaView,
  FlatList,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Card, Icon, Text } from '@rneui/themed';
import EventCard from '../components/EventCard';
import CTAButton from '../components/CTAButton';
import CustomModal from '../components/CustomModal';
import AddBloodRequest from '../components/AddBloodRequest';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

const eventImg = require('../assets/images/red-cross-campaign.png');
const eventImg2 = require('../assets/images/blood-campaign-2.jpg');

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showBloodRequestModal, setShowBloodRequestModal] = useState(false);

  const { navigate } = useNavigation<any>();

  const toggleBloodRequestModal = () =>
    setShowBloodRequestModal(!showBloodRequestModal);

  return (
    <View style={{ flex: 1 }}>
      {/* Top welcome area */}
      <View
        style={{
          padding: 10,
          marginTop: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text h4 h4Style={{ fontWeight: '700' }}>
            Welcome, Memby
          </Text>
          <Text style={{ fontWeight: '500', fontSize: 12, marginTop: 5 }}>
            Your Location is set to Itahari
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigate('MoreOptions')}>
          <Icon name='box' type='feather' size={36} />
          {/* <View style={{ position: 'absolute', top: -20, right: 0 }}>
            <Icon name='dot-single' type='entypo' size={50} color={'green'} />
          </View> */}
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[0]}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        nestedScrollEnabled={true}
        renderItem={() => (
          <View>
            {/* Events and Ads */}

            <View style={{}}>
              <FlatList
                nestedScrollEnabled={true}
                style={{ marginTop: 20 }}
                onScroll={(e) => {
                  const index = Math.round(
                    e.nativeEvent.contentOffset.x /
                      e.nativeEvent.layoutMeasurement.width
                  );
                  setActiveIndex(index);
                }}
                data={
                  [{ image: eventImg2 }, { image: eventImg }] as {
                    image: ImageSourcePropType;
                  }[]
                }
                renderItem={({ item }) => (
                  <EventCard activeIndex={activeIndex} image={item.image} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
              {/* Events indicator */}
              <View
                style={{
                  alignSelf: 'center',
                  backgroundColor: 'lightgray',
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 10,
                  marginTop: 5,
                }}
              >
                <Text style={{ fontSize: 8, fontWeight: '700' }}>
                  {activeIndex + 1}/{[0, 1].length}
                </Text>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <FlatList
            data={[0]}
            horizontal
            style={{ flex: 1 }}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            renderItem={() => (
              <View style={{ width: '100%' }}>
                {/* Recent Donation Requests */}
                <View style={{ padding: 20 }}>
                  <Text h4 h4Style={{ fontWeight: '700' }}>
                    Donation Requests Near You
                  </Text>

                  <FlatList
                    nestedScrollEnabled
                    style={{ height: 280 }}
                    data={[
                      {
                        bloodGroup: 'O+',
                        location: 'Dharan',
                        phone: 9845764213,
                        hospital: 'BPKHIS, (Ghopa Camp)',
                      },
                      {
                        bloodGroup: 'B+',
                        location: 'Biratnagar',
                        phone: 9845764213,
                        hospital: 'Nobel Hospital',
                      },
                    ]}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() =>
                          navigate('DonationRequest', { request: item })
                        }
                      >
                        <Card
                          containerStyle={{
                            margin: 0,
                            marginTop: 10,
                            backgroundColor: '#ffdad9',
                            borderRadius: 16,
                            shadowColor: 'transparent',
                            shadowRadius: 0,
                            borderWidth: 0,
                            // borderColor: '#dc3545',
                            height: 130,
                            justifyContent: 'center',
                            padding: 16,
                            // paddingHorizontal: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: '700',
                              fontSize: 36,
                              marginTop: 0,
                              color: '#dc3545',
                            }}
                          >
                            {item.bloodGroup}
                          </Text>
                          <Text
                            style={{
                              fontWeight: '700',
                              fontSize: 16,
                              marginTop: 4,
                              color: '#1a1a1a',
                            }}
                          >
                            {item.hospital}
                          </Text>
                          <Text
                            style={{
                              // fontWeight: '700',
                              fontSize: 14,
                              marginTop: 2,
                              color: '#1a1a1a',
                            }}
                          >
                            {item.phone}
                          </Text>
                          <Text
                            style={{
                              // fontWeight: '700',
                              fontSize: 12,
                              marginTop: 2,
                              color: '#1a1a1a',
                            }}
                          >
                            {item.location}
                          </Text>
                        </Card>
                      </TouchableOpacity>
                    )}
                  />
                </View>
                <View style={{ padding: 20 }}>
                  <Text h4 h4Style={{ fontWeight: '700' }}>
                    All Donation Requests
                  </Text>
                  <FlatList
                    style={{ height: 280 }}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    data={[
                      {
                        bloodGroup: 'A+',
                        location: 'Kathmandu',
                        phone: 9845764213,
                        hospital: 'Bir Hospital',
                      },
                      {
                        bloodGroup: 'B-',
                        location: 'Pokhara',
                        phone: 9842768163,
                        hospital: 'Sunshine Medico',
                      },
                    ]}
                    renderItem={({ item }) => (
                      <Card
                        containerStyle={{
                          margin: 0,
                          marginTop: 10,
                          backgroundColor: '#ffdad9',
                          borderRadius: 16,
                          shadowColor: 'transparent',
                          shadowRadius: 0,
                          borderWidth: 0,
                          // borderColor: '#dc3545',
                          height: 130,
                          justifyContent: 'center',
                          padding: 16,
                          // paddingHorizontal: 10,
                          elevation: 0,
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: '700',
                            fontSize: 36,
                            marginTop: 0,
                            color: '#dc3545',
                          }}
                        >
                          {item.bloodGroup}
                        </Text>
                        <Text
                          style={{
                            fontWeight: '700',
                            fontSize: 16,
                            marginTop: 4,
                            color: '#1a1a1a',
                          }}
                        >
                          {item.hospital}
                        </Text>
                        <Text
                          style={{
                            // fontWeight: '700',
                            fontSize: 14,
                            marginTop: 2,
                            color: '#1a1a1a',
                          }}
                        >
                          {item.phone}
                        </Text>
                        <Text
                          style={{
                            // fontWeight: '700',
                            fontSize: 12,
                            marginTop: 2,
                            color: '#1a1a1a',
                          }}
                        >
                          {item.location}
                        </Text>
                      </Card>
                    )}
                  />
                </View>
              </View>
            )}
          />
        )}
      />

      <CTAButton onPress={toggleBloodRequestModal} />
      <AddBloodRequest
        visible={showBloodRequestModal}
        onDismiss={toggleBloodRequestModal}
      />
    </View>
  );
};

export default Home;

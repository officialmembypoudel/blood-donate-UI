import { Animated, SafeAreaView, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Button, Input, Text } from '@rneui/themed';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { navigate } = useNavigation<any>();

  const position = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Looping the movement and beat animation
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          // Animate both movement and scale in parallel
          Animated.timing(position, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.timing(scale, {
              toValue: 0.8, // Scale up to 120%
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(scale, {
              toValue: 1, // Scale down to original size
              duration: 500,
              useNativeDriver: true,
            }),
          ]),
        ]),
        Animated.parallel([
          Animated.timing(position, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.timing(scale, {
              toValue: 1.2,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(scale, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ]),
        ]),
      ])
    ).start();
  }, [position, scale]);

  const translateX = position.interpolate({
    inputRange: [0, 2],
    outputRange: [150, 0], // Adjust these values to control the movement
  });

  const translateY = position.interpolate({
    inputRange: [0, 4],
    outputRange: [100, 0], // Adjust these values to control the movement
  });

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <View style={{ flex: 1, position: 'relative', padding: 10 }}>
        <Animated.View
          style={{
            backgroundColor: '#FF0000',
            height: 150,
            width: 150,
            borderRadius: 100,
            position: 'absolute',
            transform: [{ translateX }, { translateY }, { scale }],
          }}
        ></Animated.View>
        <BlurView style={{ flex: 1 }}>
          <View style={{ flex: 1, width: '100%' }}>
            <Text
              h3
              h3Style={{
                fontWeight: '600',
                textAlign: 'center',
                // marginBottom: 70,
                marginTop: 'auto',
              }}
            >
              Blood Bank
            </Text>
            <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <Input placeholder='Mobile' />
              <Input placeholder='Password' secureTextEntry />
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  padding: 14,
                  marginTop: 20,
                  backgroundColor: '#FF0000',
                }}
                title='Login'
                onPress={() => navigate('Home')}
              />
              <Button
                // color={'#FF0000'}
                type='outline'
                title='Request Blood Quickly!'
                buttonStyle={{
                  borderRadius: 10,
                  padding: 14,
                  // marginTop: 20,
                  borderColor: '#FF0000',
                }}
                containerStyle={{ marginVertical: 20 }}
                titleStyle={{ color: '#FF0000' }}
              />
            </View>
            <Button containerStyle={{ marginTop: 'auto' }} type='clear'>
              <Text style={{ fontSize: 16 }}>{`Don't have an Account? `}</Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  // borderBottomWidth: 1,
                  // borderColor: '#1a1a1a',
                }}
              >
                Register
              </Text>
            </Button>
          </View>
        </BlurView>
      </View>
    </SafeAreaView>
  );
};

export default Login;

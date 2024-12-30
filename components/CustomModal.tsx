import { Modal, ScrollView, View } from 'react-native';
import React, { useRef } from 'react';
import { Button, Text, useTheme } from '@rneui/themed';
import { BlurView } from 'expo-blur';

interface CustomModalProps {
  children: React.ReactNode;
  visible: boolean;
  header?: string;
  hideDoneButton?: boolean;
  onDone?: () => void;
  onDismiss?: () => void;
  doneButtonLabel?: string;
  doneButtonColor?: string;
  doneButtonIcon?: string;
  doneButtonIconColor?: string;
  doneButtonIconSize?: number;
  doneClickable?: boolean;
  hideCancelButton?: boolean;

  // Add more props here
}

const CustomModal = (props: CustomModalProps) => {
  const {
    theme: { colors },
  } = useTheme();
  const modalViewRef = useRef<View>(null);

  const handleModalSize = (full: boolean) => {
    // Add your code here
    modalViewRef.current?.setNativeProps({
      style: {
        marginTop: full ? 80 : 150,
      },
    });
  };

  return (
    <View>
      <Modal animationType='slide' visible={props.visible} transparent={true}>
        <BlurView intensity={8} style={{ flex: 1 }}>
          <View
            ref={modalViewRef}
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 180,
              backgroundColor: 'white',
              borderTopEndRadius: 20,
              borderTopLeftRadius: 20,
              // paddingTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                backgroundColor: colors.grey5,
                padding: 10,
                borderTopEndRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              {!props.hideCancelButton ? (
                <Button
                  title='Cancel'
                  type='clear'
                  titleStyle={{ fontSize: 15 }}
                  // icon={{
                  //   name: 'chevron-left',
                  //   color: colors.primary,
                  //   size: 30,
                  // }}
                  onPress={props.onDismiss ?? (() => {})}
                />
              ) : null}
              {props.header && (
                <Text style={{ fontSize: 16 }}>{props.header}</Text>
              )}
              <Button
                disabled={!props.doneClickable}
                title='Done'
                type='clear'
                titleStyle={{ fontSize: 15 }}
                onPress={props.onDone ?? (() => {})}
              />
            </View>
            <View
              style={{
                flex: 1,
                // padding: 20,
                // backgroundColor: 'pink',
                width: '100%',
              }}
            >
              <ScrollView
                onScrollBeginDrag={() => handleModalSize(true)}
                // contentContainerStyle={{ padding: 20 }}
              >
                {props.children}
              </ScrollView>
              {/* {props.children} */}
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

export default CustomModal;

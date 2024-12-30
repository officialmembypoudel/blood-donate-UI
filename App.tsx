import './gesture-handler.native';

import { Text, ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import MoreOptions from './screens/MoreOptions';
import StackNavigation from './navigator/StackNavigation';

export default function App() {
  return (
    <ThemeProvider>
      {/* <Login /> */}
      <StatusBar style='auto' />
      <StackNavigation />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

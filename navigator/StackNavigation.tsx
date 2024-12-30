import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MoreOptions from '../screens/MoreOptions';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from '../screens/Notifications';
import DonationRequest from '../screens/DonationRequest';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='MoreOptions' component={MoreOptions} />
        <Stack.Screen name='Notifications' component={Notifications} />
        <Stack.Screen name='DonationRequest' component={DonationRequest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

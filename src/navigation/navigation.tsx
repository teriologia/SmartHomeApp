import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as React from 'react';
import AppIntro from '../screens/appintro/AppIntro';
import {View} from 'react-native';
import Home from '../screens/home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/login/login';
import Register from '../screens/register/Register';
import Details from '../screens/details/Details';
import ItemDetails from '../screens/itemdetails/ItemDetails';
const Stack = createNativeStackNavigator();

interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const [isAppIntroNeed, setIsAppIntroNeed] = React.useState<any>(null);

  const getAppIntroSettings = async () => {
    const isAppIntroNeed = await AsyncStorage.getItem('AppIntro');
    console.warn('isAppIntroNeed', isAppIntroNeed);
    setIsAppIntroNeed(isAppIntroNeed);
    return isAppIntroNeed;
  };
  React.useEffect(() => {
    getAppIntroSettings();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAppIntroNeed == '1' ? 'Home' : 'AppIntro'}
        screenOptions={{header: () => <View />}}>
        <Stack.Screen name="AppIntro" component={AppIntro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

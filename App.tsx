import React from 'react';

import Splash from './src/features/auth/splash/splash_screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/features/auth/signin/signin_screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/features/home/home_screen';
import FavouriteScreen from './src/features/favourite/favourite_screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
    <Tab.Screen name="Favourite" component={FavouriteScreen} />
  </Tab.Navigator>

}
function App(): React.JSX.Element {

  const isSignedIn = false;

  return (
    <NavigationContainer >
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          </>

        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          </>

        )}

      </Stack.Navigator>
    </NavigationContainer>
    // <SignUp />

  );
}

export default App;

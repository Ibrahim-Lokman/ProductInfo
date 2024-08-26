import React from 'react';

import Splash from './src/features/auth/splash/splash_screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/features/auth/signin/signin_screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/features/home/home_screen';
import FavouriteScreen from './src/features/favourite/favourite_screen';
import { styles } from './src/components/button/btn_style';
import { Text, View } from 'react-native';
import { AppColors } from './src/utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return <Tab.Navigator

    screenOptions={({ route }) => ({

      headerShown: true,
      tabBarShowLabel: false,

      tabBarIcon: ({ focused }) => {
        return <View
        >
          <Text
            style={{

              color: focused ? AppColors.primary : 'black',
              textTransform: 'uppercase',
              textDecorationLine: focused ? 'underline' : 'none',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            {route.name}
          </Text>
        </View>;
      }
    })}
  >




    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: true, }} />
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

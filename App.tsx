import React from 'react';

import Splash from './src/features/auth/splash/splash_screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/features/auth/signin/signin_screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={} />
//     <Tab.Screen name="Favourite" component={} />


//   </Tab.Navigator>

// }
function App(): React.JSX.Element {

  const isSignedIn = false;

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SignUp />

  );
}

export default App;

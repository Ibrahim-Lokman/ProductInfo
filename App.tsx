import React from 'react';

import {
  SafeAreaView,
} from 'react-native';
import Splash from './src/features/auth/splash/splash_screen';
import SignUp from './src/features/auth/signup/signup_screen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView >
      {/* <Splash /> */}
      <SignUp />
    </SafeAreaView>
  );
}

export default App;

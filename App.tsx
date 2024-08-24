import React from 'react';

import {
  SafeAreaView,
} from 'react-native';
import Splash from './src/features/auth/splash/splash_screen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView >
      <Splash />
    </SafeAreaView>
  );
}

export default App;

import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Navigation from './src/navigation/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    text: 'Şimdi BlissHome’u deneyin',
    image: require('../../assets/img/blisshomeIcon.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    text: 'Nerede olursanız olun BlissHome ile hayatınızı kolaylaştırın.',
    image: require('../../assets/img/blisshome-2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    text: 'Bağlı cihazlarınızın size sunduğu her şeyi keşfedin.',
    image: require('../../assets/img/blisshome-3.png'),
    backgroundColor: '#22bcb5',
  },
];

const AppIntro = ({route, navigation}: any) => {
  React.useEffect(() => {
    const getAppIntroSettings = async () => {
      const isAppIntroNeed = await AsyncStorage.getItem('AppIntro');
      if (isAppIntroNeed == '1') {
        navigation.navigate('Login');
      }
      return isAppIntroNeed;
    };
    getAppIntroSettings();
  }, []);
  const _renderItem = ({item}) => {
    return (
      <View style={styles.introItem}>
        <Image source={item.image} />
        <Text style={styles.introText}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        alwaysBounceHorizontal
        bottomButton
        doneLabel="Tamamla"
        nextLabel="Sonraki"
        onDone={async () => {
          AsyncStorage.setItem('AppIntro', '1');
          navigation.navigate('Home');
          console.log('test');
        }}
      />
    </View>
  );
};

export default AppIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ACB1B7',
  },
  introItem: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    flexWrap: 'nowrap',
    width: '100%',
    textAlign: 'center',
    paddingTop: 30,
  },
});

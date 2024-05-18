import {Icon, Slider, Switch} from '@rneui/base';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

interface ItemDetailsProps {}

const ItemDetails = (props: ItemDetailsProps) => {
  const [value, setValue] = React.useState(true);
  const [deg, setDeg] = React.useState(23);
  const [speed, setSpeed] = React.useState(5);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon type="font-awesome-5" name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Klima</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.info}>
          <Text>Oda Sıcaklığı 24c</Text>
          <Switch
            color={value ? '#39FF14' : '#d1d1d1'}
            value={value}
            onChange={() => setValue(!value)}
          />
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/img/klimaBuyuk.png')}
          />
          <View style={styles.settingsContainer}>
            <TouchableOpacity
              onPress={() => setDeg(deg - 1)}
              style={styles.settingsButton}>
              <Text style={styles.settingsButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.degText}>{deg}°</Text>
            <TouchableOpacity
              onPress={() => setDeg(deg + 1)}
              style={styles.settingsButton}>
              <Text style={styles.settingsButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.fanspeedText}>Fan Hızı</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.speed}>{speed}</Text>
          <Slider
            value={speed}
            onValueChange={value => setSpeed(value)}
            minimumValue={1}
            maximumValue={10}
            step={1}
            allowTouchTrack
            thumbStyle={{...styles.settingsButton, width: 20, height: 20}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    color: '#674854',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  info: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: 200,
  },
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  settingsButton: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  settingsButtonText: {
    color: '#674854',
    fontSize: 35,
    textAlign: 'center',
    padding: 0,
  },
  degText: {
    color: '#674854',
    fontSize: 40,
  },
  fanspeedText: {
    color: '#674854',
    fontWeight: '500',
    fontSize: 18,
    paddingTop: 15,
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  speed: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 24,
    color: '#674854',
  },
});

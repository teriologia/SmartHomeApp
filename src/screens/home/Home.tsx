import {Card, Image} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import RoomCard from '../../components/card/RoomCard';
import ItemCard from '../../components/itemCard/ItemCard';
import {useBearStore} from '../../store/selectedRoom';

const Rooms = [
  {
    name: 'Oturma Odası',
    items: [
      {
        name: 'Klima',
        room: 'Oturma Odası',
        image: require('../../assets/img/klima.png'),
      },
      {
        name: 'Klima',
        room: 'Oturma Odası',
        image: require('../../assets/img/klima.png'),
      },
      {
        name: 'Klima',
        room: 'Oturma Odası',
        image: require('../../assets/img/klima.png'),
      },
      {
        name: 'Klima',
        room: 'Oturma Odası',
        image: require('../../assets/img/klima.png'),
      },
    ],
    image: require('../../assets/img/oturma.png'),
  },
  {
    name: 'Mutfak',
    items: [
      {
        name: 'Fırın',
        room: 'Mutfak',
        image: require('../../assets/img/firin.png'),
      },
      {
        name: 'Bulaşık Makinesi',
        room: 'Mutfak',
        image: require('../../assets/img/bulasik.png'),
      },
    ],
    image: require('../../assets/img/mutfak.png'),
  },
  {
    name: 'Banyo',
    items: 2,
    image: require('../../assets/img/banyo.png'),
  },
  {
    name: 'Yatak Odası',
    items: [
      {
        name: 'Klima',
        room: 'Oturma Odası',
        image: require('../../assets/img/klima.png'),
      },
    ],
    image: require('../../assets/img/oturma.png'),
  },
];

const activeItems = [
  {
    name: 'Klima',
    room: 'Oturma Odası',
    image: require('../../assets/img/klima.png'),
  },
  {
    name: 'Fırın',
    room: 'Mutfak',
    image: require('../../assets/img/firin.png'),
  },
  {
    name: 'Bulaşık Makinesi',
    room: 'Mutfak',
    image: require('../../assets/img/bulasik.png'),
  },
];

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <Text style={styles.Title}>Evim</Text>
      <View style={styles.roomsContainer}>
        <Text style={styles.roomsText}>Odalar</Text>
        <ScrollView
          horizontal
          decelerationRate={0}
          showsHorizontalScrollIndicator={false}>
          {Rooms.map(el => (
            <RoomCard
              onPress={() => {
                useBearStore.setState({image: el.image, items: el.items});
                props.navigation.navigate('Details');
              }}
              image={el.image}
              item={el.items.length ? el.items.length : 1}
              text={el.name}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.activeItemsContainer}>
        <Text style={styles.roomsText}>Aktif Cihazlar</Text>
        <ScrollView
          horizontal
          decelerationRate={0}
          showsHorizontalScrollIndicator={false}>
          {activeItems.map(el => (
            <ItemCard
              onPress={() => props.navigation.navigate('ItemDetails')}
              image={el.image}
              room={el.room}
              text={el.name}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 10,
    backgroundColor: '#ACB1B7',
  },
  Title: {
    color: '#674854',
    fontWeight: 'bold',
    fontSize: 22,
  },
  roomsContainer: {
    marginTop: 10,
  },
  roomsText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginBottom: 4,
  },
  activeItemsContainer: {
    paddingTop: 45,
  },
});

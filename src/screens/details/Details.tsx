import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useBearStore} from '../../store/selectedRoom';
import {Icon} from '@rneui/base';
import ItemCard from '../../components/itemCard/ItemCard';

const activeItems = [
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
];

interface DetailsProps {}

const Details = (props: DetailsProps) => {
  const image = useBearStore.getState().image;
  const items = useBearStore.getState().items;
  const itemsToRender = items;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon type="font-awesome-5" name="arrow-left" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Oturma Odası</Text>
      </View>
      <Image style={styles.image} source={image} />
      <ScrollView contentContainerStyle={styles.content}>
        {itemsToRender.length > 0 ? (
          itemsToRender.map(el => (
            <ItemCard
              onPress={() => {
                props.navigation.navigate('ItemDetails');
              }}
              image={el.image}
              room={el.room}
              text={el.name}
            />
          ))
        ) : (
          <View />
        )}
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  image: {
    width: '110%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'stretch',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  titleText: {
    color: '#674854',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 20,
    gap: 15,
  },
});

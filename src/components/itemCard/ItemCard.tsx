import {Icon} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface ItemCardProps {
  image: any;
  text: string;
  room: string;
  onPress: () => void;
}

const ItemCard = (props: ItemCardProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.text}</Text>
        <Icon type="font-awesome-5" name="wifi" size={18} />
      </View>
      <Text style={styles.roomText}>{props.room}</Text>
      <Image source={props.image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginRight: 20,
    padding: 10,
    height: 120,
    width: 160,
    borderRadius: 10,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
  },
  roomText: {
    fontSize: 13,
  },
  image: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});

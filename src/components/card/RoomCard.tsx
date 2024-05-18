import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface RoomCardProps {
  image: any;
  text: string;
  item: number;
  onPress: () => void;
}

const RoomCard = (props: RoomCardProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={{...styles.text, fontSize: 13}}>{props.item} Cihaz</Text>
      <Image source={props.image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    borderRadius: 20,
    width: 150,
    height: 300,
    padding: 10,
    justifyContent: 'flex-end',
  },
  image: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'stretch',
    width: 150,
    height: 300,
    borderRadius: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'black',
    textShadowColor: 'black',
    textShadowRadius: 3,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

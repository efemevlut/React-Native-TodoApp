import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const TodoItem = ({pressHandler, item}) => {

  

  return (
    <View>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <Image source={require('../asset/delete.png')} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  itemText: {
    marginLeft: 10,
    textAlignVertical: 'center',
  },
  itemTextUnderline: {
    textDecorationLine: "line-through",
  }
});

export default TodoItem;

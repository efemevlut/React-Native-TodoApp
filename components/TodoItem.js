import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const TodoItem = ({pressHandler, item}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Image source={require("../asset/delete.png")} style={styles.img}/>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: "stretch", 
  },
  itemText: {
    marginLeft: 10,
    textAlignVertical: "center",
  }
});

export default TodoItem;

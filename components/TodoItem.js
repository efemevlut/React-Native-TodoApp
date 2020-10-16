import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const TodoItem = ({pressHandler, item}) => {
    return(
        <TouchableOpacity onPress= {() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "black",
        borderRadius: 10,
    }
})

export default TodoItem;
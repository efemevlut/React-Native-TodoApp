import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native'


const AddTodo = ({submitHandler}) => {

    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    };

    const pressHandler = () => {
        submitHandler(text);
        setText("");
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={() => pressHandler(text)} title="add todo" color="coral"/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingBottom: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        color: "black"
    }
})

export default AddTodo;
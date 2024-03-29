import React from "react";
import { View , Text, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { NEWTODO } from '../redux/slices/todoslice'
import { useDispatch } from "react-redux";
import Ionicons from '@expo/vector-icons/Ionicons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { SCROLL_TO_BOTTOM } from "../redux/slices/scrooltobot"

const Addtodo = () => {

    const dispatch = useDispatch();

    return (
        <View style={styles.Mainview}>
            <TouchableOpacity onPress={() => {
                dispatch(NEWTODO({id : uuidv4() , text : "Double Click To Edit !"}))
                dispatch(SCROLL_TO_BOTTOM("NO_PAYLOAD"));
            }}>
                <View>
                    <Ionicons name="add" size={32} color="#5B8FB9" />
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    Mainview : {
        
    },
    Buttonstyle : {
        width : 25,
        borderWidth : 2,
        borderColor : 'grey',
        margin : 0,
        padding : 0,
        
        
    },
    plustext : {
        fontSize : 15,
        textAlign : 'center',
        marginBottom : 1,
        padding : 0,
    }

})


export default Addtodo;
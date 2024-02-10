import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { DELETETODO , UPDATE_AND_SAVE_TO_DO} from "../redux/slices/todoslice";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";


   


const ListTodos = () => {
  const [Editable, SetEditable] = useState([]);
  const List = useSelector((state) => state.ToDoSlide);

  const dispatch = useDispatch();

  const HandleDeleteToDo = (key) => {
    dispatch(DELETETODO(key));
      // Filter out the object with the specified key from the Editable array
  const updatedEditable = Editable.filter(item => item.id !== key);
  
      // Update the Editable state with the filtered array
  SetEditable(updatedEditable);
  };

  const HandleTheEdit = (key, text, mode) => {
    if (mode === "change"){
       // Update the InputValue of the object with the specified key
      const updatedEditable = Editable.map(item => item.id === key ? { ...item, InputValue: text } : item);
      SetEditable(updatedEditable);
      console.log(Editable)
    } else if ( mode === "register") {
      // Add a new object to editable array
      SetEditable([...Editable, { id: key, InputValue: text }]);
    } else {

    }
  };

  const [InputValues,SetInputValues] = useState([])


  const HandleInpuChange = (key,InputValue) => {
    SetInputValues(PrevState => {

    })
  }

  const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NXNzz7f0PX5qwMsCmrWG4neEBmfyYl6aXA&usqp=CAU",
  };

  return (
    <View>
      <ScrollView>
        {List.map((item) => {
          const editableItem = Editable.find(editable => editable.id === item.id);
          const renderEditable = editableItem ? (
            <React.Fragment key={item.id}>
              <View style={styles.MainListItem}>
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.image}
                >
                  <TouchableOpacity style={styles.ListText}>
                    <View>
                      <TextInput style={styles.ActualTodo} onChangeText={text => HandleTheEdit(item.id, text, "change")}>
                        {item.text}
                      </TextInput>
                    </View>
                  </TouchableOpacity>
  
                  <View style={styles.checkboxstyle}>
                    <TouchableOpacity onPress={() => { 
                      HandleTheEdit(
                        item.id,
                        Editable.find(element => element.id === item.id),
                        "save"
                        )}}>
                      <Ionicons name="checkbox" size={32} color="#87c61f" />
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.trashstyle}>
                    <TouchableOpacity onPress={() => HandleDeleteToDo(item.id)}>
                      <Ionicons name="trash" size={32} color="#FF8080" />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </React.Fragment>
          ) : (
            <React.Fragment key={item.id}>
              <View style={styles.MainListItem}>
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.image}
                >
                  <TouchableOpacity
                    style={styles.ListText}
                    onPress={() => HandleTheEdit(item.id, item.text, "register")}
                  >
                    <View>
                      <Text style={styles.ActualTodo}>{item.text}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.checkboxstyle}>
                    <TouchableOpacity onPress={() => HandleDeleteToDo(item.id)}>
                      <Ionicons
                        name="checkbox-outline"
                        size={32}
                        color="#87c61f"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.trashstyle}>
                    <TouchableOpacity onPress={() => HandleDeleteToDo(item.id)}>
                      <Ionicons name="trash" size={32} color="#FF8080" />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </React.Fragment>
          );
          return renderEditable;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainListItem: {
    borderWidth: 2,
    height: 40,
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    flex: 1,
    flexDirection: "row",
  },

  ListText: {
    flex: 1,
    justifyContent: "center", // Align children vertically
  },
  ActualTodo: {
    color: "white",
    marginLeft: 10,
  },
  checkboxstyle: {
    marginLeft: 15,
    marginRight: 15,
  },
  trashstyle: {
    marginRight: 15,
  },
  image: {
    flex: 1,
    flexDirection: "row",
  },
});

export default ListTodos;


import React, { useEffect } from "react";
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
// https://github.com/expo/vector-icons/blob/master/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json ( Iconiicons json repo )
import { useState, useRef } from "react";
import { resetScrollToBottom } from '../redux/slices/scrooltobot'

   


const ListTodos = () => {
  const [Editable, SetEditable] = useState([]);
  const List = useSelector((state) => state.ToDoSlide);
  const BotoomScrool = useSelector((state) => state.ScroolToBottom)
  const dispatch = useDispatch();
  const BottomScroolRef = useRef(null)

  useEffect(() => {
    if (BottomScroolRef) {
      scrollToBottom();
    }
  }, [BotoomScrool])

  
  const scrollToBottom = () => {
    if (BottomScroolRef.current) {
      BottomScroolRef.current.scrollToEnd({ animated: true });
      dispatch(resetScrollToBottom("Lets do it"))
    }
  };

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
    } else if ( mode === "register") {
      // Add a new object to editable array
      SetEditable([...Editable, { id: key, InputValue: text }]);
    } else {
      dispatch(UPDATE_AND_SAVE_TO_DO({key, text}))
      const updatedEditable = Editable.filter(item => item.id !== key);
      SetEditable(updatedEditable);

    }
  };

  const [InputValues,SetInputValues] = useState([])


  const HandleInpuChange = (key,InputValue) => {
    SetInputValues(PrevState => {

    })
  }

  const image = {
    uri: "/",
  };

  return (
    <View>
      <ScrollView ref={BottomScroolRef} >
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
                        Editable.find(element => element.id === item.id).InputValue,
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
    borderWidth: 0.7,
    borderColor : '#5B8FB9',
    borderRadius : 5,
    
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
    color: "#B6EADA",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
    marginLeft: 10,
  },
  checkboxstyle: {
    alignContent : 'center',
    justifyContent : 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  trashstyle: {
    marginRight: 15,
    alignItems : 'center',
    justifyContent : 'center'
  },
  image: {
    flex: 1,
    flexDirection: "row",
  },
  TheTextContainer : {
    overflow : 'visible'
  }
});

export default ListTodos;


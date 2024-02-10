import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Addtodo from "./Components/AddToDo";
import { Provider } from "react-redux";
import { ReduxStore } from "./redux/store";
import ListTodos from "./Components/ListOfToDos";


export default function App() {
  return (
    <Provider store={ReduxStore}>
      <View style={styles.MainContainer}>
        <View style={styles.MainNavBar}>
          <Text style={styles.TaskStyle}>Tasks</Text>
          <Addtodo />
        </View>
        <View style={styles.Listtodosstyle}>
          <ListTodos />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor : 'black'
  },
  MainNavBar: {
    backgroundColor : '#03001C',
    flex: 0.12,
    flexDirection: "row", 
    borderBottomWidth: 2,
    borderBottomColor : '#5B8FB9',
    alignItems: "flex-end",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  TaskStyle: {
    fontSize: 19,
    marginLeft: 15,
    marginRight: 190,
    color : '#5B8FB9'
  },
  Listtodosstyle : {
    flex : 0.89,
    backgroundColor : 'black'
  },
});

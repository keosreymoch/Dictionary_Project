import React,{useState} from 'react';
import {StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';


export default function App() {
  const[todo, setTodo]=useState([
    {text: 'buy coffee', id:'1'},
    {text: 'create an app', id: '2'},
    {text: 'play on the swich', id: '3'},
  ]);
  const pressHandler=(key)=>{
    setTodos
  }
  
  return (
    <View style={styles.container}>
     <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
          data={todo}
          renderItem={({item}) => (
            <TodoItem item={item}/>
          )}
          
          />
        </View>
      
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  

});
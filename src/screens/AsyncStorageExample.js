import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    loadTasks();
  }, []);

  const storeTask = async (newTasks) => {
    try {
      const jsonValue = JSON.stringify(newTasks);
      await AsyncStorage.setItem('@tasks', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const loadTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@tasks');
      if (jsonValue != null) {
        setTasks(JSON.parse(jsonValue));
      }
    } catch (e) {
      // error reading value
    }
  };

  const addTask = () => {
    const newTasks = [...tasks, { key: task }];
    setTasks(newTasks);
    storeTask(newTasks);
    setTask('');
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@tasks');

    await  AsyncStorage.clear();
    // console.log('test')

    } catch(e) {
      console.log(e)
    }
  }
  
  return (
    <View>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Enter Task"
      />
      <Button title="Add Task" onPress={addTask} />
      <Button title="Clear Task" onPress={removeData} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

export default AsyncStorageExample;

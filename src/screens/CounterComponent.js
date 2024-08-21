// CounterComponent.js
import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, Page } from '../redux/counterActions';
import { View, Text, Button,TextInput } from 'react-native';

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.counter.page);

  const [task, setTask] = useState('');

  const addTask = (val) => {
    setTask(val)
  };

  useEffect(() => {

  }, [])

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button onPress={() => dispatch(increment())} title="Increment" />
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
      <Button onPress={() =>addTask('abc')} title="Page" />

      <TextInput
        value={task}
        onChangeText={(val)=>{
          addTask(val)
        }}
        placeholder="Enter Task"
      />
    </View>
  );
};

export default CounterComponent;



///

// // CounterComponent.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement } from '../redux/counterActions';
// import { View, Text, Button } from 'react-native';

// const CounterComponent = ({ count, increment, decrement }) => (
//   <View>
//     <Text>Count: {count}</Text>
//     <Button onPress={increment} title="Increment" />
//     <Button onPress={decrement} title="Decrement" />
//   </View>
// );

// const mapStateToProps = (state) => ({
//   count: state.counter.count,
// });

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

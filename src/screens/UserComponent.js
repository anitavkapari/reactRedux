// UserComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import { setName, setAge } from './actions/userActions';

const UserComponent = ({ name, age, setName, setAge }) => {
  return (
    <View>
      <Text>User Name: {name}</Text>
      <Text>User Age: {age}</Text>
      
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Enter Age"
        value={String(age)}
        onChangeText={(text) => setAge(Number(text))}
        keyboardType="numeric"
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  age: state.user.age,
});

const mapDispatchToProps = {
  setName,
  setAge,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);


//using connect

/*
// UserComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import { setName, setAge } from './actions/userActions';

const UserComponent = () => {
  const name = useSelector((state) => state.user.name);
  const age = useSelector((state) => state.user.age);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>User Name: {name}</Text>
      <Text>User Age: {age}</Text>
      
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={(text) => dispatch(setName(text))}
      />
      <TextInput
        placeholder="Enter Age"
        value={String(age)}
        onChangeText={(text) => dispatch(setAge(Number(text)))}
        keyboardType="numeric"
      />
    </View>
  );
};

export default UserComponent;

*/
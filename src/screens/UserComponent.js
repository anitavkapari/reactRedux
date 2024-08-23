// UserComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import { setName, setAge,setSalary } from '../redux/userAction';

const UserComponent = ({ name, age, salary, setName, setAge,setSalary }) => {
  return (
    <View>
      <Text>User Name: {name}</Text>
      <Text>User Age: {age}</Text>
      <Text>User Salary: {salary}</Text>

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
            <TextInput
        placeholder="Enter salary"
        value={String(salary)}
        onChangeText={(text) => setSalary(Number(text))}
        keyboardType="numeric"
      />
            <Button onPress={() => setAge(Number(50))} title="Age" />

    </View>
  );
};

const mapStateToProps = (state) => ({
  name: state.userdetails.name,
  age: state.userdetails.age,
  salary: state.userdetails.salary,

});

const mapDispatchToProps = {
  setName,
  setAge,
  setSalary
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);




// UserComponent.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { View, Text, Button, TextInput } from 'react-native';
// import { setName, setAge } from '../redux/userAction';

// const UserComponent = () => {
//   const name = useSelector((state) => state.userdetails.name);
//   const age = useSelector((state) => state.userdetails.age);
//   const dispatch = useDispatch();

//   return (
//     <View>
//       <Text>User Name: {name}</Text>
//       <Text>User Age: {age}</Text>
      
//       <TextInput
//         placeholder="Enter Name"
//         value={name}
//         onChangeText={(text) => dispatch(setName(text))}
//       />
//       <TextInput
//         placeholder="Enter Age"
//         value={String(age)}
//         onChangeText={(text) => dispatch(setAge(text))}
//         keyboardType="numeric"
//       />
//     </View>
//   );
// };

// export default UserComponent;


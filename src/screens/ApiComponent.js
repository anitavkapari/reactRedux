// ApiComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { fetchData } from '../redux/root/apiActions';

const ApiComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      {data ? data.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )) : <Text>No data available</Text>}
    </View>
  );
};

export default ApiComponent;



// // using saga
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { View, Text, Button, ActivityIndicator } from 'react-native';
// import { fetchDataRequest } from './actions/apiActions';

// const ApiComponent = () => {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.api);

//   useEffect(() => {
//     dispatch(fetchDataRequest());
//   }, [dispatch]);

//   if (loading) {
//     return <ActivityIndicator />;
//   }

//   if (error) {
//     return <Text>Error: {error}</Text>;
//   }

//   return (
//     <View>
//       {data ? data.map((item) => (
//         <View key={item.id}>
//           <Text>{item.title}</Text>
//           <Text>{item.body}</Text>
//         </View>
//       )) : <Text>No data available</Text>}
//     </View>
//   );
// };

// export default ApiComponent;

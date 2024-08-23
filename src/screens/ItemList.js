// components/ItemList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure }
 from '../redux/itemAction';
 import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

const ItemList = ({ items, loading, error, fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure }) => {
  useEffect(() => {
    const fetchData = async () => {

      fetchItemsRequest();

      try {

        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        // console.log('response',response.data);
        fetchItemsSuccess(response.data);
      } catch (error) {
        fetchItemsFailure(error.message);
      }
    };

    fetchData();
  }, [fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure]);

//   console.log('items',items);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  return (
    <View>
        
      {items?.map(item => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  items: state.items.items,
  loading: state.items.loading,
  error: state.items.error
});

const mapDispatchToProps = {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

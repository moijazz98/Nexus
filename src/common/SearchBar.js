import {StyleSheet, View,Sear} from 'react-native';
import {Card, Text, Searchbar} from 'react-native-paper';
import React, {useState} from 'react';

export default function SearchBar(props) {
  const {handleSearch, value} = props;
  return (
    <View>
      {/* <Searchbar
        placeholder="Search"
        onChangeText={text => {
          handleSearch(text);
        }}
        value={value}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({});

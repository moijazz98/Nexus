import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 16, alignItems: 'center', height: '15%'}}>
        <Image
          source={require('../assests/Nexus.png')}
          resizeMode="contain"
          style={{height: '50%', width: 100}}
        />
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={{borderTopWidth: 1, borderTopColor: '#ddd', padding: 16}}>
        <Button
          icon="logout"
          mode="contained"
          onPress={() => props.navigation.navigate('Login')}
          contentStyle={{backgroundColor: '#D2202E'}}>
          Logout
        </Button>
        <Text
          style={{
            alignSelf: 'center',
            color: 'black',
            fontSize: 15,
            paddingTop: '5%',
          }}>
          App Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

export default DrawerContent;

import React from 'react';
import {Button, Text, View} from 'react-native';

const Reports = ({navigation}) => {
  return (
    <View>
      <Button title='Report' onPress={()=>{navigation.navigate('ReportList')}}/>
    </View>
  );
};
export default Reports;

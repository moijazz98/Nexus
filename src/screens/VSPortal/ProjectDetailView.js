import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';

const ProjectDetailView = ({route}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Card
        style={{margin: 10, shadowColor: 'black', backgroundColor: '#EAEFF2'}}>
        <Card.Content>
          <Text variant="labelLarge">PROJECT NUMBER</Text>
          <Text variant="bodyMedium">{123}</Text>
          <Text variant="labelLarge">PROJECT Name</Text>
          <Text variant="bodyMedium">{'Costco'}</Text>
          <Text variant="labelLarge">CW#</Text>
          <Text variant="bodyMedium">{122}</Text>
          <Text variant="labelLarge">WAREHOUSE NUMBER</Text>
          <Text variant="bodyMedium">{223}</Text>
          <Text variant="labelLarge">BUILDING TYPE</Text>
          <Text variant="bodyMedium">{1}</Text>
          <Text variant="labelLarge">BLDG SQFT</Text>
          <Text variant="bodyMedium">{2345}</Text>
          <Text variant="labelLarge">SITE ACREAGE</Text>
          <Text variant="bodyMedium">{333}</Text>
          <Text variant="labelLarge">MASTER REF</Text>
          <Text variant="bodyMedium">{123}</Text>
          <Text variant="labelLarge">PIC</Text>
          <Text variant="bodyMedium">333</Text>
          <Text variant="labelLarge">ARCH PM</Text>
          <Text variant="bodyMedium">Karen</Text>
          <Text variant="labelLarge">CONST. PM</Text>
          <Text variant="bodyMedium">Bharath</Text>
          <Text variant="labelLarge">RE PM</Text>
          <Text variant="bodyMedium">{'Celese'}</Text>
          {/* <Text variant="labelLarge">Costco PM</Text>
          <Text variant="bodyMedium">{selectedData?.CostcoPM==null?'(Blank)':selectedData?.CostcoPM}</Text> */}
          <Text variant="labelLarge">DD PM</Text>
          <Text variant="bodyMedium">{'Dallas'}</Text>
          <Text variant="labelLarge">CIVIL ENGINEER</Text>
          <Text variant="bodyMedium">{'No Name'}</Text>
          <Text variant="labelLarge">DD CONSULTANT</Text>
          <Text variant="bodyMedium">{'MG2'}</Text>
          <Text variant="labelLarge">ESTIMATOR</Text>
          <Text variant="bodyMedium">{'No Name'}</Text>
          <Text variant="labelLarge">GC</Text>
          <Text variant="bodyMedium">{233}</Text>
          {/* <Text variant="labelLarge">SITE PHONE</Text>
          <Text variant="bodyMedium"></Text> */}
        </Card.Content>
      </Card>
    </View>
  );
};

export default ProjectDetailView;

const styles = StyleSheet.create({});

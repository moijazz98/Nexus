import {View, Appearance, TouchableOpacity, Text,FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../../common/SearchBar';
// import {FlatList} from 'react-native-gesture-handler';
// import {Text} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  let sampleData = [
    {id: 0, projectName: 'Abbotsford, BC Bakery Refresh'},
    {id: 1, projectName: 'Abbotsford, BC Dairy Cooler'},
    {id: 2, projectName: 'Abbotsford, BC Mezzanine Locker'},
    {id: 3, projectName: 'Abbotsford, BC Tire Center Restroom'},
    {id: 4, projectName: 'Acapulco, MX Business Center'},
  ];

  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const listener = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme);
    });
    return () => {
      listener.remove();
    };
  }, []);

  const handleSearch = e => {
    console.log(e);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProjectDetailView', {projectId: item?.id});
        }}>
        <View
          style={{
            borderBottomWidth: 0.5,
            padding: '5%',
            borderBottomColor: theme === 'dark' ? 'white' : 'black',
          }}>
          <Text
            variant="titleMedium"
            style={{
              color: theme === 'dark' ? 'white' : 'black',
              paddingLeft: '5%',
            }}>
            {item.projectName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{flex: 1, backgroundColor: theme === 'dark' ? 'black' : 'white'}}>
      <View
        style={{marginTop: '4%', paddingLeft: '5%', marginBottom: '3%'}}></View>
      <SearchBar handleSearch={handleSearch} />
      <View style={{marginTop: '5%'}}>
        <FlatList
          data={sampleData}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

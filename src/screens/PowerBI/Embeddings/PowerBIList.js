import { StyleSheet, View, TouchableOpacity,ScrollView,Appearance} from 'react-native'
import { Card, Text,Searchbar} from 'react-native-paper'
import React,{useState,useEffect} from 'react'
import SearchBar from '../../../common/SearchBar'
import { FlatList } from 'react-native-gesture-handler'

const PowerBIList = ({navigation}) => {
  let sampleData=[
    {id:0,projectName:'BPT Dashboard by year'},
    {id:1,projectName:'Construction Report'},
    {id:2,projectName:'Costco Dashboard'},
  ]
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedData, setSelectedData] = useState(sampleData);
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [stockData,setStockData]=useState(sampleData)
  useEffect(() => {
    const listener = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme);
    });
    return () => {
      listener;
    };
  }, []);
  const handleSearch =(text)=>{
    if (text) {
      const newData = stockData.filter(function (item) {
        if (
          item.projectName.toLowerCase().indexOf(text.toLowerCase()) >= 0 
        ) {
          return item;
        }
      });
      setSelectedData(newData);
      setSearchQuery(text)
    } else {
      setSelectedData(stockData);
      setSearchQuery('')
    }
  }
  function keyExtractor(item) {
    return `${item.id}`;
  }
  const renderItem=(item,index)=>{
    return(
      <TouchableOpacity onPress={()=>{navigation.navigate('PowerBI')}}>
      <View style={{borderBottomWidth:0.5,padding:'5%',borderBottomColor:theme === 'dark' ? 'white' : 'black'}}>
        <Text variant='titleMedium' style={{color:theme === 'dark' ? 'white' : 'black',paddingLeft:'5%'}}>{item?.item?.projectName}</Text>
      </View>
      </TouchableOpacity>
    )
  }
  return (
  <View style={{flex:1,backgroundColor: theme === 'dark' ? 'black' : 'white',}}>
    {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
    <View style={{marginTop:'4%',paddingLeft:'5%',marginBottom:'3%'}}>
    {/* <Text variant='headlineSmall' style={{fontWeight:'bold',color:theme === 'dark' ? 'white' : 'black'}}>My Project</Text> */}
      </View>
      <SearchBar
      handleSearch={handleSearch}
      value={searchQuery}
    />
    <View style={{marginTop:'5%'}}>
    <FlatList
      data={selectedData}
      renderItem={({item, index}) => renderItem({item, index})}
      keyExtractor={keyExtractor}
      // ListFooterComponent={renderFooter}
      /></View>
     {/* </ScrollView> */}
    </View>
  )
}

export default PowerBIList

const styles = StyleSheet.create({})
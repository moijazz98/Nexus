import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Appearance,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  const handleLogin = () => {
    navigation.navigate('Root', {screen: 'Home'});
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        justifyContent: 'space-around',
      }}>
      <StatusBar
        backgroundColor={theme === 'dark' ? 'black' : 'white'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.imgview}>
        <Image
          source={require('../assests/Nexus.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <View style={{alignItems: 'center', gap: 20}}>
        <TextInput
          placeholder="eg: johndoe@gmail.com"
          style={{width: 350, backgroundColor: '#f4f4f4'}}
        />
        <TextInput
          placeholder="Password"
          style={{width: 350, backgroundColor: '#f4f4f4'}}
        />
        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
          style={{
            backgroundColor: '#D2202E',
            padding: 20,
            width: 350,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: theme === 'dark' ? 'white' : 'white',
              fontWeight: '500',
              lineHeight: 24,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#2F2F2F',
          padding: 10,
          borderRadius: 5,
        }}>
        <MaterialCommunityIcon name="microsoft" size={20} color="#ffffff" />
        <Text style={{color: '#ffffff', marginLeft: 10}}>
          Sign In with Microsoft
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgview: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '40%',
    width: 200,
  },
});

export default LoginScreen;

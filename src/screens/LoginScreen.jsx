import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { authorize } from 'react-native-app-auth';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {
  const config = {
    issuer: 'https://login.microsoftonline.com/db01513b-9352-48dc-9232-8fc9f4e6979f',
    clientId: '5406f15a-6b06-4c11-a01e-32f9c245898c',
    redirectUrl: 'msauth.org.reactjs.native.example.Nexus://auth',
    scopes: ['openid', 'profile', 'email'],
    serviceConfiguration: {
      authorizationEndpoint:
        'https://login.microsoftonline.com/db01513b-9352-48dc-9232-8fc9f4e6979f/oauth2/v2.0/authorize',
      tokenEndpoint:
        'https://login.microsoftonline.com/db01513b-9352-48dc-9232-8fc9f4e6979f/oauth2/v2.0/token',
    },
    useNonce: true,
    usePKCE: true, //For iOS, we have added the useNonce and usePKCE parameters, which are recommended for security reasons.
    additionalParameters: {
      prompt: 'consent',
    },
  };

  const handleLoginMicrosoft = async () => {
    try {
      const { idToken } = await authorize(config);
      console.log(idToken) // here you get the idToken if login successful.
    } catch (error) {
      //on login error 
    }
  };

  const handleLogin = () => {
    navigation.navigate('Root', { screen: 'Home' });
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // backgroundColor: theme === 'dark' ? 'black' : 'white',
        justifyContent: 'space-around',
      }}>
      <View style={styles.imgview}>
        <Image
          source={require('../assests/Nexus.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <View style={{ alignItems: 'center', gap: 20 }}>
        <TextInput
          placeholder="eg: Mohammed.ijaz@mg2.com"
          style={{
            width: 350,
            backgroundColor: '#f4f4f9',
            height: 30,
            borderRadius: 3,
          }}
        />
        <TextInput
          placeholder="Password"
          style={{
            width: 350,
            backgroundColor: '#f4f4f4',
            height: 30,
            borderRadius: 3,
          }}
          secureTextEntry={true}

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
              color: 'white',
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
        }}
        onPress={() => handleLoginMicrosoft()}>
        <MaterialCommunityIcon name="microsoft" size={20} color="#ffffff" />

        <Text style={{ color: '#ffffff', marginLeft: 10 }}>
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
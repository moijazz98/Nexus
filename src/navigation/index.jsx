import React, { useEffect, useState } from 'react';
import {
  Appearance,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/VSPortal/HomeScreen';
import { enableScreens } from 'react-native-screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RPH } from '../constant/Responsive';
import { getHeaderTitle } from '@react-navigation/elements';
import DrawerContent from './DrawerContent';
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProjectDetailView from '../screens/VSPortal/ProjectDetailView';
import PowerBIList from '../screens/PowerBI/Embeddings/PowerBIList';
import PowerBI from '../screens/PowerBI/Embeddings/PowerBI';
import ExistingPlans from '../screens/ExistingPlans/ExistingPlans';
// import UserManagement from '../screens/UserManagement/UserManagement';
import Contacts from '../screens/Contacts/Contacts';
// import Reports from '../screens/Reports/Reports';
import Icon from 'react-native-vector-icons/Ionicons'; // You can use any icon library
import { Text } from 'react-native-paper';
// import ReportList from '../screens/Reports/ReportList';

enableScreens();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
    return () => {
      listener;
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Root"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProjectDetailView"
          component={ProjectDetailView}
          options={() => ({
            headerShown: false,
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            //       <Icon
            //         name="arrow-back"
            //         size={25}
            //         color="#D2202E"
            //       />
            //     </View>
            //   </TouchableOpacity>
            // ),
          })}
        />
        <Stack.Screen
          name="PowerBI"
          component={PowerBI}
          options={({ navigation }) => ({
            headerShown: false,
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            //       <Icon
            //         name="arrow-back"
            //         size={25}
            //         color="#D2202E"
            //         style={{ marginLeft: 10 }}
            //       />
            //     </View>
            //   </TouchableOpacity>
            // ),
          })}
        />
        {/* <Stack.Screen name='ReportList'
        component={ReportList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const DrawerNav = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
    return () => {
      listener;
    };
  }, []);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'pink',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'grey',
        backgroundColor: 'black',
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <View
              style={{
                height: RPH(8),
                backgroundColor: theme === 'dark' ? '#000' : '#fff',
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between', 
              }}>
              <Pressable onPress={() => navigation.openDrawer()} style={{ flex: 1 }}>
                <MenuIcon
                  name="menu"
                  size={30}
                  color={theme === 'dark' ? '#fff' : '#B30F0F'}
                />
              </Pressable>
              <View>
                <Text
                  style={{
                    color: theme === 'dark' ? '#fff' : '#000',
                    fontWeight: 'bold',
                    fontSize: 18,
                    flex: 4, 
                    alignItems: 'center',
                    marginTop:20
                  }}>
                  {title}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>

                </Text>
              </View>

            </View>
          );
        },
        drawerStyle: { backgroundColor: theme === 'dark' ? '#000' : '#fff' },
      }}>
      <Drawer.Screen name="My Projects" component={HomeScreen} />
      <Drawer.Screen name="PowerBI Reports" component={PowerBIList} />
      <Drawer.Screen name="Existing Plans" component={ExistingPlans} />
      {/* <Drawer.Screen name="UserManagement" component={UserManagement} /> */}
      <Drawer.Screen name="Contacts" component={Contacts} />
      {/* <Drawer.Screen name="Reports" component={Reports} /> */}
    </Drawer.Navigator>
  );
};
export default Navigation;
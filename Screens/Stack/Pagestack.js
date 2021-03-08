import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../components/Main';
import Contact from '../components/Contact';
import ContactDetails from '../components/ContactDetails';

const Stack = createStackNavigator();
const Pagestack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="ContactList" component={Contact} />
      <Stack.Screen name="ContactDetails" component={ContactDetails} />
    </Stack.Navigator>
  );
};

export default Pagestack;

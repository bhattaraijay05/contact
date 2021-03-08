import React, {useState, useEffect} from 'react';

import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import Contacts from 'react-native-contacts';
import ContactItems from './ContactItems';

const Contact = () => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll().then((contacts) => {
      setContacts(contacts);
    });
  };

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={(contact) => {
          return (
            <ContactItems key={contact.item.recordID} item={contact.item} />
          );
        }}
        keyExtractor={(item) => item.recordID}
      />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});

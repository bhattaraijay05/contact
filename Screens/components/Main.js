import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ContactList')}
        style={styles.box}>
        <Text style={styles.text}>Contact Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'dodgerblue',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

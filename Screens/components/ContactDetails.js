import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const ContactDetails = ({route}) => {
  const item = route.params;

  const [value, onChangeText] = React.useState(
    item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : 'No Number',
  );

  return (
    <View style={styles.container}>
      <Text
        style={
          styles.titleStyle
        }>{`${item.givenName} ${item.familyName}`}</Text>

      <View style={styles.numberContainer}>
        <TextInput
          style={styles.textfield}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
    </View>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleStyle: {
    fontSize: 20,
  },
  textfield: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Avatar from './Avatar';

const ContactItems = ({item}) => {
  const getAvatarInitials = (textString) => {
    if (!textString) return '';
    const text = textString.trim();
    const textSplit = text.split(' ');
    if (textSplit.length <= 1) return text.charAt(0);
    const initials =
      textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
    return initials;
  };

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ContactDetails', (item = item))}>
        <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            <Avatar
              img={item.hasThumbnail ? {uri: item.thumbnailPath} : undefined}
              placeholder={getAvatarInitials(
                `${item.givenName} ${item.familyName}`,
              )}
              width={40}
              height={40}
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>
              <Text
                style={
                  styles.titleStyle
                }>{`${item.givenName} ${item.familyName}`}</Text>
            </View>
            <View style={styles.numberContainer}>
              {item.phoneNumbers.map((num) => (
                <View key={num.id}>
                  <Text style={styles.numberStyle}>
                    {num.label}: {num.number}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContactItems;
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    minHeight: 44,
    height: 70,
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingLeft: 13,
  },
  rightContainer: {
    marginLeft: 18,
    flexDirection: 'row',
    flex: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#515151',
    justifyContent: 'space-between',
  },
  nameContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titleStyle: {
    fontSize: 16,
  },
  numberStyle: {
    fontSize: 12,
  },
  numberContainer: {
    right: 20,
    justifyContent: 'center',
  },
});

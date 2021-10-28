import React, {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {dataModel} from './index';
import styles from './styles';

const User: FC<dataModel> = ({
  item: {
    picture: {large},
    name: {first, last},
  },
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <FastImage
        style={styles.image}
        source={{
          uri: large,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.firstName}>{first}</Text>
        <Text>{last}</Text>
      </View>
    </View>
  );
};

export default User;

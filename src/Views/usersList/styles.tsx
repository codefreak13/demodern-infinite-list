import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  listStyle: {
    marginVertical: RFValue(10),
  },
  divider: {
    marginVertical: RFValue(10),
  },
  image: {
    aspectRatio: 1.2,
    width: '70%',
  },
  nameContainer: {
    flexDirection: 'row',
  },
  firstName: {
    marginRight: RFValue(5),
  },
});

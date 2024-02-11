import {makeStyles} from '@rneui/themed';
import {sizes} from '@theme/colors';
import {StyleSheet} from 'react-native';

export const useStyle = makeStyles(theme => ({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    zIndex: 3,
    overflow: 'hidden',
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.colors.white,
    height: sizes.height / 4,
    width: sizes.width / 2.5,
    margin: 4,
  },
  image: {
    width: '100%',
    flex: 1,
  },
}));

import {View} from 'react-native';
import React from 'react';
import {Switch, makeStyles, useTheme} from '@rneui/themed';
import Typography from '@component/typography';

export default function ProfileScreen() {
  const styles = useStyle();

  const {theme, updateTheme} = useTheme();

  const onChanges = () => {
    updateTheme(() => ({
      mode: theme.mode === 'dark' ? 'light' : 'dark',
    }));
  };

  const toggleSwitch = () => {
    onChanges();
  };
  return (
    <View style={styles.container}>
      <Typography>Your Profile Screen</Typography>
      <View style={styles.switchContainer}>
        <Typography style={{marginRight: 10}}>
          Turn to {theme.mode === 'dark' ? 'Light Mode' : 'Dard Mode'}
        </Typography>
        <Switch onChange={toggleSwitch} value={theme.mode === 'dark'} />
      </View>
    </View>
  );
}
const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  switchContainer: {
    marginTop: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

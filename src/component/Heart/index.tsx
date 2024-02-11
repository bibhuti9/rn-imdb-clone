import {View} from 'react-native';
import React from 'react';
import CircleButton from '@component/ButtonIcon/CircleButton';
import Icon from 'react-native-vector-icons/AntDesign';
import {observer} from 'mobx-react';

interface PropsTypes {
  onPress: () => void;
  hasFavorite?: boolean;
}

function Heart({onPress, hasFavorite}: PropsTypes) {
  return (
    <View style={{position: 'absolute', right: 10, top: 10, zIndex: 1}}>
      <CircleButton
        onPrss={onPress}
        type="small"
        icon={<Icon name={'heart'} color={hasFavorite ? '#FA2A2A' : '#000'} />}
        bgColor="#FA2A2A"
      />
    </View>
  );
}
export default observer(Heart);

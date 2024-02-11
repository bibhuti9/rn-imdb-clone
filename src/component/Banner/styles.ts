import {Font} from '@component/typography/types';
import {makeStyles} from '@rneui/themed';
import {sizes} from '@theme/colors';
export const useStyle = makeStyles(theme => ({
  container: {
    height: sizes.height / 2.2,
    width: sizes.width,
  },
  imageBackground: {
    flex: 0.6,
    width: sizes.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playBtn: {
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: theme.colors.black,
  },
  bottomContainer: {
    flexDirection: 'row',
    flex: 0.25,
  },
  leftBottomContainer: {
    flex: 1,
  },
  leftImage: {
    width: 140,
    height: 180,
    position: 'absolute',
    bottom: 0,
    left: 15,
    zIndex: 1,
  },
  rightBottomContainer: {
    flex: 1.1,
  },
  text: {
    color: theme.colors.secondary,
    fontSize: sizes.L,
    fontFamily: 'KaushanScript-Regular',
    textShadowColor: theme.colors.secondary,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    textShadowRadius: 10,
    letterSpacing: 2,
  },
}));

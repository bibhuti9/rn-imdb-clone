import {makeStyles} from '@rneui/themed';
import {Font, sizes} from '@theme/colors';

export const useStyle = makeStyles(theme => ({
  topContainer: {
    height: sizes.height / 2,
    width: sizes.width,
  },
  imageBackground: {
    flex: 1,
    width: sizes.width,
    padding: theme.spacing.lg,
  },
  backContainer: {
    marginTop: 20,
    flex: 1,
  },
  imageText: {
    color: '#fff',
    fontSize: sizes.M,
    fontFamily: Font.KaushanScriptRegular,
    textShadowColor: theme.colors.black,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    textShadowRadius: 10,
    letterSpacing: 2,
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.2,
  },
  leftBottomContainer: {
    height: '100%',
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
    height: '100%',
    flex: 1.3,
    justifyContent: 'flex-end',
  },
}));

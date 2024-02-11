import {makeStyles} from '@rneui/themed';
import {Font, sizes} from '@theme/colors';
export const useStyle = makeStyles(theme => ({
  container: {
    height: sizes.height / 2,
    width: sizes.width,
  },
  imageBackground: {
    flex: 1,
    width: sizes.width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: sizes.padding + 10,
  },
  playBtn: {
    backgroundColor: theme.colors.grey5,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: 30,
  },
  outlineButton: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.black,
    marginLeft: theme.spacing.lg,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.xl,
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
    color: theme.colors.black,
    fontSize: sizes.XL,
    fontFamily: Font.KaushanScriptRegular,
    textShadowColor: theme.colors.secondary,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    textShadowRadius: 10,
    letterSpacing: 2,
    textAlign: 'center',
  },
}));

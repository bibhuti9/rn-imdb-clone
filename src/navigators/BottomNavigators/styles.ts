import {makeStyles} from '@rneui/themed';

export const useStyle = makeStyles((theme, props: {bottom: number}) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    paddingBottom: props?.bottom,
    paddingVertical: theme.spacing.md,
    zIndex: 11,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 4,
  },
  button: {
    padding: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    height: 8,
    width: 8,
    borderRadius: 50,
  },
}));

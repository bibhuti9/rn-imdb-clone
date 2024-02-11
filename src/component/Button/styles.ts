import {makeStyles} from '@rneui/themed';
import {BorderRadious, typo} from '@theme/colors';

export const useStyle = makeStyles(theme => ({
  solidContainer: {
    backgroundColor: theme.colors.secondary,
    borderRadius: BorderRadious.l,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  outlineButton: {
    borderRadius: BorderRadious.m,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  textStyle: {
    fontSize: typo.S,
    fontWeight: '600',
    color: '#fff',
  },
}));

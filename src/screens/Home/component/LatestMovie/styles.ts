import {makeStyles} from '@rneui/themed';

export const useStyle = makeStyles(theme => ({
  container: {
    marginHorizontal: theme.spacing.md,
  },
  lableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: theme.spacing.xl,
  },
}));

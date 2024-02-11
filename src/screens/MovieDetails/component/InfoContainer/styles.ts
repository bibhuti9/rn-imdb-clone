import {makeStyles} from '@rneui/themed';
import {sizes} from '@theme/colors';

export const useStyle = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing.xl,
    marginHorizontal: theme.spacing.lg,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seperator: {
    height: 15,
    width: 2,
    backgroundColor: theme.colors.black,
    marginHorizontal: theme.spacing.md,
  },
  cast: {
    marginTop: theme.spacing.lg,
  },
  label: {
    fontSize: 22,
    marginBottom: 4,
  },
}));

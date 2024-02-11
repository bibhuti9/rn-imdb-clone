import {makeStyles} from '@rneui/themed';
import {typo} from '@theme/colors';

export const useStyle = makeStyles(theme => ({
  container: {
    marginHorizontal: theme.spacing.lg,
  },
  lableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
  heading: {
    fontSize: typo.L,
    marginBottom: theme.spacing.md,
  },
  movieContainer: {
    marginVertical: theme.spacing.md + 5,
  },
  card: {
    marginRight: theme.spacing.md,
  },
}));

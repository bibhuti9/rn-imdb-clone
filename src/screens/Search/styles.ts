import {makeStyles} from '@rneui/themed';
import {typo} from '@theme/colors';

export const useStyle = makeStyles(theme => ({
  parent: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  container: {
    marginHorizontal: theme.spacing.lg,
  },
  searchResultContainer: {
    marginTop: theme.spacing.lg,
    alignItems: 'center',
  },
  topText: {
    fontSize: typo.L,
    marginBottom: theme.spacing.lg,
  },
}));

import {makeStyles} from '@rneui/themed';
import {BorderRadious} from '@theme/colors';

export const useStyle = makeStyles(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BorderRadious.l + 4,
    backgroundColor: theme.colors.grey0,
    marginHorizontal: theme.spacing.lg,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: theme.spacing.lg,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    flex: 1,
    color: theme.colors.black,
    paddingLeft: theme.spacing.md,
    fontSize: 15,
  },
  bar: {
    borderWidth: 0.7,
    height: 40,
    borderColor: theme.colors.grey4,
    marginRight: theme.spacing.lg,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

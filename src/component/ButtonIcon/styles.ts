import { makeStyles } from '@rneui/themed';
import { sizes } from '@theme/colors';
export const useStyle = makeStyles((theme)=>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: theme.colors.grey2 ,
    marginHorizontal:theme.spacing.md,
    fontSize:sizes.S
  },
  
}));

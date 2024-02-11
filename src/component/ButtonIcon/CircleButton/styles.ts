import {makeStyles} from '@rneui/themed';
import {hexToRGB, typo} from '@theme/colors';

export type btnSizeType = 'large' | 'medium' | 'small' | 'sm';
export type btnPossition = 'column' | 'row';

const HeightWidth = (num: number) => {
  return {
    height: num,
    width: num,
  };
};

const btnSize = (type: btnSizeType) => {
  switch (type) {
    case 'large':
      return HeightWidth(50);
    case 'medium':
      return HeightWidth(40);
    case 'small':
      return HeightWidth(30);
    case 'sm':
      return HeightWidth(20);
  }
};

export const useStyle = makeStyles(
  (
    theme,
    props: {
      bgColor: string;
      type: btnSizeType;
      position: btnPossition;
      isDynamicBgColor: boolean;
    },
  ) => ({
    container: {
      flexDirection: props.position,
      alignItems: 'center',
    },
    btn: {
      borderRadius: 50,
      padding: theme.spacing.md,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.isDynamicBgColor
        ? hexToRGB(props.bgColor, theme.mode)
        : props.bgColor,
      ...btnSize(props.type),
      flexDirection: props.position,
    },
    text: {
      fontSize: typo.SM,
      marginLeft: props.position === 'column' ? 0 : theme.spacing.md,
    },
  }),
);

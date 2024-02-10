export const _Shrink = (text: string, count: number) => {
    return text.length < count ? text : `${text.substring(0, count)}...`;
  };
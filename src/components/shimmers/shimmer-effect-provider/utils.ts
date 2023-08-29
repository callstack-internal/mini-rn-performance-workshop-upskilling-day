import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const DEFAULT_HEIGHT = 120;

// (screenHeight / height inbox item) + 1 to be sure the view is fully covered
export const estimateItemNumber = (itemHeight?: number) => {
  const fallbackHeight =
    itemHeight && itemHeight > 0 ? itemHeight : DEFAULT_HEIGHT;
  return Math.ceil(screenHeight / fallbackHeight) + 1;
};

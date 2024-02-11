import {movieStoreType} from '@store/Movies';

export interface PropsTypes {
  labelText?: string;
  onLabelpress?: () => void;
  heading: string;
  list: movieStoreType[];
}

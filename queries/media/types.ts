import * as i from 'types';

export type MediaList = {
  [key: string]: i.Media;
};

export type Media = {
  title: string;
  downloaded: boolean;
  id: string;
};

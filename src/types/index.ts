import React, { ReactElement } from 'react';

export enum ProgramTypes {
  MOVIE = 'movie',
  SERIES = 'series',
}
export enum ProgramRatings {
  PG = 'PG',
  MA15 = 'MA 15+',
  M = 'M',
  R18 = 'R 18+',
}

export enum ProgramGenres {
  DRAMA = 'Drama',
  COMEDY = 'Comedy',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
  REALITY = 'Reality',
  THRILLER = 'Thriller',
  ACTION = 'Action',
  SCIFI = 'Sci-Fi',
  HORROR = 'Horror',
  WESTERN = 'Western',
  DOCUMENTARY = 'Documentary',
  ROMANCE = 'Romance',
  ANIMATION = 'Animation',
}

export enum ProgramLanguages {
  ENGLISH = 'English',
  SPANISH = 'Spanish',
  FRENCH = 'French',
  IRANIAN = 'Iranian',
}

export interface ProgramProps {
  id: number;
  title: string;
  description: string;
  type: ProgramTypes;
  image: string;
  rating: ProgramRatings;
  genre: ProgramGenres;
  language: ProgramLanguages;
  year: number;
  series?: string;
}

export interface CarouselItemRenderProps {
  active: boolean;
  index: number;
  item: ProgramProps;
}

export interface CarouselProps {
  loading?: boolean | undefined;
  items: ProgramProps[] | null;
  itemsToShow: number;
  activeIndex: number;
  renderItem: ({ item, index, active }: CarouselItemRenderProps) => JSX.Element;
  onItemSelect: (item: ProgramProps) => void;
}

export interface ContentLayoutProps {
  children: ReactElement | null;
}

export interface MasterLayoutProps {
  children: ReactElement | null;
}

export interface MenuNavigationItemProps {
  title: string;
  path: string;
  target?: '_blank' | 'self';
}

export interface MenuNavigationProps {
  items: MenuNavigationItemProps[];
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  renderLoading?: () => JSX.Element;
}

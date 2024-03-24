export interface Size {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export enum Sizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export const size: Size = {
  xs: 400, // for small screen mobile
  sm: 600, // for mobile screen
  md: 900, // for tablets
  lg: 1280, // for laptops
  xl: 1440, // for desktop / monitors
  xxl: 1920, // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs}px)`,
  sm: `(max-width: ${size.sm}px)`,
  md: `(max-width: ${size.md}px)`,
  lg: `(max-width: ${size.lg}px)`,
  xl: `(max-width: ${size.xl}px)`,
  xxl: `(max-width: ${size.xxl}px)`,
};

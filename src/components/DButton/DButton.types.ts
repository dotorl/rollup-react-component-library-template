export const DButtonVariantEnum = {
  color: 'color',
  gray: 'gray',
  gray2: 'gray2',
  outline: 'outline',
  outline2: 'outline2',
} as const;

export type DButtonVariantEnum =
  (typeof DButtonVariantEnum)[keyof typeof DButtonVariantEnum];

export const DButtonSizeEnum = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs',
} as const;

export type DButtonSizeEnum =
  (typeof DButtonSizeEnum)[keyof typeof DButtonSizeEnum];

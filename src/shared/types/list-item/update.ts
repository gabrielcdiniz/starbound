import type { ListItem } from '@prisma/client';

export type UpdateListItemType = Pick<
  ListItem,
  'id' | 'name' | 'price' | 'quantity'
>;

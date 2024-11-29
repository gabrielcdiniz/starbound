import type { ListItem } from '@prisma/client';

export type CreateListItemType = Pick<
  ListItem,
  'listId' | 'name' | 'price' | 'quantity'
>;

'use server';

import type { ListItem } from '@prisma/client';

import { prisma } from '@/lib/db';
import type { UpdateListItemType } from '@/shared/types';

export async function updateListItem(payload: UpdateListItemType) {
  try {
    const { id, ...data } = payload;

    const oldItem = (await prisma.listItem.findUnique({
      where: { id },
    })) as ListItem;

    const newItem = await prisma.listItem.update({
      where: { id },
      data,
    });

    await prisma.list.update({
      where: { id: newItem.listId },
      data: {
        totalPrice: {
          decrement: oldItem.price * oldItem.quantity,
        },
      },
    });

    await prisma.list.update({
      where: { id: newItem.listId },
      data: {
        totalPrice: {
          increment: newItem.price * newItem.quantity,
        },
      },
    });

    return { data: true };
  } catch (error) {
    return { error };
  }
}

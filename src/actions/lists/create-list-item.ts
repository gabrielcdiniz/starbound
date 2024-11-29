'use server';

import { prisma } from '@/lib/db';
import type { CreateListItemType } from '@/shared/types';

export async function createListItem(data: CreateListItemType) {
  try {
    const count = await prisma.listItem.count({
      where: {
        listId: data.listId,
      },
    });

    const response = await prisma.listItem.create({
      data: {
        ...data,
        position: count + 1,
      },
    });

    await prisma.list.update({
      where: {
        id: data.listId,
      },
      data: {
        totalPrice: {
          increment: data.price * data.quantity,
        },
      },
    });

    return { data: response };
  } catch (error) {
    return { error };
  }
}

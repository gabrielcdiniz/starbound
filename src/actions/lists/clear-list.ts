'use server';

import { prisma } from '@/lib/db';

export async function clearList(listId: string) {
  try {
    const response = await prisma.listItem.deleteMany({
      where: {
        listId,
      },
    });

    await prisma.list.update({
      where: {
        id: listId,
      },
      data: {
        totalPrice: 0,
      },
    });

    return { data: response };
  } catch (error) {
    return { error };
  }
}

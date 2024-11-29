'use server';

import { prisma } from '@/lib/db';

export async function getListItems(listId: string) {
  try {
    const lists = await prisma.listItem.findMany({
      where: {
        listId,
      },
      orderBy: {
        position: 'asc',
      },
    });

    return { data: lists };
  } catch (error) {
    return { error };
  }
}

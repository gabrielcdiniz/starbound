'use server';

import { prisma } from '@/lib/db';

export async function deleteListItem(id: string) {
  try {
    const response = await prisma.listItem.delete({
      where: { id },
    });

    await prisma.list.update({
      where: { id: response.listId },
      data: {
        totalPrice: {
          decrement: response.price * response.quantity,
        },
      },
    });

    return { data: response };
  } catch (error) {
    return { error };
  }
}

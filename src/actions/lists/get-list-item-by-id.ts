'use server';

import { prisma } from '@/lib/db';

export async function getListItemById(id: string) {
  try {
    const response = await prisma.listItem.findUnique({
      where: { id },
    });

    return { data: response };
  } catch (error) {
    return { error };
  }
}

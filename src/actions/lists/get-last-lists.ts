'use server';

import { prisma } from '@/lib/db';

export async function getLastLists() {
  try {
    const lists = await prisma.list.findMany({
      take: 3,
      where: {
        isFinished: true,
      },
      orderBy: {
        finishedAt: 'desc',
      },
    });

    return { data: lists };
  } catch (error) {
    return { error };
  }
}

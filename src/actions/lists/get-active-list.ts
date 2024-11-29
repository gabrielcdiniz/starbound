'use server';

import type { List } from '@prisma/client';

import { prisma } from '@/lib/db';

export async function getActiveList() {
  console.log('getActiveList - init');

  try {
    let activeList: List | null = null;

    activeList = await prisma.list.findFirst({
      where: {
        AND: [{ isFinished: false }],
      },
    });

    console.log('getActiveList - activeList', activeList);

    if (!activeList) {
      const newList = await prisma.list.create({
        data: {},
      });

      activeList = newList;

      console.log('getActiveList - newList', newList);
    }

    return { data: activeList };
  } catch (error) {
    console.error('getActiveList - error', error);

    return { error };
  }
}

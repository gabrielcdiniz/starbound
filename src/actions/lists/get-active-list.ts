'use server';

import type { List } from '@prisma/client';

import { prisma } from '@/lib/db';

export async function getActiveList() {
  try {
    let activeList: List | null = null;

    activeList = await prisma.list.findFirst({
      where: {
        AND: [{ isFinished: false }],
      },
    });

    if (!activeList) {
      const newList = await prisma.list.create({
        data: {},
      });

      activeList = newList;
    }

    return { data: activeList };
  } catch (error) {
    return { error };
  }
}

'use server';

import { prisma } from '@/lib/db';
import type { FinalizeListType } from '@/shared/types';

export async function finalizeList(data: FinalizeListType) {
  try {
    await prisma.list.update({
      where: {
        id: data.id,
      },
      data: {
        isFinished: true,
        finishedAt: new Date(),
      },
    });

    return { data: true };
  } catch (error) {
    return { error };
  }
}

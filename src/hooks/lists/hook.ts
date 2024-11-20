import { useCallback, useState, useTransition } from 'react';

import type { List } from '@prisma/client';

import { getLastLists } from '@/actions/lists';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function useLists() {
  const [isPendingLastLists, startTransitionLastLists] = useTransition();

  const [lastLists, setLastLists] = useState<List[]>([]);

  const fetchLastLists = useCallback(() => {
    startTransitionLastLists(async () => {
      await delay(5000);

      const lists = await getLastLists();

      if (!lists.error) {
        setLastLists(lists.data!);
      }
    });
  }, []);

  return {
    lastLists,
    fetchLastLists,
    isPendingLastLists,
  };
}

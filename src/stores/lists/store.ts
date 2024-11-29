import { useContext } from 'react';

import { useStore } from 'zustand';

import { ListsStoreContext } from './provider';
import type { ListsStore } from './types';

export const useListsStore = <T>(selector: (store: ListsStore) => T): T => {
  const listsStoreContext = useContext(ListsStoreContext);

  if (!listsStoreContext) {
    throw new Error('useListsStore must be used within ListsStoreProvider');
  }

  return useStore(listsStoreContext, selector);
};

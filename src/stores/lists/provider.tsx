'use client';

import { createContext, useRef, type ReactNode } from 'react';

import { createListsStore, initListsStore } from './factory';

type CounterStoreProviderProps = {
  children: ReactNode;
};

export type ListsStoreAPI = ReturnType<typeof createListsStore>;

export const ListsStoreContext = createContext<ListsStoreAPI | undefined>(
  undefined,
);

export const ListsStoreProvider = ({ children }: CounterStoreProviderProps) => {
  const storeRef = useRef<ListsStoreAPI>();

  if (!storeRef.current) {
    storeRef.current = createListsStore(initListsStore());
  }

  return (
    <ListsStoreContext.Provider value={storeRef.current}>
      {children}
    </ListsStoreContext.Provider>
  );
};

import { createStore } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { ListsState, ListsStore } from './types';

const defaultInitState: ListsState = {
  currentList: undefined,
  lastLists: [],
  listItems: [],

  isLoadingLists: false,
  isLoadingLastLists: false,
  isLoadingListItems: false,
};

export const createListsStore = (initState: ListsState = defaultInitState) => {
  return createStore<ListsStore>()(
    devtools(
      immer((set) => ({
        ...initState,

        resetAll: () => set(initState),

        pushListItem: (item) => {
          set((state) => {
            state.listItems.push(item);
          });
        },

        setCurrentList: (list) => {
          set((state) => {
            state.currentList = list;
          });
        },

        setLastLists: (lists) => {
          set((state) => {
            state.lastLists = lists;
          });
        },

        setListItems: (items) => {
          set((state) => {
            state.listItems = items;
          });
        },

        setIsLoadingLists: (isLoading) => {
          set((state) => {
            state.isLoadingLists = isLoading;
          });
        },

        setIsLoadingLastLists: (isLoading) => {
          set((state) => {
            state.isLoadingLastLists = isLoading;
          });
        },

        setIsLoadingListItems: (isLoading) => {
          set((state) => {
            state.isLoadingListItems = isLoading;
          });
        },
      })),
    ),
  );
};

export const initListsStore = (): ListsState => {
  return {
    currentList: undefined,
    lastLists: [],
    listItems: [],
    isLoadingLists: false,
    isLoadingLastLists: false,
    isLoadingListItems: false,
  };
};

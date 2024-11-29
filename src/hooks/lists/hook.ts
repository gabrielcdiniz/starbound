import { useCallback } from 'react';

import {
  clearList,
  createListItem,
  finalizeList,
  getActiveList,
  getLastLists,
  getListItemById,
  getListItems,
  updateListItem,
} from '@/actions/lists';
import { deleteListItem } from '@/actions/lists/delete-list-item';
import type { CreateListItemType, UpdateListItemType } from '@/shared/types';
import { useListsStore } from '@/stores/lists';

export function useLists() {
  const {
    currentList,
    isLoadingLastLists,
    isLoadingListItems,
    isLoadingLists,
    lastLists,
    listItems,
    pushListItem,
    resetAll,
    setCurrentList,
    setIsLoadingLastLists,
    setIsLoadingListItems,
    setIsLoadingLists,
    setLastLists,
    setListItems,
  } = useListsStore((state) => state);

  //** LISTS */

  const fetchLastLists = useCallback(async () => {
    try {
      setIsLoadingLastLists(true);

      const { data, error } = await getLastLists();

      if (!error) {
        setLastLists(data!);
      }
    } finally {
      setIsLoadingLastLists(false);
    }
  }, [setLastLists, setIsLoadingLastLists]);

  const getCurrentList = useCallback(async () => {
    console.log('getCurrentList - init');

    try {
      setIsLoadingLists(true);

      const { data, error } = await getActiveList();

      console.log('getCurrentList - data, error', { data, error });

      if (!error) {
        setCurrentList(data!);
      }
    } finally {
      setIsLoadingLists(false);
    }
  }, [setCurrentList, setIsLoadingLists]);

  const finalizeCurrentList = useCallback(async () => {
    if (currentList) {
      await finalizeList({ id: currentList.id });

      resetAll();
    }
  }, [currentList, resetAll]);

  //** LIST ITEMS */

  const fetchListItems = useCallback(async () => {
    if (!currentList) return;

    try {
      setIsLoadingListItems(true);

      const { data, error } = await getListItems(currentList.id);

      if (!error) {
        setListItems(data!);
      }
    } finally {
      setIsLoadingListItems(false);
    }
  }, [currentList, setListItems, setIsLoadingListItems]);

  const fetchListItemById = useCallback(async (id: string) => {
    const { data, error } = await getListItemById(id);

    if (!error) {
      return data;
    }
    return null;
  }, []);

  const addListItem = useCallback(
    async (item: CreateListItemType) => {
      const { data, error } = await createListItem(item);

      if (!error) {
        await getCurrentList();

        pushListItem(data!);
      }
    },
    [pushListItem, getCurrentList],
  );

  const editListItem = useCallback(
    async (payload: UpdateListItemType) => {
      const { error } = await updateListItem(payload);

      if (!error) {
        await getCurrentList();
      }
    },
    [getCurrentList],
  );

  const clearListItems = useCallback(async () => {
    if (currentList) {
      await clearList(currentList.id);

      await getCurrentList();
    }
  }, [currentList, getCurrentList]);

  const removeListItem = useCallback(
    async (id: string) => {
      await deleteListItem(id);

      await getCurrentList();
    },
    [getCurrentList],
  );

  return {
    getCurrentList,
    fetchLastLists,
    fetchListItems,

    //** LAST LISTS */
    isLoadingLastLists,
    isLoadingLists,
    lastLists,

    //** LIST ITEMS */
    addListItem,
    clearListItems,
    editListItem,
    fetchListItemById,
    isLoadingListItems,
    listItems,
    removeListItem,

    //** CURRENT LIST */
    currentList,
    finalizeCurrentList,
  };
}

import type { List, ListItem } from '@prisma/client';

export type ListsState = {
  currentList?: List;
  lastLists: List[];
  listItems: ListItem[];

  isLoadingLists: boolean;
  isLoadingLastLists: boolean;
  isLoadingListItems: boolean;
};

export type ListsActions = {
  pushListItem: (item: ListItem) => void;

  setCurrentList: (list: List) => void;
  setLastLists: (lists: List[]) => void;
  setListItems: (items: ListItem[]) => void;

  setIsLoadingLists: (isLoading: boolean) => void;
  setIsLoadingLastLists: (isLoading: boolean) => void;
  setIsLoadingListItems: (isLoading: boolean) => void;

  resetAll: () => void;
};

export type ListsStore = ListsState & ListsActions;

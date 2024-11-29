'use client';

import { Fragment, useEffect } from 'react';

import {
  ListsActions,
  ListsContent,
  ListsHeader,
  ListsTable,
} from '@/components/lists';
import { useLists } from '@/hooks/lists';

export function PageLists() {
  const { fetchListItems } = useLists();

  useEffect(() => {
    fetchListItems();
  }, [fetchListItems]);

  return (
    <Fragment>
      <ListsHeader />

      <ListsContent>
        <ListsTable />
      </ListsContent>

      <ListsActions />
    </Fragment>
  );
}

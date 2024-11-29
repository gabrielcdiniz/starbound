'use client';

import { Fragment, useEffect } from 'react';

import { SectionLastLists } from '@/components/sections';
import { useLists } from '@/hooks/lists';

export default function HomePage() {
  const { fetchLastLists } = useLists();

  useEffect(() => {
    fetchLastLists();
  }, [fetchLastLists]);

  return (
    <Fragment>
      <SectionLastLists />
    </Fragment>
  );
}

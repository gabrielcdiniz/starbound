'use client';

import { Sheet, Table } from '@mui/joy';

import { TableBody } from './body';
import { TableHeader } from './header';

export function ListsTable() {
  return (
    <Sheet variant="outlined" sx={{ overflow: 'auto' }}>
      <Table hoverRow borderAxis="bothBetween" stickyHeader variant="plain">
        <TableHeader />

        <TableBody />
      </Table>
    </Sheet>
  );
}

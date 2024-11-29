'use client';

import { useTranslations } from 'next-intl';

import { Small } from '@/components/texts';

import { TableHeaderContainer } from './styled';

export function TableHeader() {
  const t = useTranslations('Components.Lists.Table.Header');

  return (
    <TableHeaderContainer component="thead">
      <tr>
        <th style={{ width: 48 }}>
          <Small textAlign="center">#</Small>
        </th>

        <th style={{ width: 200, minWidth: 200 }}>
          <Small>{t('Name')}</Small>
        </th>

        <th style={{ width: 100 }}>
          <Small textAlign="center">{t('UnitPrice')}</Small>
        </th>

        <th style={{ width: 48 }}>
          <Small textAlign="center">{t('Qty')}</Small>
        </th>

        <th aria-label="last" style={{ width: 60 }}>
          <Small textAlign="center">{t('Actions')}</Small>
        </th>
      </tr>
    </TableHeaderContainer>
  );
}

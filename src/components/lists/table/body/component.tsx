'use client';

import { useTranslations } from 'next-intl';

import { Info } from '@/components/texts';
import { useLists } from '@/hooks/lists';
import { formatCurrency } from '@/utils/currency';

import { TableRowActions } from '../row-actions';
import { TableBodySkeleton } from './skeleton';

export function TableBody() {
  const t = useTranslations('Components.Lists.Table.Body');

  const { listItems, isLoadingListItems } = useLists();

  if (isLoadingListItems)
    return (
      <tbody>
        {isLoadingListItems &&
          new Array(8)
            .fill(null)
            .map((_, index) => <TableBodySkeleton key={index} />)}
      </tbody>
    );

  if (!listItems.length)
    return (
      <tbody>
        <tr>
          <td colSpan={5} aria-hidden>
            {t('NoItems')}
          </td>
        </tr>
      </tbody>
    );

  return (
    <tbody>
      {listItems.map((item) => (
        <tr key={item.id}>
          <td>
            <Info level="body-xs" textAlign="center">
              {new String(item.position).padStart(3, '0')}
            </Info>
          </td>
          <td>
            <Info level="body-xs">{item.name}</Info>
          </td>
          <td>
            <Info level="body-xs" textAlign="center">
              {formatCurrency(item.price)}
            </Info>
          </td>
          <td>
            <Info level="body-xs" textAlign="center">
              {item.quantity}
            </Info>
          </td>
          <td>
            <TableRowActions id={item.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

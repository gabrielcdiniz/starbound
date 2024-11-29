'use client';

import { useTranslations } from 'next-intl';

import { format } from 'date-fns';

import { Jumbo } from '@/components/headings';
import { Paragraph, Small } from '@/components/texts';
import { useLists } from '@/hooks/lists';
import { formatCurrency } from '@/utils/currency';

import { SectionLists } from '../lists';
import { SectionListsContainer } from './styled';

export function SectionLastLists() {
  const t = useTranslations('Components.Sections.LastLists');

  const { lastLists } = useLists();

  const items = lastLists.map((item) => (
    <SectionListsContainer key={item.id} component="span">
      <Paragraph>{format(item.finishedAt!, 'dd/MM/yyyy')}</Paragraph>

      <Small>{formatCurrency(item.totalPrice)}</Small>
    </SectionListsContainer>
  ));

  // if (isPendingLastLists)
  //   return (
  //     <SectionLists
  //       title={<Jumbo>{t('LastLists')}</Jumbo>}
  //       items={[
  //         <SectionLastListsSkeleton key="skeleton-1" />,
  //         <SectionLastListsSkeleton key="skeleton-2" />,
  //         <SectionLastListsSkeleton key="skeleton-3" />,
  //       ]}
  //     />
  //   );

  return <SectionLists title={<Jumbo>{t('LastLists')}</Jumbo>} items={items} />;
}

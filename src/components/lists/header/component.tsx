'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Box } from '@mui/joy';

import { ButtonSolid } from '@/components/buttons';
import { Title } from '@/components/headings';
import { Info } from '@/components/texts';
import { useLists } from '@/hooks/lists';
import { formatCurrency } from '@/utils/currency';

import { ListHeaderContainer } from './styled';

export function ListsHeader() {
  const t = useTranslations('Components.Lists.Header');

  const router = useRouter();

  const { currentList } = useLists();

  return (
    <ListHeaderContainer component="header" display="flex" width="100%">
      <Box>
        <Info textTransform="uppercase">{t('TotalValue')}</Info>

        <Title level="h2">{formatCurrency(currentList?.totalPrice || 0)}</Title>
      </Box>

      <Box>
        <ButtonSolid onClick={() => router.push('/lists/finalize')}>
          {t('FinalizeList')}
        </ButtonSolid>
      </Box>
    </ListHeaderContainer>
  );
}

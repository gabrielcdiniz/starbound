'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { ButtonOutlined, ButtonSolid } from '@/components/buttons';
import { useLists } from '@/hooks/lists';

import { ListsActionsContainer } from './styled';

export function ListsActions() {
  const t = useTranslations('Components.Lists.Actions');

  const router = useRouter();

  const { listItems } = useLists();

  return (
    <ListsActionsContainer direction="row">
      <ButtonOutlined
        onClick={() => router.push('/lists/clear')}
        disabled={listItems.length === 0}
      >
        {t('ClearList')}
      </ButtonOutlined>

      <ButtonSolid onClick={() => router.push('/lists/add')}>
        {t('AddItem')}
      </ButtonSolid>
    </ListsActionsContainer>
  );
}

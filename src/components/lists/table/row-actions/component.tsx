'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy';

import {
  DotsThreeOutlineVertical,
  PencilSimple,
  TrashSimple,
} from '@phosphor-icons/react';

import { IconBase } from '@/components/icons';
import { Info } from '@/components/texts';
import { useLists } from '@/hooks/lists';

import { StyledListItemDecorator } from './styled';

type TableRowActionsProps = Readonly<{
  id: string;
}>;

export function TableRowActions({ id }: TableRowActionsProps) {
  const t = useTranslations('Components.Lists.Table.RowActions');

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { removeListItem } = useLists();

  const handleEdit = () => router.push(`/lists/edit/${id}`);

  const handleDelete = async () => {
    try {
      await removeListItem(id);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dropdown>
      <MenuButton variant="plain" size="sm">
        <IconBase icon={DotsThreeOutlineVertical} />
      </MenuButton>

      <Menu placement="right-end">
        <MenuItem onClick={handleEdit} disabled={isSubmitting}>
          <StyledListItemDecorator>
            <IconBase icon={PencilSimple} />
          </StyledListItemDecorator>

          <Info>{t('Edit')}</Info>
        </MenuItem>

        <MenuItem onClick={handleDelete} disabled={isSubmitting}>
          <StyledListItemDecorator>
            <IconBase icon={TrashSimple} />
          </StyledListItemDecorator>

          <Info>{t('Delete')}</Info>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}

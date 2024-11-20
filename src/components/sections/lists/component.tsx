'use client';

import type { ReactNode } from 'react';

import { useTranslations } from 'next-intl';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
} from '@mui/joy';

import { CaretRight } from '@phosphor-icons/react';

import { IconBase } from '@/components/icons';

import { SectionBase, type SectionBaseProps } from '../base';

type SectionListsProps = Readonly<{
  items: ReactNode[];
}> &
  SectionBaseProps;

export function SectionLists({
  items,
  ...sectionBaseProps
}: SectionListsProps) {
  const t = useTranslations('Components.Sections.Lists');

  return (
    <SectionBase {...sectionBaseProps}>
      <List size="lg">
        {items.length === 0 && (
          <ListItem>
            <ListItemContent>{t('NoLists')}</ListItemContent>
          </ListItem>
        )}

        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemContent>{item}</ListItemContent>

              <ListItemDecorator>
                <IconBase icon={CaretRight} />
              </ListItemDecorator>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SectionBase>
  );
}

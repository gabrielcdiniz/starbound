'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import { House, ListNumbers } from '@phosphor-icons/react';

import { IconBase } from '@/components/icons';

import { Tab } from '../_private';
import { TabList, Tabs, TabsContainer } from './styled';

export function MobileAppBar() {
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  console.log('pathname', {
    house: pathname === '/',
    list: pathname === '/lists',
  });

  return (
    <TabsContainer component="footer">
      <Tabs variant="outlined" size="lg" aria-label="Bottom Navigation">
        <TabList sticky="bottom" variant="plain" size="sm" disableUnderline>
          <Tab
            icon={<IconBase icon={House} />}
            href="/"
            active={pathname === '/'}
          >
            {t('Home')}
          </Tab>

          <Tab
            icon={<IconBase icon={ListNumbers} />}
            href="/lists"
            active={pathname === '/lists'}
          >
            {t('List')}
          </Tab>
        </TabList>
      </Tabs>
    </TabsContainer>
  );
}

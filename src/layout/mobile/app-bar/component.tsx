'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import { House, ListNumbers } from '@phosphor-icons/react';

import { IconBase } from '@/components/icons';

import { Tab } from '../_private';
import { TabList, Tabs, TabsContainer } from './styled';

type NavigationTabType = 'home' | 'lists';

export function MobileAppBar() {
  const pathname = usePathname();

  const t = useTranslations('Navigation');

  const [currentTab, setCurrentTab] = useState<NavigationTabType>('home');

  useEffect(() => {
    const activeTab = pathname.split('/')[1] as NavigationTabType;

    setCurrentTab(activeTab || 'home');
  }, [pathname]);

  return (
    <TabsContainer component="footer">
      <Tabs
        variant="outlined"
        size="lg"
        aria-label="Bottom Navigation"
        value={currentTab}
        onChange={(_, newValue) => {
          setCurrentTab(newValue as NavigationTabType);
        }}
      >
        <TabList sticky="bottom" variant="plain" size="sm" disableUnderline>
          <Tab
            icon={<IconBase icon={House} />}
            href="/"
            active={currentTab === 'home'}
            value="home"
          >
            {t('Home')}
          </Tab>

          <Tab
            icon={<IconBase icon={ListNumbers} />}
            href="/lists"
            active={currentTab === 'lists'}
            value="lists"
          >
            {t('List')}
          </Tab>
        </TabList>
      </Tabs>
    </TabsContainer>
  );
}

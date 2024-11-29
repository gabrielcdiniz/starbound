import type { ReactNode } from 'react';

import { ListItemDecorator } from '@mui/joy';
import TabMaterialUI from '@mui/joy/Tab';

import { Info } from '@/components/texts';

import { TabLink } from './styled';

type TabProps = Readonly<{
  icon: ReactNode;
  children: ReactNode;
  href: string;
  value: string;
  active: boolean;
}>;

export function Tab({ icon, children, href, value, active = false }: TabProps) {
  return (
    <TabLink href={href} underline="none" prefetch={false}>
      <TabMaterialUI
        disableIndicator
        orientation="vertical"
        color={active ? 'primary' : 'neutral'}
        value={value}
      >
        <ListItemDecorator>{icon}</ListItemDecorator>

        <Info>{children}</Info>
      </TabMaterialUI>
    </TabLink>
  );
}

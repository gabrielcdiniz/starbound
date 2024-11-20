import type { ReactNode } from 'react';

import { ListItemDecorator } from '@mui/joy';
import TabMaterialUI from '@mui/joy/Tab';

import { Info } from '@/components/texts';

import { TabLink } from './styled';

type TabProps = Readonly<{
  icon: ReactNode;
  children: ReactNode;
  href: string;
  active: boolean;
}>;

export function Tab({ icon, children, href, active = false }: TabProps) {
  return (
    <TabMaterialUI
      disableIndicator
      orientation="vertical"
      color={active ? 'primary' : 'neutral'}
    >
      <TabLink href={href} underline="none">
        <ListItemDecorator>{icon}</ListItemDecorator>

        <Info>{children}</Info>
      </TabLink>
    </TabMaterialUI>
  );
}

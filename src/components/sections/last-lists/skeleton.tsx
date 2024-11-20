import { Skeleton } from '@mui/joy';

import { Paragraph, Small } from '@/components/texts';

import { SectionListsContainer } from './styled';

export function SectionLastListsSkeleton() {
  return (
    <SectionListsContainer>
      <Paragraph>
        <Skeleton>dd/MM/yyyy</Skeleton>
      </Paragraph>

      <Small>
        <Skeleton>R$ 1.234,56</Skeleton>
      </Small>
    </SectionListsContainer>
  );
}

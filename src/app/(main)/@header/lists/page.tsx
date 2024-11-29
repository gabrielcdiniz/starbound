'use client';

import { Box, Stack } from '@mui/joy';

import { CaretLeft } from '@phosphor-icons/react';
import { format } from 'date-fns';

import { ButtonBack } from '@/components/buttons';
import { Title, Subtitle } from '@/components/headings';

export default function ListsParallelPage() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      gap={2}
    >
      <ButtonBack icon={CaretLeft} />

      <Title>Nova Lista</Title>

      <Box flexGrow={1} />

      <Subtitle>{format(new Date(), 'dd/MM/yyyy')}</Subtitle>
    </Stack>
  );
}

import { Box, styled } from '@mui/joy';

export const ContentContainer = styled(Box)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '16px 16px calc(85px + 16px) 16px',
  gap: '16px',
  overflow: 'auto',
});

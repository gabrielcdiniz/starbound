import { Box, Sheet, styled } from '@mui/joy';

export const HeaderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 0,
  height: 64,
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  zIndex: 1,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
});

export const HeaderContent = styled(Sheet)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  padding: '0 16px',
});

export const HeaderSpacer = styled(Box)({
  height: 64,
});

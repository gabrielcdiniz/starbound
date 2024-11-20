import { styled } from '@mui/joy';

import { Link } from '@/components/link';

export const TabLink = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  color: 'inherit',
  textDecoration: 'none',
  transition: '0.3s',

  '&:hover': {
    color: 'inherit',
  },
});

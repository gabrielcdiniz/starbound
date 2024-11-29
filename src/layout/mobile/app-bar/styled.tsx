import { Box, styled } from '@mui/joy';
import { listItemDecoratorClasses } from '@mui/joy/ListItemDecorator';
import { tabClasses } from '@mui/joy/Tab';
import TabListMaterialUI from '@mui/joy/TabList';
import TabsMaterialUI from '@mui/joy/Tabs';

export const TabsContainer = styled(Box)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
});

export const Tabs = styled(TabsMaterialUI)(({ theme }) => ({
  padding: '8px',
  borderRadius: '16px 16px 0 0',

  [`& .${tabClasses.root}`]: {
    borderRadius: '8px',
    gap: '12px',
    transition: '0.3s',

    [`& .${listItemDecoratorClasses.root}`]: {
      backgroundColor: 'transparent',
      borderRadius: '8px',
      padding: '4px 16px',
      transition: '0.3s',
    },

    [`&:not(.${tabClasses.selected}):not(:hover)`]: {
      opacity: 0.7,
    },

    [`&:not(.${tabClasses.selected}):hover`]: {
      backgroundColor: 'transparent',

      [`& .${listItemDecoratorClasses.root}`]: {
        backgroundColor: theme.palette.neutral.plainHoverBg,
      },
    },

    [`&.${tabClasses.selected}`]: {
      backgroundColor: 'transparent',

      [`& .${listItemDecoratorClasses.root}`]: {
        backgroundColor: theme.palette.primary.plainActiveBg,
      },
    },
  },
}));

export const TabList = styled(TabListMaterialUI)({
  padding: 0,
  borderRadius: '8px',
  gap: '8px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
});

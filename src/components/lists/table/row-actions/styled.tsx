import { styled, ListItemDecorator as ListItemDecoratorMUI } from '@mui/joy';

export const StyledListItemDecorator = styled(ListItemDecoratorMUI)({
  '& > .ph-icon-react': {
    color: 'var(--joy-palette-primary-plainColor)',
  },
});

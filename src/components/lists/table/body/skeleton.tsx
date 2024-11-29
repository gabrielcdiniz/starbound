import { Skeleton } from '@mui/joy';

import { Info } from '@/components/texts';

const SKELETON_HEIGHT = 16;

export function TableBodySkeleton() {
  return (
    <tr>
      <td>
        <Info level="body-xs" textAlign="center">
          <Skeleton height={SKELETON_HEIGHT}>
            {new String(1).padStart(3, '0')}
          </Skeleton>
        </Info>
      </td>
      <td>
        <Info level="body-xs" noWrap>
          <Skeleton height={SKELETON_HEIGHT}>
            lorem ipsum dolor sit amet consectetur adipiscing elit
          </Skeleton>
        </Info>
      </td>
      <td>
        <Info level="body-xs" textAlign="center">
          <Skeleton height={SKELETON_HEIGHT}>$ 0.00</Skeleton>
        </Info>
      </td>
      <td>
        <Info level="body-xs" textAlign="center">
          <Skeleton height={SKELETON_HEIGHT}>123</Skeleton>
        </Info>
      </td>
      <td>
        <Info level="body-xs" textAlign="center">
          <Skeleton height={SKELETON_HEIGHT} width={20}>
            lorem
          </Skeleton>
        </Info>
      </td>
    </tr>
  );
}

import { forwardRef } from "react";

import {
  type Icon as IconBasePhosphor,
  type IconProps,
} from "@phosphor-icons/react";

export type IconBaseProps = Readonly<{
  icon: IconBasePhosphor;
}> &
  IconProps;

export const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  ({ icon: IconComponent, ...props }: IconBaseProps, ref) => {
    return (
      <IconComponent className="ph-icon-react" size={24} {...props} ref={ref} />
    );
  }
);

IconBase.displayName = "IconBase";

import { forwardRef } from "react";

import {
  type IconButtonProps as IconButtonPropsJoy,
  IconButton as IconButtonJoy,
} from "@mui/joy";

import type { Icon as IconType } from "@phosphor-icons/react";

import { IconBase } from "@/components/icons";

export type ButtonIconProps = Readonly<{ icon: IconType }> & IconButtonPropsJoy;

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, ...buttonProps }, ref) => {
    const customSX = buttonProps.sx;

    return (
      <IconButtonJoy
        {...buttonProps}
        sx={{ ...customSX, height: "48px", width: "48px" }}
        ref={ref}
      >
        <IconBase size="28px" icon={icon} />
      </IconButtonJoy>
    );
  }
);

ButtonIcon.displayName = "ButtonIcon";

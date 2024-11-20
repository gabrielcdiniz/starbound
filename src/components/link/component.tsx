import { forwardRef, type Ref } from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { Link as JoyLink, LinkProps as JoyLinkProps } from "@mui/joy";

const LinkBehavior = forwardRef(function LinkBehavior(
  props: NextLinkProps,
  ref: Ref<HTMLAnchorElement>
) {
  return <NextLink ref={ref} {...props} />;
});

type LinkProps = JoyLinkProps;

export const Link = ({ ...props }: LinkProps) => {
  return <JoyLink component={LinkBehavior} {...props} />;
};

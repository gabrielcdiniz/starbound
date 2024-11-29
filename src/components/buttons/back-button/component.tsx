"use client";

import { forwardRef, useCallback } from "react";

import { useRouter } from "next/navigation";

import { ButtonIcon, type ButtonIconProps } from "../icon";

type ButtonBackProps = Readonly<{ href?: string }> & ButtonIconProps;

export const ButtonBack = forwardRef<HTMLButtonElement, ButtonBackProps>(
  ({ href, ...props }, ref) => {
    const router = useRouter();

    const navigate = useCallback(
      () => (href ? router.push(href) : router.back()),
      [href, router]
    );

    const handleClick = () => {
      navigate();
    };

    return <ButtonIcon onClick={handleClick} {...props} ref={ref} />;
  }
);

ButtonBack.displayName = "ButtonBack";

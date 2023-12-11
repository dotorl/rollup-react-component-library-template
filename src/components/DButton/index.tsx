import React from "react";
import s from "./DButton.module.scss";
import { DButtonSizeEnum, DButtonVariantEnum } from "./DButton.types";
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    color: boolean;
    gray: boolean;
    gray2: boolean;
    outline: boolean;
    outline2: boolean;
  }

  interface ButtonPropsSizeOverrides {
    lg: boolean;
    md: boolean;
    sm: boolean;
    xs: boolean;
  }
}

interface DButtonProps extends ButtonProps {
  variant?: DButtonVariantEnum;
  size?: DButtonSizeEnum;
}

/**
 * 기본 버튼 컴포넌트
 * @param variant - 버튼 타입
 * @param size - 버튼 사이즈
 * @desc icon 필요한경우 기본 props (startIcon, endIcon)
 * @returns
 */
function DButton({
  variant = DButtonVariantEnum.color,
  size = DButtonSizeEnum.lg,
  children,
  className,
  ...rest
}: DButtonProps) {
  return (
    <Button
      fullWidth
      disableElevation
      className={`${s.DButton} ${s[variant]} ${s[size]} ${className}`}
      {...rest}
    >
      <span className="px-1">{children}</span>
    </Button>
  );
}

export default DButton;

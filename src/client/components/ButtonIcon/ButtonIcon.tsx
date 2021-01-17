import React, { forwardRef } from 'react';
import { cx } from '@emotion/css';

// Core
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';
import { Icon, IconProps } from '../Icon';

// Styles
import classes from './ButtonIcon.styles';

export interface ButtonIconProps extends ButtonBaseProps {
  icon: IconProps['type'],
  size?: IconProps['size']
}

const ButtonIcon = forwardRef((
  props: ButtonIconProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const {
    icon,
    size,
    className,
    ...rest
  } = props;

  return (
    <ButtonBase
      className={cx(classes.root, className)}
      ref={ref}
      {...rest}
    >
      <Icon type={icon} size={size} />
    </ButtonBase>
  );
});

export default ButtonIcon;

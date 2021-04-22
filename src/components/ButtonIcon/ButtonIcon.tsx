import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { ButtonBase, ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { Icon, IconProps } from '../Icon/Icon';

import { cx } from '../../utils';

import './ButtonIcon.scss';

export interface ButtonIconProps extends IconProps, ButtonBaseProps {}

export class ButtonIcon extends Mtx<ButtonIconProps> {
  view({ attrs }: m.Vnode<ButtonIconProps>) {
    const {
      id,
      small,
      className,
      ...rest
    } = attrs;

    return (
      <ButtonBase
        className={cx('button-icon', className)}
        {...rest}
      >
        <Icon id={id} small={small} />
      </ButtonBase>
    );
  }
}

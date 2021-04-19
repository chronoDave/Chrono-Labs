import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { cx } from '../../utils';

import './Icon.scss';

export interface IconProps {
  id: keyof Icon['icons'],
  small?: boolean,
  className?: string
}

export class Icon extends Mtx<IconProps> {
  private icons = {
    chevronLeft: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
    chevronRight: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
    twitter: 'M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z',
    linkedin: 'M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z',
    github: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
    npm: 'M4,10V14H6V11H7V14H8V10H4M9,10V15H11V14H13V10H9M12,11V13H11V11H12M14,10V14H16V11H17V14H18V11H19V14H20V10H14M3,9H21V15H12V16H8V15H3V9Z',
    bandcamp: 'M22,6L15.5,18H2L8.5,6H22Z',
    soundcloud: 'M11.56,8.87V17H20.32V17C22.17,16.87 23,15.73 23,14.33C23,12.85 21.88,11.66 20.38,11.66C20,11.66 19.68,11.74 19.35,11.88C19.11,9.54 17.12,7.71 14.67,7.71C13.5,7.71 12.39,8.15 11.56,8.87M10.68,9.89C10.38,9.71 10.06,9.57 9.71,9.5V17H11.1V9.34C10.95,9.5 10.81,9.7 10.68,9.89M8.33,9.35V17H9.25V9.38C9.06,9.35 8.87,9.34 8.67,9.34C8.55,9.34 8.44,9.34 8.33,9.35M6.5,10V17H7.41V9.54C7.08,9.65 6.77,9.81 6.5,10M4.83,12.5C4.77,12.5 4.71,12.44 4.64,12.41V17H5.56V10.86C5.19,11.34 4.94,11.91 4.83,12.5M2.79,12.22V16.91C3,16.97 3.24,17 3.5,17H3.72V12.14C3.64,12.13 3.56,12.12 3.5,12.12C3.24,12.12 3,12.16 2.79,12.22M1,14.56C1,15.31 1.34,15.97 1.87,16.42V12.71C1.34,13.15 1,13.82 1,14.56Z',
    itchio: 'M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08C57.534 94.073 72.867 94.073 76.7 94.073zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z',
    ffxiv: 'M464 326q-3-6-3.5-15.5T459 300t-3 7q-2 11-7.5 19.5T436 338q-4 2-10 2t-8-.5-6-3.5q-5-5-6-5t-3.5-5.5-2.5-9.5-2.5-8-2.5-8.5 2-7.5 2.5-6.5 1.5-4.5 3.5-1 3-1.5l2.5-7.5q1-9 4-12t2.5-7-1.5-5-3-1q-6 0-7-5t4-7 6.5-6 1-4.5L414 221q-11-8-13-17-3-12 3-21.5t18-11.5q6-1 7-2t1-3.5-1-3.5-4-1.5-3.5-5.5 2.5-6 8.5-5.5 9.5-5 4.5-1.5 0-4 2.5-8q6-12-4-7-4 1-4 3t-3.5 5-5 3.5-7 0-7 1-.5 5 .5 7-2.5 3.5-3 3.5 0 5.5q3 5-5 5-4 0-5.5 2t-3 1.5-5-4-5-4-8.5-.5q-10 1-11.5-.5T365 153t-2 2-1.5 6.5-5 6-7 1.5-8-3.5-3.5-7-3-7-1.5-6 1-5-3.5-4-4.5-.5 0 4-.5 6-4.5 3-5.5 2q-7 5-13 0-4-2-10-2t-7.5-.5-4.5-4-3.5-5.5-.5-10 .5-11 2.5-6q6-10 16.5-12.5T318 102q2 1 3.5 1t5.5-1.5 9.5-2 8.5.5 6-1.5 10.5-2T373 94t7-10.5T390 68q18-18 13-35-2-6-2.5-7t-2.5 3.5-7.5 10T381 47q-10 5-18 1.5T344 55q-7 5-11.5 6.5t-11 1-10-3-5-2.5-6 4.5T295 70q-5 11-14 16t-20 6.5-18.5-1.5-10.5-2.5-7.5 5-4.5 7.5-2.5 10-6 11-5.5 8.5-5 6.5-10 3q-17 1-25-9-4-6-2.5-6.5t3.5-4.5 6.5-5.5 4.5-5.5-1.5-5-5.5-.5-6 0-4.5-3-3.5-4-1-6-2-7.5l-3-3-2 3q-1 2-4.5 4t-4.5 6.5-7 12-6 10-4 5.5q-6 5-15 1-4-1-1 10 1 5 5 6t6.5 6.5 2.5 8-1 5.5 0 5 4.5 4 3.5 3.5-3.5 5-8.5 3.5-8.5-2.5-4-2.5-2 5-4.5 8q-9 9-13.5 10.5t-11 0-11-4.5-5.5-3-5-3q-8-7-4 5 2 7 1 11-3 10-1 11t7 0q10-3 15 5 4 6 1.5 12T60 241q-5 3-6 5t0 7q0 3 1 4t4 1q6 1 9 7.5t0 10.5q-1 2 1 5 6 9 4 28-1 9-4 14.5t-8 9.5l-10 7q-4 3-8 3.5t-7-1-3 .5q0 6 5 14.5T51 374q5 5 7 6t5.5 1 9.5 3.5 8 7.5q5 8 6 26 0 10-1.5 13t-7.5 6-6 4 11.5 3.5 14 2T110 448q21 3 36 17 11 10 12 20 1 5 2 6t5 2 8.5-2 13-6 14-2.5T212 487t12 5.5 10.5.5 7.5-8q5-10 14-13.5t20 .5q13 4 18 13 3 4 9.5 7.5T317 496h7l1-7q0-8 2-11.5t9.5-11.5 13.5-12q12-9 22-9 6 0 8-1 4-2 0-16-4-12 1-23 3-5 9.5-9t12-4.5 8.5-3 5-8.5q3-11 15-17 7-3 12-8.5t10-7.5 9.5-6 4.5-6.5-3-8.5zM235 433q-34 0-62-16.5t-45-45-17-62 17-62 45-45.5 62-17 62.5 17 45 45.5 16.5 62-16.5 62-45 45T235 433z',
    nightoblane: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
    menu: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'
  };

  view({ attrs }: m.Vnode<IconProps>) {
    const { id, small, className } = attrs;

    const getViewbox = () => {
      if (id === 'itchio') return '0 0 245.371 220.736';
      if (id === 'ffxiv') return '0 0 501 512';
      return '0 0 24 24';
    };

    return (
      <svg
        focusable="false"
        viewBox={getViewbox()}
        color="inherit"
        aria-hidden="true"
        className={cx('icon', small && 'icon-small', className)}
      >
        <path d={this.icons[id]} />
      </svg>
    );
  }
}

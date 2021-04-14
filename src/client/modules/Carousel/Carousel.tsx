import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { ButtonIcon, ButtonBase } from '../../components';

import { cx } from '../../utils';

import './Carousel.scss';

export interface CarouselImage {
  key: string
  src: string
  alt: string
}

export interface CarouselProps {
  width: number
  height: number
  images: CarouselImage[]
}

export class Carousel extends Mtx<CarouselProps> {
  private index = 0;
  private size = 0;

  constructor() {
    super();

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleNext() {
    const newIndex = this.index + 1;

    this.index = newIndex > this.size - 1 ?
      0 :
      newIndex;
  }

  handlePrevious() {
    const newIndex = this.index - 1;

    this.index = newIndex < 0 ?
      this.size - 1 :
      newIndex;
  }

  oninit({ attrs }: m.Vnode<CarouselProps>) {
    this.size = attrs.images.length;
  }

  view({ attrs }: m.Vnode<CarouselProps>) {
    const { width, height, images } = attrs;

    return (
      <div
        className="carousel"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {images.map((image, i) => (
          <img
            key={image.key}
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            className="carousel-image"
            style={{ right: `${(this.index - i) * width}px` }}
          />
        ))}
        <ButtonIcon
          id="chevronLeft"
          className={cx('carousel-icon', 'carousel-icon-previous')}
          onclick={this.handlePrevious}
        />
        <ButtonIcon
          id="chevronRight"
          className={cx('carousel-icon', 'carousel-icon-next')}
          onclick={this.handleNext}
        />
        <div className="carousel-bar">
          {images.map((image, i) => (
            <ButtonBase
              key={image.key}
              className={cx(
                'carousel-bar-item',
                this.index === i && 'carousel-bar-item-active'
              )}
              onclick={() => { this.index = i; }}
            />
          ))}
        </div>
      </div>
    );
  }
}

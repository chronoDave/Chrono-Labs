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
  autoPlay?: number
  onChange?: (index: number) => void
}

export class Carousel extends Mtx<CarouselProps> {
  private index = 0;
  private size = 0;
  private delay?: number;
  private interval?: number;
  private onChange?: (index: number) => void;

  constructor() {
    super();

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  destroyInterval() {
    if (this.interval) clearInterval(this.interval);
  }

  createInterval() {
    this.destroyInterval();

    // Cast to number, as we're using the browser interval, not the node interval
    if (this.delay && this.delay > 0) {
      this.interval = setInterval(() => {
        this.handleNext();
        m.redraw();
      }, this.delay) as unknown as number;
    }
  }

  handleNext() {
    const newIndex = this.index + 1;

    this.index = newIndex > this.size - 1 ?
      0 :
      newIndex;

    if (this.onChange) this.onChange(this.index);
    this.createInterval();
  }

  handlePrevious() {
    const newIndex = this.index - 1;

    this.index = newIndex < 0 ?
      this.size - 1 :
      newIndex;

    if (this.onChange) this.onChange(this.index);
    this.createInterval();
  }

  oninit({ attrs }: m.Vnode<CarouselProps>) {
    this.size = attrs.images.length;
    this.delay = attrs.autoPlay;
    this.onChange = attrs.onChange;

    this.createInterval();
  }

  onremove() {
    this.destroyInterval();
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
          aria-label="Previous Image"
        />
        <ButtonIcon
          id="chevronRight"
          className={cx('carousel-icon', 'carousel-icon-next')}
          onclick={this.handleNext}
          aria-label="Next Image"
        />
        <div className="carousel-bar">
          {images.map((image, i) => (
            <ButtonBase
              key={image.key}
              className={cx(
                'carousel-bar-item',
                this.index === i && 'carousel-bar-item-active'
              )}
              onclick={() => {
                this.index = i;
                if (this.onChange) this.onChange(this.index);
              }}
              aria-label={`Go To Image ${i + 1} (${image.alt})`}
            />
          ))}
        </div>
      </div>
    );
  }
}

import React from 'react';
import { cx } from '@emotion/css';

// Core
import { ButtonIcon } from '../ButtonIcon';
import { CarouselBar } from '../CarouselBar';

// Styles
import classes from './Carousel.styles';

export type CarouselImage = {
  src: string,
  alt: string,
  key: string
};

export interface CarouselProps {
  images: CarouselImage[],
  width: number,
  height: number,
  className?: string,
  showBars?: boolean,
  index: number,
  onPrevious: () => void,
  onNext: () => void,
  onClick: (index: number) => void
}

const Carousel = (props: CarouselProps) => {
  const {
    images,
    width,
    height,
    className,
    index,
    onPrevious,
    onNext,
    onClick,
    showBars = false
  } = props;

  return (
    <div
      className={cx(classes.root, className)}
      style={{ width, height }}
    >
      {images.map((image, i) => (
        <img
          key={image.key}
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          className={classes.image}
          style={{
            left: (index - i) * width
          }}
        />
      ))}
      <ButtonIcon
        onClick={onPrevious}
        icon="chevronLeft"
        size="large"
        className={cx(classes.icon, classes.previous)}
      />
      <ButtonIcon
        onClick={onNext}
        icon="chevronRight"
        size="large"
        className={cx(classes.icon, classes.next)}
      />
      {showBars && (
        <CarouselBar
          className={classes.bars}
          keys={images.map(({ key }) => key)}
          active={images[index].key}
          onClick={(_, newIndex: number) => onClick(newIndex)}
        />
      )}
    </div>
  );
};

export default Carousel;

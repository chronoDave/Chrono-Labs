import m from 'mithril';
import { mtx, Mtx } from 'mtx';

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
          />
        ))}
      </div>
    );
  }
}

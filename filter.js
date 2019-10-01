import React from 'react';
import {Image, View} from 'react-native';
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
} from 'react-native-color-matrix-image-filters';

const GrayscaledImage = imageProps => (
  <Grayscale>
    <Image {...imageProps} />
  </Grayscale>
);

const CombinedFiltersImage = imageProps => (
  <Tint amount={1.25}>
    <Sepia>
      <Image {...imageProps} />
    </Sepia>
  </Tint>
);

const ColorMatrixImage = imageProps => (
  <ColorMatrix
    matrix={concatColorMatrices([saturate(-0.9), contrast(5.2), invert()])}
    // alt: matrix={[saturate(-0.9), contrast(5.2), invert()]}
  >
    <Image {...imageProps} />
  </ColorMatrix>
);

export {GrayscaledImage, CombinedFiltersImage, ColorMatrixImage};

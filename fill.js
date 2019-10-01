import {Image} from 'react-native';
import {
  SoftLightBlend,
  Emboss,
  Earlybird,
  Invert,
  RadialGradient,
} from 'react-native-image-filter-kit';

const Result = (
  <Earlybird
    image={
      <SoftLightBlend
        resizeCanvasTo={'dstImage'}
        dstTransform={{
          scale: 'CONTAIN',
        }}
        dstImage={
          <Emboss
            image={
              <Image
                style={{width: 320, height: 320}}
                source={require('./parrot.png')}
                resizeMode={'contain'}
              />
            }
          />
        }
        srcTransform={{
          anchor: {x: 0.5, y: 1},
          translate: {x: 0.5, y: 1},
        }}
        srcImage={
          <Invert
            image={
              <RadialGradient
                colors={['rgba(0, 0, 255, 1)', '#00ff00', 'red']}
                stops={[0.25, 0.75, 1]}
                center={{x: '50w', y: '100h'}}
              />
            }
          />
        }
      />
    }
  />
);

export default Result;

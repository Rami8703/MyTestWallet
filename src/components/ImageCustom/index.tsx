import React, {useState} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SvgUri} from 'react-native-svg';

type Props = {
  image: string;
  stylesImage?: any;
  svgSize: string;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onLayout?: () => void;
};

const CustomImage = ({
  image,
  stylesImage,
  svgSize,
  onLoadStart,
  onLoadEnd,
  onLayout,
}: Props): JSX.Element | null => {
  const [loading, setLoading] = useState(true);

  if (
    image?.endsWith('sol.svg') ||
    image?.endsWith('SOL.svg') ||
    image?.endsWith('SOL2.svg')
  ) {
    return (
      <FastImage
        source={require('../../assets/images/solana-img.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  }
  if (image?.endsWith('btc.svg')) {
    return (
      <FastImage
        source={require('../../assets/images/btc-img.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  }
  if (image?.endsWith('usdt.svg')) {
    return (
      <FastImage
        source={require('../../assets/images/usdt-img.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  }
  if (image?.endsWith('ERC-20.svg')) {
    return (
      <FastImage
        source={require('../../assets/images/erc-img.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  }
  if (image?.endsWith('TRC-20.svg')) {
    return (
      <FastImage
        source={require('../../assets/images/trc-img.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  }
  if (image?.endsWith('TON.svg')) {
    return (
      <FastImage
        source={require('../../assets/images/ton-img.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  }
  if (image?.endsWith('BEP-20.svg')) {
    return (
      <FastImage
        source={require('../../assets/images/bnb-img.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  }
  if (image?.endsWith('ltc.svg')) {
    return (
      <FastImage
        source={require('../../assets/images/ltc-img.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  } else if (image?.endsWith('NOT.svg')) {
    return (
      <View
        onLayout={onLayout}
        style={{
          borderRadius: 40,
          overflow: 'hidden',
        }}>
        <SvgUri width={svgSize} height={svgSize} uri={image} />
      </View>
    );
  } else if (image?.endsWith('.svg')) {
    return (
      <>
        <SvgUri
          onLoad={() => setLoading(false)}
          width={svgSize}
          height={svgSize}
          uri={image}
          onLayout={onLayout}
        />
        {loading && (
          <View
            style={{
              width: Number(svgSize),
              height: Number(svgSize),
              borderRadius: 32,
              backgroundColor: 'grey',
            }}
          />
        )}
      </>
    );
  } else if (image?.endsWith('MAJOR.svg?v=1')) {
    return <SvgUri width={svgSize} height={svgSize} uri={image} />;
  } else {
    return (
      <FastImage
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        source={{uri: image}}
        defaultSource={require('../../assets/images/nft-placeholder.png')}
        style={
          stylesImage
            ? stylesImage
            : {width: Number(svgSize), height: Number(svgSize)}
        }
        onLayout={onLayout}
      />
    );
  }
};

export default React.memo(CustomImage);

import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const IcX = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill="#F2F2F4"
          fillOpacity={0.11}
          d="M28 14c0 7.735-6.265 14-14 14S0 21.735 0 14 6.265 0 14 0s14 6.265 14 14Z"
        />
      </G>
      <G clipPath="url(#c)">
        <Path
          fill="#A8A9B9"
          d="m15.345 12.749 5.95-6.916h-1.41l-5.166 6.005-4.127-6.005H5.833l6.24 9.08-6.24 7.253h1.41l5.455-6.342 4.358 6.342h4.76l-6.472-9.417Zm-1.931 2.245-.633-.905-5.03-7.195h2.166l4.06 5.807.631.904 5.277 7.548H17.72l-4.305-6.16Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
      <ClipPath id="c">
        <Path fill="#fff" d="M5.833 5.833h16.333v16.333H5.833z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IcX;

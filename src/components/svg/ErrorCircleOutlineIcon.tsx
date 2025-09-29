import * as React from 'react';

import Svg, { SvgProps, Path, G, Defs, ClipPath } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 16 16"
    fill="none"
  >
    <G fill="#F75555" clipPath="url(#a)">
      <Path d="M8 4.167a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5ZM8 11.334A.667.667 0 1 0 8 10a.667.667 0 0 0 0 1.334Z" />
      <Path
        fillRule="evenodd"
        d="M.833 8a7.167 7.167 0 1 1 14.334 0A7.167 7.167 0 0 1 .833 8ZM8 1.833a6.167 6.167 0 1 0 0 12.334A6.167 6.167 0 0 0 8 1.834Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const Memo = React.memo(SvgComponent);

export default Memo;

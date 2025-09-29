import * as React from 'react';

import Svg, {G, Mask, Path, SvgProps} from 'react-native-svg';

const IcClose = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props.fill || '#73748E'}
        d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19Z"
      />
    </G>
  </Svg>
);

export default React.memo(IcClose);

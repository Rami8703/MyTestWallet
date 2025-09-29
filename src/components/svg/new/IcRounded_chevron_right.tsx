import * as React from 'react';

import Svg, {G, Mask, Path, SvgProps} from 'react-native-svg';

const IcRounded_chevron_right = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        // fill="#A8A9B9"
        fill={props.fill || '#73748E'}
        d="M12.6 12 8.7 8.1a.948.948 0 0 1-.275-.7c0-.283.091-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .516.092.7.275l4.6 4.6c.1.1.17.208.212.325.042.117.063.242.063.375s-.021.258-.063.375a.877.877 0 0 1-.212.325l-4.6 4.6a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275.948.948 0 0 1-.275-.7c0-.283.091-.517.275-.7l3.9-3.9Z"
      />
    </G>
  </Svg>
);

export default React.memo(IcRounded_chevron_right);

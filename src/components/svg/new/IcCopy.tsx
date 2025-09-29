import * as React from 'react';

import Svg, {G, Mask, Path, SvgProps} from 'react-native-svg';

const IcCopy = (props: SvgProps) => (
  <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
    {/* <Mask id="a" width={25} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M.5 0h24v24H.5z" />
    </Mask> */}
    <G>
      <Path
        fill={props.fill || '#73748E'}
        d="M8 15c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 0 1-.49-1.177v-10c0-.458.164-.85.49-1.177.326-.326.719-.49 1.177-.49h7.5c.458 0 .85.164 1.177.49.326.327.49.719.49 1.177v10c0 .459-.164.851-.49 1.177-.326.327-.719.49-1.177.49H8Zm0-1.667h7.5v-10H8v10Zm-3.333 5c-.459 0-.851-.163-1.177-.49A1.605 1.605 0 0 1 3 16.668V5.833c0-.236.08-.434.24-.593.16-.16.357-.24.593-.24s.434.08.594.24c.16.16.24.357.24.593v10.834H13c.236 0 .434.08.594.24.16.159.24.357.24.593s-.08.434-.24.594a.807.807 0 0 1-.594.24H4.667Z"
      />
    </G>
  </Svg>
);

export default React.memo(IcCopy);

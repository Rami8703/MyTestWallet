import * as React from 'react';

import Svg, {G, Mask, Path, SvgProps} from 'react-native-svg';

const IcRounded_phone = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props.fill || '#F2F2F4'}
        d="M5.833 19.167c-.458 0-.85-.164-1.177-.49a1.605 1.605 0 0 1-.49-1.177v-15c0-.458.164-.85.49-1.177.327-.326.719-.49 1.177-.49h8.334c.458 0 .85.164 1.177.49.326.326.49.719.49 1.177v2.583c.25.098.45.25.604.459.152.208.229.444.229.708v1.667c0 .264-.077.5-.23.708a1.33 1.33 0 0 1-.604.458V17.5c0 .458-.163.85-.49 1.177-.326.326-.718.49-1.176.49H5.833Zm0-1.667h8.334v-15H5.833v15Zm2.5-.833h3.334c.236 0 .434-.08.593-.24.16-.16.24-.358.24-.594a.806.806 0 0 0-.24-.593.806.806 0 0 0-.593-.24H8.333a.806.806 0 0 0-.593.24.806.806 0 0 0-.24.593c0 .236.08.434.24.594.16.16.357.24.593.24Z"
      />
    </G>
  </Svg>
);

export default React.memo(IcRounded_phone);

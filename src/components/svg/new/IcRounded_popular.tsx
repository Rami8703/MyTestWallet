import * as React from 'react';

import Svg, {G, Mask, Path, SvgProps} from 'react-native-svg';

const IcRounded_popular = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props.fill || '#A8A9B9'}
        d="M3.333 15.833h3.333V9.167H3.333v6.666Zm5 0h3.333V4.167H8.333v11.666Zm5 0h3.333v-5h-3.333v5Zm-11.666 0V9.167c0-.459.163-.851.49-1.177.325-.327.718-.49 1.176-.49h3.333V4.167c0-.459.164-.851.49-1.177.326-.327.719-.49 1.177-.49h3.333c.459 0 .851.163 1.178.49.326.326.49.718.49 1.177v5h3.332c.459 0 .851.163 1.178.49.326.326.49.718.49 1.176v5c0 .459-.164.851-.49 1.177-.327.327-.72.49-1.178.49H3.333c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 0 1-.49-1.177Z"
      />
    </G>
  </Svg>
);

export default React.memo(IcRounded_popular);
